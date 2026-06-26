(function() {
  'use strict';

  var state = window.GameState;
  var puzzles = window.PUZZLES || [];
  var currentPuzzle = null;
  var tapCount = 0;
  var bestStreak = 0;

  // Score multipliers
  var SCORE_BASE = 100;
  var STREAK_BONUS = 20;
  var DIFFICULTY_MULT = [0, 1, 1, 1.5, 2, 3];

  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function init() {
    state.score = 0;
    state.hintsRemaining = 3;
    state.lives = 3;
    state.streak = 0;
    state.currentLevel = 0;
    state.completedLevels = [];
    bestStreak = 0;
    tapCount = 0;

    // Shuffle puzzles order
    shuffleArray(puzzles);
    state.totalLevels = puzzles.length;

    updateUI();
  }

  function loadLevel(id) {
    if (id < 0 || id >= puzzles.length) {
      return false;
    }

    state.currentLevel = id;
    currentPuzzle = puzzles[id];
    tapCount = 0;

    updateUI();
    return true;
  }

  function getCurrentPuzzle() {
    return currentPuzzle;
  }

  function checkAnswer(userAnswer) {
    if (!currentPuzzle) {
      return { correct: false, message: 'No active puzzle' };
    }

    var lang = window.i18n.getCurrentLanguage();
    var correctAnswer = currentPuzzle.answer[lang] || currentPuzzle.answer.en || '';

    var isCorrect = false;

    if (currentPuzzle.type === 'tap') {
      // Tap puzzles: answer is in the question type
      if (currentPuzzle.answer.en === 'tap') {
        isCorrect = true;
      } else {
        var tapRequired = parseInt(currentPuzzle.answer.en, 10);
        var userTaps = parseInt(userAnswer, 10);
        isCorrect = userTaps >= tapRequired;
      }
    } else if (currentPuzzle.type === 'shake') {
      isCorrect = userAnswer === 'shake';
    } else if (currentPuzzle.type === 'visual') {
      // Visual puzzles: check interaction type
      var visualInt = currentPuzzle.visual && currentPuzzle.visual.interaction;
      if (visualInt && visualInt.type === 'tap-count') {
        // Tap-count: compare numeric counts
        var visualTapReq = parseInt(currentPuzzle.answer.en, 10);
        var visualUserTaps = parseInt(userAnswer, 10);
        isCorrect = visualUserTaps >= visualTapReq;
      } else {
        // Tap-correct or default: text match
        isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
      }
    } else {
      // text or choice: normalize and compare
      isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
    }

    if (isCorrect) {
      onCorrect();
    } else {
      onWrong();
    }

    return {
      correct: isCorrect,
      message: isCorrect ? window.i18n.t('correct_msg') : window.i18n.t('wrong_msg'),
      puzzle: currentPuzzle
    };
  }

  function normalizeAnswer(str) {
    return String(str).trim().toLowerCase().replace(/[^a-z0-9\u0900-\u097F\s]/g, '').replace(/\s+/g, ' ');
  }

  function onCorrect() {
    state.streak++;
    state.completedLevels.push(state.currentLevel);

    if (state.streak > bestStreak) {
      bestStreak = state.streak;
    }

    // Calculate score
    var diff = currentPuzzle.difficulty || 1;
    var diffMultiplier = DIFFICULTY_MULT[diff] || 1;
    var streakBonus = Math.min(state.streak - 1, 10) * STREAK_BONUS;
    var points = Math.round((SCORE_BASE + streakBonus) * diffMultiplier);
    state.score += points;

    updateUI();
  }

  function onWrong() {
    state.streak = 0;
    state.lives--;
    updateUI();
  }

  function nextLevel() {
    if (state.lives <= 0) {
      return false;
    }

    var nextId = state.currentLevel + 1;
    if (nextId >= puzzles.length) {
      // No more puzzles — game complete
      return false;
    }

    // Skip already completed levels
    while (nextId < puzzles.length && state.completedLevels.indexOf(nextId) !== -1) {
      nextId++;
    }

    if (nextId >= puzzles.length) {
      return false;
    }

    return loadLevel(nextId);
  }

  function useHint() {
    if (state.hintsRemaining <= 0) {
      return null;
    }
    if (!currentPuzzle) {
      return null;
    }
    state.hintsRemaining--;
    var lang = window.i18n.getCurrentLanguage();
    var hintText = currentPuzzle.hint[lang] || currentPuzzle.hint.en || '';
    updateUI();
    return hintText;
  }

  function getScore() {
    return state.score;
  }

  function getStats() {
    return {
      score: state.score,
      streak: state.streak,
      bestStreak: bestStreak,
      lives: state.lives,
      hints: state.hintsRemaining,
      level: state.currentLevel,
      completed: state.completedLevels.length,
      total: state.totalLevels,
      puzzle: currentPuzzle
    };
  }

  function resetTapCount() {
    tapCount = 0;
  }

  function incrementTapCount() {
    tapCount++;
    return tapCount;
  }

  function getTapCount() {
    return tapCount;
  }

  function updateUI() {
    // Update global state
    window.GameState = state;
  }

  // Expose
  window.GameEngine = {
    init: init,
    loadLevel: loadLevel,
    checkAnswer: checkAnswer,
    nextLevel: nextLevel,
    useHint: useHint,
    getCurrentPuzzle: getCurrentPuzzle,
    getScore: getScore,
    getStats: getStats,
    resetTapCount: resetTapCount,
    incrementTapCount: incrementTapCount,
    getTapCount: getTapCount,
    bestStreak: function() { return bestStreak; }
  };
})();
