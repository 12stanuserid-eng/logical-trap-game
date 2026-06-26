(function() {
  'use strict';

  var translations = {
    en: {
      // Welcome
      welcome_title: 'LOGICAL TRAP',
      welcome_subtitle: 'Think outside the box',
      play_btn: 'PLAY',
      settings_btn: 'Settings',

      // Game
      puzzle_n: 'Level {0}',
      score_text: 'Score: {0}',
      hint_btn: '💡 Hint',
      skip_btn: '⏭ Skip',
      submit_btn: 'Submit',
      trap_score: 'TRAP SCORE',
      streak_text: '🔥 {0}',
      lives_text: '❤️ {0}',
      shake_hint: 'Shake your device!',

      // Result
      correct_msg: 'Correct!',
      wrong_msg: 'Wrong!',
      next_btn: 'Next',
      share_btn: '📤 Share',
      restart_btn: 'Restart',

      // Game Over
      game_over: 'Game Over',
      final_score: 'Final Score: {0}',

      // Settings
      settings_title: 'Settings',
      language_btn: 'Language',
      sound_label: 'Sound',
      back_btn: '← Back',
      submit_placeholder: 'Type your answer...',

      // Share
      share_challenge: 'Challenge your friends!',
      share_app_name: 'logicaltrap.app',
      share_save: '📸 Save & Share',

      // Categories
      cat_logic: '🧩 Logic',
      cat_math: '🔢 Math',
      cat_word: '📝 Word',
      cat_tap: '👆 Tap',
      cat_shake: '📱 Shake',
      cat_trick: '🎭 Trick',
      cat_observation: '👁️ Observation',
      cat_lateral: '🧠 Lateral',

      // Generic
      great_job: 'Great job!',
      try_again: 'Try again!',
      awesome: 'Awesome! 🎉',
      keep_going: 'Keep going! 💪',
      level_complete: 'Level Complete!',
      no_hints_left: 'No hints left!',
      answer_correct: 'You got it right!',
      answer_wrong: 'Not quite right.',
    },

    hi: {
      // Welcome
      welcome_title: 'लॉजिकल ट्रैप',
      welcome_subtitle: 'बॉक्स के बाहर सोचें',
      play_btn: 'खेलें',
      settings_btn: 'सेटिंग्स',

      // Game
      puzzle_n: 'स्तर {0}',
      score_text: 'स्कोर: {0}',
      hint_btn: '💡 संकेत',
      skip_btn: '⏭ छोड़ें',
      submit_btn: 'जमा करें',
      trap_score: 'ट्रैप स्कोर',
      streak_text: '🔥 {0}',
      lives_text: '❤️ {0}',
      shake_hint: 'अपना उपकरण हिलाएं!',

      // Result
      correct_msg: 'सही!',
      wrong_msg: 'गलत!',
      next_btn: 'अगला',
      share_btn: '📤 शेयर करें',
      restart_btn: 'पुनः प्रारंभ',

      // Game Over
      game_over: 'खेल खत्म',
      final_score: 'अंतिम स्कोर: {0}',

      // Settings
      settings_title: 'सेटिंग्स',
      language_btn: 'भाषा',
      sound_label: 'ध्वनि',
      back_btn: '← वापस',
      submit_placeholder: 'अपना उत्तर लिखें...',

      // Share
      share_challenge: 'अपने दोस्तों को चुनौती दें!',
      share_app_name: 'logicaltrap.app',
      share_save: '📸 सेव करें & शेयर करें',

      // Categories
      cat_logic: '🧩 तर्क',
      cat_math: '🔢 गणित',
      cat_word: '📝 शब्द',
      cat_tap: '👆 टैप',
      cat_shake: '📱 शेक',
      cat_trick: '🎭 ट्रिक',
      cat_observation: '👁️ अवलोकन',
      cat_lateral: '🧠 पार्श्व',

      // Generic
      great_job: 'बहुत अच्छे!',
      try_again: 'पुनः प्रयास करें!',
      awesome: 'कमाल है! 🎉',
      keep_going: 'चलते रहो! 💪',
      level_complete: 'स्तर पूरा!',
      no_hints_left: 'कोई संकेत नहीं बचा!',
      answer_correct: 'आपने सही उत्तर दिया!',
      answer_wrong: 'बिल्कुल सही नहीं।',
    }
  };

  var currentLang = window.GameState && window.GameState.settings ? window.GameState.settings.language : 'en';

  function t(key) {
    var args = Array.prototype.slice.call(arguments, 1);
    var map = translations[currentLang] || translations.en;
    var str = map[key] || translations.en[key] || key;
    if (args.length > 0) {
      str = str.replace(/\{(\d+)\}/g, function(m, idx) {
        return args[parseInt(idx)] !== undefined ? args[parseInt(idx)] : m;
      });
    }
    return str;
  }

  function setLanguage(lang) {
    if (lang === 'en' || lang === 'hi') {
      currentLang = lang;
      window.GameState.settings.language = lang;
      document.documentElement.lang = lang;
      applyTranslations();
    }
  }

  function getCurrentLanguage() {
    return currentLang;
  }

  function applyTranslations() {
    var elements = document.querySelectorAll('[data-i18n]');
    Array.prototype.forEach.call(elements, function(el) {
      var key = el.getAttribute('data-i18n');
      var argsAttr = el.getAttribute('data-i18n-args');
      var args = argsAttr ? argsAttr.split(',').map(function(s) { return s.trim(); }) : [];
      var translated = t.apply(null, [key].concat(args));
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translated;
      } else {
        el.textContent = translated;
      }
    });
  }

  window.i18n = {
    t: t,
    setLanguage: setLanguage,
    getCurrentLanguage: getCurrentLanguage,
    applyTranslations: applyTranslations
  };
})();
