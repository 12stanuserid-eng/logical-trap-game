(function() {
  'use strict';

  var currentTapCount = 0;
  var tapRequired = 0;
  var shakeSimulated = false;
  var zeroTapTimer = null;

  function clearZeroTapTimer() {
    if (zeroTapTimer) {
      clearTimeout(zeroTapTimer);
      zeroTapTimer = null;
    }
  }

  function setupZeroTapTimer(puzzle) {
    clearZeroTapTimer();
    if (puzzle && puzzle.type === 'tap') {
      var needed = parseInt(puzzle.answer.en, 10);
      if (needed === 0) {
        zeroTapTimer = setTimeout(function() {
          zeroTapTimer = null;
          handleAnswer('0');
        }, 8000);
      }
    }
  }

  function init() {
    bindWelcomeScreen();
    bindGameScreen();
    bindResultScreen();
    bindSettingsScreen();
    bindShareScreen();
    bindGameOver();
  }

  // ====== WELCOME SCREEN ======
  function bindWelcomeScreen() {
    var playBtn = document.getElementById('play-btn');
    var settingsGear = document.getElementById('settings-gear');

    playBtn.addEventListener('click', function() {
      window.GameEngine.init();
      window.GameEngine.loadLevel(0);
      window.Renderer.renderGame();
      window.Renderer.showScreen('game');
    });

    settingsGear.addEventListener('click', function() {
      window.Renderer.renderSettings();
    });
  }

  // ====== GAME SCREEN ======
  function bindGameScreen() {
    // Text submit
    var submitBtn = document.getElementById('submit-btn');
    var answerInput = document.getElementById('answer-input');

    submitBtn.addEventListener('click', function() {
      handleTextSubmit();
    });

    answerInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleTextSubmit();
      }
    });

    // Choice buttons (delegated)
    var choiceGroup = document.getElementById('input-choice-group');
    choiceGroup.addEventListener('click', function(e) {
      var btn = e.target.closest('.choice-btn');
      if (btn) {
        var value = btn.getAttribute('data-value');
        handleAnswer(value);
      }
    });

    // Tap area
    var tapGroup = document.getElementById('input-tap-group');
    tapGroup.addEventListener('click', function(e) {
      var btn = e.target.closest('.btn-tap');
      if (btn) {
        handleTap();
      }
    });

    // Shake area
    var shakeBtn = document.getElementById('shake-simulate-btn');
    shakeBtn.addEventListener('click', function() {
      handleShake();
    });

    // Hint
    document.getElementById('hint-btn').addEventListener('click', function() {
      var hintText = window.GameEngine.useHint();
      if (hintText) {
        window.Renderer.showToast('hint', '💡 ' + hintText);
      } else {
        window.Renderer.showToast('wrong', window.i18n.t('no_hints_left'));
      }
    });

    // Skip
    document.getElementById('skip-btn').addEventListener('click', function() {
      handleSkip();
    });

    // Shake event listener for real device shake
    if (typeof window.DeviceMotionEvent !== 'undefined') {
      var lastShake = 0;
      var SHAKE_THRESHOLD = 15;

      window.addEventListener('devicemotion', function(e) {
        var acc = e.accelerationIncludingGravity;
        if (!acc) return;
        var total = Math.abs(acc.x || 0) + Math.abs(acc.y || 0) + Math.abs(acc.z || 0);
        var now = Date.now();

        if (total > SHAKE_THRESHOLD && now - lastShake > 1000) {
          lastShake = now;
          handleShake();
        }
      });
    }
  }

  function handleTextSubmit() {
    var input = document.getElementById('answer-input');
    var val = input.value.trim();
    if (val === '') return;
    handleAnswer(val);
  }

  function handleAnswer(value) {
    var result = window.GameEngine.checkAnswer(value);
    if (result.correct) {
      window.Renderer.showToast('correct', '✅ ' + result.message);
      setTimeout(function() {
        window.Renderer.renderResult(true, result.message);
      }, 600);
    } else {
      window.Renderer.showToast('wrong', '❌ ' + result.message);
      // Update game UI for lives/streak changes
      setTimeout(function() {
        var stats = window.GameEngine.getStats();
        if (stats.lives <= 0) {
          window.Renderer.renderGameOver();
        } else {
          window.Renderer.renderGame();
        }
      }, 600);
    }
  }

  function handleTap() {
    clearZeroTapTimer();
    var puzzle = window.GameEngine.getCurrentPuzzle();
    if (!puzzle) return;

    if (puzzle.answer.en === 'tap') {
      // Single tap = correct
      handleAnswer('tap');
      return;
    }

    // Count taps
    currentTapCount = window.GameEngine.incrementTapCount();
    var needed = parseInt(puzzle.answer.en, 10) || 0;

    window.Renderer.showToast('correct', '👆 ' + currentTapCount + '/' + needed);

    if (currentTapCount >= needed) {
      setTimeout(function() {
        handleAnswer(String(currentTapCount));
      }, 300);
    }
  }

  function handleShake() {
    var puzzle = window.GameEngine.getCurrentPuzzle();
    if (!puzzle) return;

    // Animate shake icon
    var shakeIcon = document.querySelector('.shake-icon');
    if (shakeIcon) {
      shakeIcon.style.animation = 'shakeActive 0.5s ease';
      setTimeout(function() {
        shakeIcon.style.animation = 'shakeIdle 2s ease-in-out infinite';
      }, 500);
    }

    handleAnswer('shake');
  }

  function handleSkip() {
    // Skip costs nothing, just move to next
    var hasNext = window.GameEngine.nextLevel();
    if (hasNext) {
      window.Renderer.renderGame();
    } else {
      // No more levels, go to result with final score
      window.Renderer.showScreen('result');
      document.getElementById('result-score-value').textContent = String(window.GameEngine.getScore());
    }
  }

  // ====== RESULT SCREEN ======
  function bindResultScreen() {
    document.getElementById('next-btn').addEventListener('click', function() {
      var hasNext = window.GameEngine.nextLevel();
      if (hasNext) {
        window.Renderer.renderGame();
        window.Renderer.showScreen('game');
      } else {
        // Game complete!
        window.Renderer.showToast('correct', '🎉 ' + window.i18n.t('awesome'));
        window.Renderer.showScreen('welcome');
      }
    });

    document.getElementById('share-btn-result').addEventListener('click', function() {
      window.Renderer.renderShare();
    });
  }

  // ====== SETTINGS SCREEN ======
  function bindSettingsScreen() {
    // Language toggle
    var toggles = document.querySelectorAll('.toggle-option');
    toggles.forEach(function(el) {
      el.addEventListener('click', function() {
        var lang = el.getAttribute('data-lang');
        if (lang) {
          window.i18n.setLanguage(lang);
          window.Renderer.renderSettings();
          // Re-translate static elements
          window.i18n.applyTranslations();
          // Re-render game screen if user is currently on it
          var gameScreen = document.getElementById('game-screen');
          if (gameScreen && gameScreen.classList.contains('active')) {
            window.Renderer.renderGame();
          }
        }
      });
    });

    // Sound toggle
    document.getElementById('sound-toggle').addEventListener('click', function() {
      window.GameState.settings.sound = !window.GameState.settings.sound;
      window.Renderer.renderSettings();
    });

    // Back to menu
    document.getElementById('back-to-menu').addEventListener('click', function() {
      window.Renderer.showScreen('welcome');
    });
  }

  // ====== SHARE SCREEN ======
  function bindShareScreen() {
    document.getElementById('share-capture-btn').addEventListener('click', function() {
      // Try native share, fall back to screenshot
      if (navigator.share) {
        var stats = window.GameEngine.getStats();
        navigator.share({
          title: 'Logical Trap',
          text: '🧠 Can you beat my score of ' + stats.score + ' in Logical Trap? Challenge your friends!',
          url: window.location.href
        }).catch(function() {});
      } else {
        // Fallback: copy to clipboard
        var stats = window.GameEngine.getStats();
        var text = '🧠 LOGICAL TRAP\nScore: ' + stats.score + '\nLevels: ' + stats.completed + '/' + stats.total + '\nBest Streak: ' + window.GameEngine.bestStreak() + '\nChallenge your friends!';
        var textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          window.Renderer.showToast('correct', '📋 Copied to clipboard!');
        } catch(e) {}
        document.body.removeChild(textarea);
      }
    });

    document.getElementById('share-close-btn').addEventListener('click', function() {
      window.Renderer.showScreen('welcome');
    });
  }

  // ====== GAME OVER ======
  function bindGameOver() {
    document.getElementById('game-over-restart').addEventListener('click', function() {
      document.getElementById('game-over-overlay').classList.add('hidden');
      window.GameEngine.init();
      window.GameEngine.loadLevel(0);
      window.Renderer.renderGame();
      window.Renderer.showScreen('game');
    });
  }

  // Init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.InputHandler = {
    setupZeroTapTimer: setupZeroTapTimer,
    clearZeroTapTimer: clearZeroTapTimer
  };
})();
