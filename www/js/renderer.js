(function() {
  'use strict';

  var screens = {
    welcome: document.getElementById('welcome-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen'),
    settings: document.getElementById('settings-screen'),
    share: document.getElementById('share-screen')
  };

  var toast = document.getElementById('feedback-toast');
  var gameOverOverlay = document.getElementById('game-over-overlay');

  function showScreen(screenId) {
    Object.keys(screens).forEach(function(key) {
      var el = screens[key];
      if (el) {
        el.classList.remove('active');
      }
    });
    var target = screens[screenId];
    if (target) {
      target.classList.add('active');
    }
  }

  function renderGame() {
    var stats = window.GameEngine.getStats();
    var puzzle = stats.puzzle;

    if (!puzzle) {
      document.getElementById('question-text').textContent = window.i18n.t('level_complete');
      return;
    }

    var lang = window.i18n.getCurrentLanguage();

    // Level indicator
    document.getElementById('question-category').textContent = window.i18n.t('cat_' + puzzle.category);

    // Difficulty dots
    var diffEl = document.getElementById('question-difficulty');
    diffEl.innerHTML = '';
    for (var i = 0; i < 5; i++) {
      var dot = document.createElement('span');
      dot.className = 'diff-dot' + (i < puzzle.difficulty ? ' filled' : '');
      diffEl.appendChild(dot);
    }

    // Question text
    var qText = puzzle.question[lang] || puzzle.question.en || '';
    document.getElementById('question-text').textContent = qText;

    // Top bar
    document.querySelector('.level-indicator').textContent = window.i18n.t('puzzle_n', String(stats.level + 1));
    document.querySelector('.streak-display').textContent = window.i18n.t('streak_text', String(stats.streak));
    document.querySelector('.lives-display').textContent = window.i18n.t('lives_text', String(stats.lives));

    // Score
    document.querySelector('.score-display').textContent = window.i18n.t('score_text', String(stats.score));

    // Progress bar
    var progress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;
    document.getElementById('progress-fill').style.width = Math.min(progress, 100) + '%';

    // Answer area based on puzzle type
    renderAnswerArea(puzzle, lang);

    // Hint button
    var hintBtn = document.getElementById('hint-btn');
    hintBtn.textContent = window.i18n.t('hint_btn') + ' (' + stats.hints + ')';
    hintBtn.disabled = stats.hints <= 0;

    // Hide toast
    toast.classList.add('hidden');
  }

  function renderAnswerArea(puzzle, lang) {
    var textGroup = document.getElementById('input-text-group');
    var choiceGroup = document.getElementById('input-choice-group');
    var tapGroup = document.getElementById('input-tap-group');
    var shakeGroup = document.getElementById('input-shake-group');

    // Hide all
    textGroup.style.display = 'none';
    choiceGroup.style.display = 'none';
    tapGroup.style.display = 'none';
    shakeGroup.style.display = 'none';

    if (puzzle.type === 'choice') {
      choiceGroup.style.display = 'flex';
      renderChoices(puzzle, lang, choiceGroup);
    } else if (puzzle.type === 'tap') {
      tapGroup.style.display = 'flex';
      // Trigger any special tap-puzzle mechanics (e.g. 0-tap timer)
      if (window.InputHandler && window.InputHandler.setupZeroTapTimer) {
        window.InputHandler.setupZeroTapTimer(puzzle);
      }
    } else if (puzzle.type === 'shake') {
      shakeGroup.style.display = 'flex';
    } else {
      textGroup.style.display = 'flex';
      var input = document.getElementById('answer-input');
      input.value = '';
      input.placeholder = window.i18n.t('submit_placeholder');
      input.focus();
    }
  }

  function renderChoices(puzzle, lang, container) {
    container.innerHTML = '';
    var options = puzzle.options || [];
    options.forEach(function(opt, idx) {
      var btn = document.createElement('button');
      btn.className = 'choice-btn';
      // Support both bilingual objects {en, hi} and plain strings
      var displayText = (typeof opt === 'object' && opt !== null) ? (opt[lang] || opt.en || '') : opt;
      var dataValue = (typeof opt === 'object' && opt !== null) ? (opt[lang] || opt.en || '') : opt;
      btn.textContent = String.fromCharCode(65 + idx) + '. ' + displayText;
      btn.setAttribute('data-value', dataValue);
      container.appendChild(btn);
    });
  }

  function renderResult(isCorrect, message) {
    showScreen('result');

    var icon = document.getElementById('result-icon');
    var title = document.getElementById('result-title');
    var msg = document.getElementById('result-message');
    var scoreVal = document.getElementById('result-score-value');

    if (isCorrect) {
      icon.textContent = '✅';
      title.textContent = window.i18n.t('correct_msg');
      title.style.color = '#2ecc71';
      msg.textContent = window.i18n.t('awesome');
    } else {
      icon.textContent = '❌';
      title.textContent = window.i18n.t('wrong_msg');
      title.style.color = '#e74c3c';
      msg.textContent = window.i18n.t('keep_going');
    }

    scoreVal.textContent = String(window.GameEngine.getScore());

    // Check game over
    var stats = window.GameEngine.getStats();
    if (stats.lives <= 0) {
      renderGameOver();
    }
  }

  function renderGameOver() {
    gameOverOverlay.classList.remove('hidden');
    document.getElementById('game-over-score').textContent = window.i18n.t('final_score', String(window.GameEngine.getScore()));
  }

  function renderShare() {
    showScreen('share');
    var stats = window.GameEngine.getStats();
    document.getElementById('share-score-value').textContent = String(stats.score);
    document.getElementById('share-stat-levels').textContent = 'Levels: ' + stats.completed + '/' + stats.total;
    document.getElementById('share-stat-streak').textContent = 'Best Streak: ' + window.GameEngine.bestStreak();
  }

  function renderSettings() {
    showScreen('settings');
    var lang = window.i18n.getCurrentLanguage();
    var toggles = document.querySelectorAll('.toggle-option');
    toggles.forEach(function(el) {
      el.classList.remove('active');
      if (el.getAttribute('data-lang') === lang) {
        el.classList.add('active');
      }
    });

    var soundToggle = document.getElementById('sound-toggle');
    if (window.GameState.settings.sound) {
      soundToggle.classList.add('active');
    } else {
      soundToggle.classList.remove('active');
    }
  }

  function showToast(type, message) {
    toast.className = 'feedback-toast ' + type;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(function() {
      toast.classList.add('hidden');
    }, 2000);
  }

  // Initialize
  window.Renderer = {
    showScreen: showScreen,
    renderGame: renderGame,
    renderResult: renderResult,
    renderGameOver: renderGameOver,
    renderShare: renderShare,
    renderSettings: renderSettings,
    showToast: showToast
  };
})();
