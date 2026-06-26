# Logical Trap - Mobile Brain Puzzle Game

A mobile brain puzzle game for Android built with HTML5, CSS, and JavaScript.

## File Structure

```
logical-trap-game/
├── index.html       # Main HTML5 mobile game page (all 5 screens + game over overlay)
├── manifest.json    # PWA manifest
├── sw.js            # Service worker for offline caching
├── assets/
│   ├── icon-192.png # PWA icon 192x192
│   └── icon-512.png # PWA icon 512x512
├── css/
│   └── style.css    # Mobile-optimized stylesheet (dark theme)
└── js/
    ├── puzzles.js   # 27 puzzles across 8 categories
    ├── i18n.js      # Internationalization (EN/HI)
    ├── game.js      # Core game engine
    ├── renderer.js  # Screen rendering
    └── input.js     # User input handling
```

## Architecture

- **PWA**: Manifest + service worker for installable offline support
- **Screens**: `#welcome-screen`, `#game-screen`, `#result-screen`, `#settings-screen`, `#share-screen` + `#game-over-overlay`
- **GameState**: Single global state object per interface contract
- **i18n**: Bilingual (English/Hindi) with `data-i18n` attributes for declarative translation
- **Input**: Touch-optimized with text/choice/tap/shake input modes

## Interface Contract

```javascript
window.GameState = { currentLevel, score, hintsRemaining, lives, streak, completedLevels, totalLevels, settings:{language, sound} };
// Puzzle: { id, category, title, type:'text'|'choice'|'tap'|'shake', question, answer, hint, difficulty:1-5, options[] }
// GameEngine: .init(), .loadLevel(id), .checkAnswer(a)->{correct,message}, .nextLevel(), .useHint(), .getCurrentPuzzle()
// i18n: .t(key)->str, .setLanguage('en'|'hi'), .getCurrentLanguage()
// Keys: welcome_title,play_btn,settings_btn,puzzle_n,score_text,hint_btn,skip_btn,correct_msg,wrong_msg,game_over,share_btn,language_btn,trap_score,streak_text,lives_text
// Screen divs: #welcome-screen, #game-screen, #result-screen, #settings-screen, #share-screen
```

## Puzzle Types

- `text` - Free text input (normalized comparison)
- `choice` - Multiple choice buttons
- `tap` - Tap the button N times
- `shake` - Shake the device

## Categories

Logic, Math, Word, Tap, Shake, Trick, Observation, Lateral

## Scoring

- Base: 100 points per correct answer
- Difficulty multiplier: 1x-3x
- Streak bonus: up to +200 for 10+ streak
- 3 lives, hints available

## Development

Serve with any HTTP server. No build step required.
```
cd logical-trap-game && python3 -m http.server 8080
```
