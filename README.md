# Build the House

A calm architectural block puzzle built for desktop and laptop browsers. Place falling tetromino-style pieces onto blueprint targets to complete each building.

## Run Locally

Open `index.html` in a browser.

No build step, server, or package install is required.

## Controls

- Left / Right arrows: Move piece
- Up arrow: Rotate piece
- Down arrow: Soft drop
- Space: Hard drop
- P: Pause
- R: Restart current level
- Enter: Start from the main menu or advance after level complete
- Enter after Game Over: Try Again
- R after Game Over: Try Again
- Escape after Game Over: Main Menu

## Features

- 6 building levels: Small House, House With Extension, House With Tower, Church, Windmill, and Castle
- Main menu, level complete overlay, Game Over overlay, and final game complete overlay
- Try Again and Main Menu options after losing
- Keyboard-first controls
- Ghost piece preview
- Score, accuracy, and completion tracking
- Levels are evaluated after no more pieces can spawn
- 80% completion threshold for a successful building
- Required blueprint anchor cells on harder levels
- Builder ratings: Master Builder, Architect, Builder, Apprentice, and Failed Project
- Local records for best score and accuracy per level and final run
- Persistent sound setting
- Web Audio API sound effects with mute toggle
- Sound toggle
- Subtle lock, mistake, and level completion animations
- Responsive desktop-focused blueprint layout

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Web Audio API
- localStorage

## Current Limitations

- Unfinished runs are not restored after page reload.
- The mobile layout is functional but not the primary target.
- Levels are hand-authored ASCII maps.
- There is no level editor yet.
- Dev/test shortcuts exist in code but are disabled for the MVP build.
