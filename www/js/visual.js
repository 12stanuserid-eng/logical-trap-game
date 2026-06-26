(function() {
  'use strict';

  var currentTapCount = 0;

  /**
   * Render a visual puzzle scene inside #input-visual-group
   */
  function renderVisualScene(puzzle) {
    var container = document.getElementById('input-visual-group');
    if (!container || !puzzle.visual) return;

    var lang = window.i18n ? window.i18n.getCurrentLanguage() : 'en';
    var visual = puzzle.visual;

    container.innerHTML = '';
    container.style.display = 'flex';

    // Scene container
    var scene = document.createElement('div');
    scene.className = 'visual-scene';
    if (visual.bg) {
      scene.style.background = visual.bg;
    }

    // Render each element
    (visual.elements || []).forEach(function(el) {
      var elDiv = document.createElement('div');
      elDiv.className = 'visual-element ve-' + (el.type || 'emoji');
      elDiv.setAttribute('data-eid', el.id);
      if (el.correct) {
        elDiv.setAttribute('data-correct', 'true');
      }

      // Position
      var xPos = (typeof el.x === 'number') ? el.x : 50;
      var yPos = (typeof el.y === 'number') ? el.y : 50;
      elDiv.style.left = xPos + '%';
      elDiv.style.top = yPos + '%';

      // Handle type-specific rendering
      switch (el.type) {
        case 'emoji':
          elDiv.textContent = el.content || '❓';
          elDiv.style.fontSize = (el.size || 36) + 'px';
          elDiv.style.width = 'auto';
          elDiv.style.minWidth = (el.size || 36) + 'px';
          elDiv.style.textAlign = 'center';
          elDiv.style.zIndex = el.z || 1;
          break;

        case 'shape':
          elDiv.style.width = (el.w || 50) + 'px';
          elDiv.style.height = (el.h || 50) + 'px';
          elDiv.style.background = el.color || '#fff';
          elDiv.style.borderRadius = (el.shape === 'circle') ? '50%' : (el.shape === 'rounded' ? '8px' : '2px');
          if (el.border) elDiv.style.border = el.border;
          if (el.opacity) elDiv.style.opacity = el.opacity;
          elDiv.style.zIndex = el.z || 1;
          break;

        case 'text':
          elDiv.textContent = el.content[lang] || el.content.en || el.content || '';
          elDiv.style.color = el.color || '#fff';
          elDiv.style.fontSize = (el.size || 18) + 'px';
          elDiv.style.fontWeight = el.bold ? 'bold' : 'normal';
          elDiv.style.whiteSpace = 'nowrap';
          elDiv.style.textShadow = el.shadow ? '0 2px 4px rgba(0,0,0,0.5)' : 'none';
          elDiv.style.zIndex = el.z || 1;
          break;

        case 'button':
          elDiv.textContent = el.content[lang] || el.content.en || el.content || '';
          elDiv.style.padding = '10px 18px';
          elDiv.style.background = el.color || 'linear-gradient(135deg, #e94560, #d63850)';
          elDiv.style.color = '#fff';
          elDiv.style.borderRadius = '16px';
          elDiv.style.fontSize = (el.size || 13) + 'px';
          elDiv.style.fontWeight = 'bold';
          elDiv.style.whiteSpace = 'nowrap';
          elDiv.style.boxShadow = '0 3px 10px rgba(233,69,96,0.3)';
          elDiv.style.zIndex = el.z || 1;
          break;

        case 'line':
          elDiv.style.width = (el.w || 80) + 'px';
          elDiv.style.height = '3px';
          elDiv.style.background = el.color || 'rgba(255,255,255,0.3)';
          elDiv.style.borderRadius = '2px';
          elDiv.style.transform = 'translate(-50%, -50%) rotate(' + (el.rotate || 0) + 'deg)';
          elDiv.style.zIndex = el.z || 1;
          break;

        default:
          elDiv.textContent = el.content || '';
          elDiv.style.zIndex = el.z || 1;
      }

      // Animation
      if (el.animate) {
        elDiv.classList.add('ve-anim-' + el.animate);
      }

      // Interaction: clickable
      var isInteractive = (el.interact === 'tap' || el.interact === 'target');
      if (isInteractive) {
        elDiv.classList.add('ve-interact');
        elDiv.addEventListener('click', function(ev) {
          ev.stopPropagation();
          handleVisualTap(el, puzzle);
        });
        elDiv.addEventListener('touchend', function(ev) {
          ev.preventDefault();
          ev.stopPropagation();
          handleVisualTap(el, puzzle);
        });
      }

      // Interaction: draggable
      if (el.draggable) {
        elDiv.classList.add('ve-draggable');
        elDiv.draggable = true;
        elDiv.setAttribute('data-drag-id', el.id);
        elDiv.addEventListener('dragstart', function(ev) {
          ev.dataTransfer.setData('text/plain', el.id);
          elDiv.classList.add('ve-dragging');
        });
        elDiv.addEventListener('dragend', function(ev) {
          elDiv.classList.remove('ve-dragging');
        });
      }

      scene.appendChild(elDiv);
    });

    // Drop zone for drag puzzles
    var interaction = visual.interaction || {};
    if (interaction.type === 'drag-match') {
      scene.addEventListener('dragover', function(ev) { ev.preventDefault(); });
      scene.addEventListener('drop', function(ev) {
        ev.preventDefault();
        var dragId = ev.dataTransfer.getData('text/plain');
        var targetEl = ev.target.closest('.visual-element[data-eid]');
        if (targetEl) {
          var targetId = targetEl.getAttribute('data-eid');
          // Find dragged element data
          var dragData = null;
          (visual.elements || []).forEach(function(e) {
            if (e.id === dragId) dragData = e;
          });
          if (dragData && dragData.targetId === targetId) {
            submitAnswer(puzzle.answer.en);
          } else {
            shakeElement(targetEl);
          }
        }
      });
    }

    container.appendChild(scene);
    currentTapCount = 0;

    // Zero-tap auto-submit
    if (interaction.type === 'tap-count') {
      var needed = parseInt(puzzle.answer.en, 10);
      if (needed === 0) {
        setTimeout(function() { submitAnswer('0'); }, 8000);
      }
    }
  }

  /**
   * Handle a tap on a visual element
   */
  function handleVisualTap(elData, puzzle) {
    var visual = puzzle.visual || {};
    var interaction = visual.interaction || { type: 'tap-correct' };
    var elDiv = document.querySelector('.visual-element[data-eid="' + elData.id + '"]');

    if (interaction.type === 'tap-correct') {
      if (elData.correct) {
        elementCorrectFeedback(elDiv);
        submitAnswer(puzzle.answer.en);
      } else {
        elementWrongFeedback(elDiv);
        showToast('wrong', getWrongMsg(elData));
      }
    } else if (interaction.type === 'tap-count') {
      currentTapCount++;
      if (elDiv) {
        elDiv.classList.add('ve-tapped');
        setTimeout(function() { elDiv.classList.remove('ve-tapped'); }, 200);
      }
      var needed = parseInt(puzzle.answer.en, 10) || 1;
      showToast('hint', '👆 ' + currentTapCount + '/' + needed);
      if (currentTapCount >= needed) {
        setTimeout(function() { submitAnswer(String(currentTapCount)); }, 300);
      }
    } else if (interaction.type === 'tap-any') {
      // Tap anything submits answer
      elementCorrectFeedback(elDiv);
      submitAnswer(puzzle.answer.en);
    }
  }

  function getWrongMsg(el) {
    var msgs = {
      'guard': '🔊 Too noisy!',
      'bell': '🔔 That rings! Try something else',
      'button': '🚫 Wrong button!',
      'green': '🏠 Not this house',
      'blue': '🏠 Not this house',
      'match': '🔥 Not yet, think first'
    };
    return msgs[el.id] || '❌ Not that! Try again';
  }

  function elementCorrectFeedback(el) {
    if (!el) return;
    el.classList.add('ve-correct');
  }

  function elementWrongFeedback(el) {
    if (!el) return;
    el.classList.add('ve-shake');
    setTimeout(function() { el.classList.remove('ve-shake'); }, 500);
  }

  function shakeElement(el) {
    el.classList.add('ve-shake');
    setTimeout(function() { el.classList.remove('ve-shake'); }, 500);
  }

  function showToast(type, msg) {
    if (window.Renderer && window.Renderer.showToast) {
      window.Renderer.showToast(type, msg);
    }
  }

  function submitAnswer(value) {
    if (window.InputHandler && window.InputHandler.handleAnswer) {
      window.InputHandler.handleAnswer(value);
    } else {
      // Fallback: call game engine directly
      var result = window.GameEngine.checkAnswer(value);
      if (result.correct) {
        showToast('correct', '✅ ' + result.message);
        setTimeout(function() { window.Renderer.renderResult(true, result.message); }, 600);
      } else {
        showToast('wrong', '❌ ' + result.message);
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
  }

  // Export API
  window.VisualRenderer = {
    renderVisualScene: renderVisualScene
  };
})();
