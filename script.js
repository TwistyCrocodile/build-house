const gridElement = document.querySelector("#game-grid");
const statusMessage = document.querySelector("#status-message");
const levelElement = document.querySelector("#level");
const scoreElement = document.querySelector("#score");
const accuracyElement = document.querySelector("#accuracy");
const completionElement = document.querySelector("#completion");
const requiredProgressElement = document.querySelector("#required-progress");
const levelNameNumberElement = document.querySelector("#level-name-number");
const levelNameElement = document.querySelector("#level-name");
const mainMenuOverlay = document.querySelector("#main-menu-overlay");
const startGameButton = document.querySelector("#start-game-button");
const continueGameButton = document.querySelector("#continue-game-button");
const howToPlayButton = document.querySelector("#how-to-play-button");
const menuResetRecordsButton = document.querySelector("#menu-reset-records-button");
const howToPlayOverlay = document.querySelector("#how-to-play-overlay");
const howToPlayBackButton = document.querySelector("#how-to-play-back-button");
const levelCompleteOverlay = document.querySelector("#level-complete-overlay");
const finalAccuracyElement = document.querySelector("#final-accuracy");
const finalCompletionElement = document.querySelector("#final-completion");
const finalRatingElement = document.querySelector("#final-rating");
const finalScoreElement = document.querySelector("#final-score");
const nextLevelButton = document.querySelector("#next-level-button");
const levelBriefOverlay = document.querySelector("#level-brief-overlay");
const briefLevelNumberElement = document.querySelector("#brief-level-number");
const levelBriefTitleElement = document.querySelector("#level-brief-title");
const briefAtmosphereElement = document.querySelector("#brief-atmosphere");
const briefObjectiveElement = document.querySelector("#brief-objective");
const briefHintElement = document.querySelector("#brief-hint");
const briefPreviewElement = document.querySelector("#brief-preview");
const startBuildingButton = document.querySelector("#start-building-button");
const gameOverOverlay = document.querySelector("#game-over-overlay");
const gameOverScoreElement = document.querySelector("#game-over-score");
const gameOverAccuracyElement = document.querySelector("#game-over-accuracy");
const gameOverCompletionElement = document.querySelector("#game-over-completion");
const gameOverRatingElement = document.querySelector("#game-over-rating");
const tryAgainButton = document.querySelector("#try-again-button");
const gameOverMainMenuButton = document.querySelector("#game-over-main-menu-button");
const gameCompleteOverlay = document.querySelector("#game-complete-overlay");
const totalScoreElement = document.querySelector("#total-score");
const totalAccuracyElement = document.querySelector("#total-accuracy");
const playAgainButton = document.querySelector("#play-again-button");
const mainMenuButton = document.querySelector("#main-menu-button");
const soundToggleButton = document.querySelector("#sound-toggle");
const languageToggleButton = document.querySelector("#language-toggle");
const resetRecordsButton = document.querySelector("#reset-records-button");
const bestScoreElement = document.querySelector("#best-score");
const bestAccuracyElement = document.querySelector("#best-accuracy");
const bestFinalScoreElement = document.querySelector("#best-final-score");
const bestFinalAccuracyElement = document.querySelector("#best-final-accuracy");
const controls = document.querySelectorAll("[data-action]");

const gridColumns = 10;
const gridRows = 18;
const fallSpeeds = [700, 600, 500];
const winCompletionThreshold = 0.8;
const isDevMode = false;
const storagePrefix = "buildTheHouse";
const settingsStorageKey = `${storagePrefix}:settings`;
const levelRecordsStorageKey = `${storagePrefix}:levelRecords`;
const finalRecordStorageKey = `${storagePrefix}:finalRecord`;

const translations = {
  en: {
    "app.title": "BUILD THE HOUSE",
    "blueprint.plan": "PLAN 10 x 18",
    "menu.subtitle": "Architectural block puzzle",
    "stats.level": "Level",
    "stats.score": "Score",
    "stats.accuracy": "Accuracy",
    "stats.completion": "Completion",
    "stats.requiredAnchors": "Required Anchors",
    "stats.bestScore": "Best Score",
    "stats.bestAccuracy": "Best Accuracy",
    "stats.rating": "Rating",
    "stats.finalScore": "Final Score",
    "stats.finalAccuracy": "Final Accuracy",
    "stats.bestFinalScore": "Best Final Score",
    "stats.bestFinalAccuracy": "Best Final Accuracy",
    "buttons.soundOn": "Sound: On",
    "buttons.soundOff": "Sound: Off",
    "buttons.language": "🌐 EN",
    "buttons.startGame": "Start Game",
    "buttons.continue": "Continue",
    "buttons.howToPlay": "How To Play",
    "buttons.resetRecords": "Reset Records",
    "buttons.startBuilding": "Start Building",
    "buttons.nextLevel": "Next Level",
    "buttons.tryAgain": "Try Again",
    "buttons.mainMenu": "Main Menu",
    "buttons.playAgain": "Play Again",
    "buttons.back": "Back",
    "buttons.left": "Left",
    "buttons.rotate": "Rotate",
    "buttons.right": "Right",
    "buttons.drop": "Drop",
    "overlays.howToPlay": "How to Play",
    "overlays.levelComplete": "Level Complete",
    "overlays.gameOver": "Game Over",
    "overlays.gameComplete": "Building Collection Complete",
    "gameOver.body": "The building plan collapsed.",
    "how.title": "How to Play",
    "how.rule1": "Build the blueprint using falling blocks.",
    "how.rule2": "Place pieces inside the highlighted building area.",
    "how.rule3": "The game continues until there is no room for another piece.",
    "how.rule4": "When the run ends, the blueprint is evaluated.",
    "how.passTitle": "To pass a level",
    "how.pass1": "build at least 80% of the blueprint",
    "how.pass2": "fill all Required Blueprint Anchors on later levels",
    "how.rating": "The better the construction, the higher your Builder Rating.",
    "how.legendTitle": "Legend",
    "legend.target": "Target Area",
    "legend.required": "Required Anchor",
    "legend.blocks": "Your Blocks",
    "legend.mistakes": "Mistake Cells",
    "controls.title": "Controls",
    "controls.move": "Move",
    "controls.rotate": "Rotate",
    "controls.softDrop": "Soft Drop",
    "controls.hardDrop": "Hard Drop",
    "controls.pause": "Pause",
    "controls.restart": "Restart",
    "controls.restartLevel": "Restart Level",
    "brief.objective": "Objective",
    "brief.hint": "Hint",
    "messages.paused": "Paused",
    "messages.gameOver": "Game Over",
    "messages.levelComplete": "Level Complete",
    "messages.recordsReset": "Saved records reset",
    "messages.mainMenuComingSoon": "Main menu coming soon",
    "ratings.masterBuilder": "Master Builder",
    "ratings.architect": "Architect",
    "ratings.builder": "Builder",
    "ratings.apprentice": "Apprentice",
    "ratings.failedProject": "Failed Project",
    "levels.smallHouse.name": "Small House",
    "levels.smallHouse.atmosphere": "A perfect place to begin.",
    "levels.smallHouse.objective":
      "Build at least 80% of the house. The level ends when no more blocks can be placed. There are no required blueprint anchors.",
    "levels.smallHouse.hint": "Start with the roof and outer walls.",
    "levels.extension.name": "House With Extension",
    "levels.extension.atmosphere": "Every home grows over time.",
    "levels.extension.objective": "Finish the main house before the extension.",
    "levels.extension.hint": "Finish the main house before the extension.",
    "levels.tower.name": "House With Tower",
    "levels.tower.atmosphere": "Build high, but build wisely.",
    "levels.tower.objective": "Build the tower from the bottom.",
    "levels.tower.hint": "Build the tower from the bottom.",
    "levels.church.name": "Church",
    "levels.church.atmosphere": "Precision reaches higher than stone.",
    "levels.church.objective": "Focus on the tall center first.",
    "levels.church.hint": "Focus on the tall center first.",
    "levels.windmill.name": "Windmill",
    "levels.windmill.atmosphere": "Balance every piece carefully.",
    "levels.windmill.objective":
      "Build the center before the blades. Fill all Required Blueprint Anchors.",
    "levels.windmill.hint": "Build the center before the blades.",
    "levels.castle.name": "Castle",
    "levels.castle.atmosphere": "Your greatest architectural challenge.",
    "levels.castle.objective":
      "Secure the towers before filling the walls. Fill all Required Blueprint Anchors.",
    "levels.castle.hint": "Secure the towers before filling the walls.",
  },
  ru: {
    "app.title": "BUILD THE HOUSE",
    "blueprint.plan": "ПЛАН 10 x 18",
    "menu.subtitle": "Архитектурная головоломка с блоками",
    "stats.level": "Уровень",
    "stats.score": "Очки",
    "stats.accuracy": "Точность",
    "stats.completion": "Готовность",
    "stats.requiredAnchors": "Обязательные клетки",
    "stats.bestScore": "Лучшие очки",
    "stats.bestAccuracy": "Лучшая точность",
    "stats.rating": "Итог",
    "stats.finalScore": "Итоговые очки",
    "stats.finalAccuracy": "Итоговая точность",
    "stats.bestFinalScore": "Лучшие итоговые очки",
    "stats.bestFinalAccuracy": "Лучшая итоговая точность",
    "buttons.soundOn": "Звук: вкл.",
    "buttons.soundOff": "Звук: выкл.",
    "buttons.language": "🌐 RU",
    "buttons.startGame": "Начать игру",
    "buttons.continue": "Продолжить",
    "buttons.howToPlay": "Как играть",
    "buttons.resetRecords": "Сбросить рекорды",
    "buttons.startBuilding": "Начать уровень",
    "buttons.nextLevel": "Далее",
    "buttons.tryAgain": "Попробовать снова",
    "buttons.mainMenu": "Главное меню",
    "buttons.playAgain": "Новая игра",
    "buttons.back": "Назад",
    "buttons.left": "Влево",
    "buttons.rotate": "Поворот",
    "buttons.right": "Вправо",
    "buttons.drop": "Вниз",
    "overlays.howToPlay": "Как играть",
    "overlays.levelComplete": "Уровень пройден",
    "overlays.gameOver": "Проект не завершён",
    "overlays.gameComplete": "Коллекция построек завершена",
    "gameOver.body": "Не удалось завершить строительство.",
    "how.title": "Как играть",
    "how.rule1": "Размещайте падающие фигуры внутри области строительства.",
    "how.rule2": "Заполняйте клетки чертежа и старайтесь не выходить за его границы.",
    "how.rule3": "Уровень продолжается, пока на поле есть место для новой фигуры.",
    "how.rule4": "Когда место заканчивается, игра оценивает готовую постройку.",
    "how.passTitle": "Чтобы пройти уровень",
    "how.pass1": "заполните не менее 80% чертежа",
    "how.pass2": "на поздних уровнях заполните все обязательные клетки",
    "how.rating": "Чем аккуратнее постройка, тем выше оценка строительства.",
    "how.legendTitle": "Легенда",
    "legend.target": "Область строительства",
    "legend.required": "Обязательная клетка",
    "legend.blocks": "Ваши блоки",
    "legend.mistakes": "Ошибочные клетки",
    "controls.title": "Управление",
    "controls.move": "Движение",
    "controls.rotate": "Поворот",
    "controls.softDrop": "Ускорить падение",
    "controls.hardDrop": "Быстро поставить",
    "controls.pause": "Пауза",
    "controls.restart": "Перезапуск",
    "controls.restartLevel": "Перезапуск уровня",
    "brief.objective": "Цель",
    "brief.hint": "Совет",
    "messages.paused": "Пауза",
    "messages.gameOver": "Проект не завершён",
    "messages.levelComplete": "Уровень пройден",
    "messages.recordsReset": "Рекорды сброшены",
    "messages.mainMenuComingSoon": "Главное меню скоро появится",
    "ratings.masterBuilder": "Легендарный архитектор",
    "ratings.architect": "Мастер-строитель",
    "ratings.builder": "Опытный строитель",
    "ratings.apprentice": "Подмастерье",
    "ratings.failedProject": "Проект не завершён",
    "levels.smallHouse.name": "Маленький дом",
    "levels.smallHouse.atmosphere": "Идеальное место для начала.",
    "levels.smallHouse.objective":
      "Заполните не менее 80% чертежа. На этом уровне нет обязательных клеток.",
    "levels.smallHouse.hint": "Сначала соберите крышу и внешние стены, затем заполняйте середину.",
    "levels.extension.name": "Дом с пристройкой",
    "levels.extension.atmosphere": "Каждый дом со временем растёт.",
    "levels.extension.objective": "Сначала достройте основной дом, затем переходите к пристройке.",
    "levels.extension.hint": "Не растягивайте основание слишком рано: пристройку удобнее закрывать в конце.",
    "levels.tower.name": "Дом с башней",
    "levels.tower.atmosphere": "Стройте выше, но не теряйте опору.",
    "levels.tower.objective": "Соберите башню снизу вверх, чтобы верхние клетки не остались без опоры.",
    "levels.tower.hint": "Держите центр устойчивым и не перекрывайте место под башню.",
    "levels.church.name": "Церковь",
    "levels.church.atmosphere": "Точность поднимается выше камня.",
    "levels.church.objective": "Постройте высокий шпиль первым, затем переходите к основанию.",
    "levels.church.hint": "Начните с узкого центра: широкий низ проще заполнить позже.",
    "levels.windmill.name": "Мельница",
    "levels.windmill.atmosphere": "Каждая деталь должна держать баланс.",
    "levels.windmill.objective":
      "Сначала соберите центр мельницы, затем аккуратно достройте лопасти. Заполните все обязательные клетки.",
    "levels.windmill.hint": "Обязательные клетки в центре помогут удержать форму лопастей.",
    "levels.castle.name": "Замок",
    "levels.castle.atmosphere": "Ваше главное архитектурное испытание.",
    "levels.castle.objective":
      "Сначала постройте башни, затем соедините их стенами. Заполните все обязательные клетки.",
    "levels.castle.hint": "Закрепите углы и верх башен, прежде чем закрывать широкие стены.",
  },
};

const tetrisPieces = [
  {
    name: "I",
    matrix: [[1, 1, 1, 1]],
  },
  {
    name: "O",
    matrix: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "T",
    matrix: [
      [0, 1, 0],
      [1, 1, 1],
    ],
  },
  {
    name: "L",
    matrix: [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
  },
  {
    name: "J",
    matrix: [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
  },
  {
    name: "S",
    matrix: [
      [0, 1, 1],
      [1, 1, 0],
    ],
  },
  {
    name: "Z",
    matrix: [
      [1, 1, 0],
      [0, 1, 1],
    ],
  },
];

const levels = [
  {
    name: "Small House",
    translationKey: "levels.smallHouse",
    objective:
      "Build at least 80% of the house. The level ends when no more blocks can be placed. There are no required blueprint anchors.",
    hint: "Start with the roof and outer walls.",
    // Level maps use "." for empty, "#" for target, "R" for required target, and "O" for outline-only cells.
    map: [
      "..........",
      "..........",
      "..........",
      "..........",
      "....#.....",
      "...###....",
      "..#####...",
      "..#####...",
      "..#####...",
      "..#####...",
      "...####...",
      "...####...",
      "...####...",
      "...####...",
      "..........",
      "..........",
      "..........",
      "..........",
    ],
  },
  {
    name: "House With Extension",
    translationKey: "levels.extension",
    objective: "Finish the main house before the extension.",
    hint: "Finish the main house before the extension.",
    map: [
      "..........",
      "..........",
      "..........",
      "....#.....",
      "...###....",
      "..#####...",
      "..#####...",
      "..#####...",
      "..#####...",
      "..#####...",
      "..#######.",
      "..#######.",
      "..#######.",
      "..#######.",
      "..........",
      "..........",
      "..........",
      "..........",
    ],
  },
  {
    name: "House With Tower",
    translationKey: "levels.tower",
    objective: "Build the tower from the bottom.",
    hint: "Build the tower from the bottom.",
    map: [
      "..........",
      "..........",
      ".....#....",
      "....###...",
      "....###...",
      "....###...",
      "....###...",
      "...#####..",
      "..#######.",
      "..#######.",
      "..#######.",
      "..#######.",
      "..#######.",
      "..#######.",
      "..#######.",
      "..........",
      "..........",
      "..........",
    ],
  },
  {
    name: "Church",
    translationKey: "levels.church",
    objective: "Focus on the tall center first.",
    hint: "Focus on the tall center first.",
    map: [
      "..........",
      "....#.....",
      "...###....",
      "....#.....",
      "...###....",
      "...###....",
      "..#####...",
      "..#####...",
      "..#####...",
      ".#######..",
      ".#######..",
      ".#######..",
      ".#######..",
      ".###.###..",
      ".###.###..",
      ".#######..",
      "..........",
      "..........",
    ],
  },
  {
    name: "Windmill",
    translationKey: "levels.windmill",
    objective: "Build the center before the blades. Fill all Required Blueprint Anchors.",
    hint: "Build the center before the blades.",
    map: [
      "..........",
      "....#.....",
      "#...#...#.",
      ".#..#..#..",
      "..##R##...",
      "...###....",
      "..#####...",
      "...#R#....",
      "...###....",
      "..#####...",
      "..##R##...",
      "..#####...",
      ".#######..",
      ".#######..",
      ".#######..",
      "..#####...",
      "..........",
      "..........",
    ],
  },
  {
    name: "Castle",
    translationKey: "levels.castle",
    objective: "Secure the towers before filling the walls. Fill all Required Blueprint Anchors.",
    hint: "Secure the towers before filling the walls.",
    map: [
      "..........",
      ".R#....#R.",
      ".##....##.",
      "R########R",
      "#.#.##.#.#",
      "##########",
      "###.##.###",
      "###.##.###",
      "##########",
      "##########",
      "##########",
      "###....###",
      "###....###",
      "##########",
      "####RR####",
      "####RR####",
      "R########R",
      "..........",
    ],
  },
];

let currentLevelIndex = 0;
let outlineCells = new Set();
let targetCells = new Set();
let requiredCells = new Set();
let currentPiece = null;
let currentPiecePosition = { column: 0, row: 0 };
const placedCells = new Set();
const correctPlacedCells = new Set();
const wrongPlacedCells = new Set();
const justLockedCells = new Set();
const mistakeFlashCells = new Set();
const levelCompleteGlowCells = new Set();
let score = 0;
let totalScore = 0;
let totalCorrectCells = 0;
let totalPlacedCells = 0;
const completedLevelTotals = new Map();
let isPaused = false;
let isGameOver = false;
let isLevelComplete = false;
let isGameComplete = false;
let isMainMenuOpen = true;
let isGameOverOverlayOpen = false;
let isLevelBriefOpen = false;
let isHowToPlayOpen = false;
let hasStartedGame = false;
let currentLevelTotalsAdded = false;
let fallIntervalId = null;
let lockFeedbackTimeoutId = null;
let mistakeFlashTimeoutId = null;
let levelCompleteGlowTimeoutId = null;
let levelCompleteOverlayTimeoutId = null;
let audioContext = null;
let isSoundMuted = false;
let currentLanguage = "en";
let currentStatusMessageKey = "";
let hasUserInteracted = false;

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function getLocalizedLevelText(level, field) {
  return t(`${level.translationKey}.${field}`);
}

function setLanguage(language) {
  currentLanguage = language === "ru" ? "ru" : "en";
  saveSettings();
  updateTexts();
}

function toggleLanguage() {
  setLanguage(currentLanguage === "en" ? "ru" : "en");
}

function updateTexts() {
  document.documentElement.lang = currentLanguage;
  document.title = t("app.title");
  gridElement.dataset.planLabel = t("blueprint.plan");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  updateSoundToggleLabel();
  updateLanguageToggleLabel();
  loadCurrentLevel();
  updateStatusMessageDisplay();

  if (isLevelBriefOpen) {
    updateLevelBriefText();
  }

  if (!levelCompleteOverlay.classList.contains("hidden")) {
    updateLevelCompleteOverlay();
  }

  if (isGameOverOverlayOpen) {
    updateGameOverOverlay();
  }
}

function readStoredJson(key, fallbackValue) {
  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallbackValue;
  } catch (error) {
    return fallbackValue;
  }
}

function writeStoredJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Ignore storage failures so gameplay continues in private or restricted modes.
  }
}

// Best records and sound settings are stored locally per browser.
function loadSettings() {
  const settings = readStoredJson(settingsStorageKey, {});
  isSoundMuted = settings.soundMuted === true;
  currentLanguage = settings.language === "ru" ? "ru" : "en";
}

function saveSettings() {
  writeStoredJson(settingsStorageKey, {
    soundMuted: isSoundMuted,
    language: currentLanguage,
  });
}

function getLevelRecords() {
  const records = readStoredJson(levelRecordsStorageKey, {});
  return records && typeof records === "object" ? records : {};
}

function getLevelRecord(levelIndex = currentLevelIndex) {
  const records = getLevelRecords();
  const record = records[levelIndex] || {};

  return {
    bestScore: Number.isFinite(record.bestScore) ? record.bestScore : 0,
    bestAccuracy: Number.isFinite(record.bestAccuracy) ? record.bestAccuracy : 0,
  };
}

function saveLevelRecord(levelIndex, nextRecord) {
  const records = getLevelRecords();
  records[levelIndex] = {
    bestScore: nextRecord.bestScore,
    bestAccuracy: nextRecord.bestAccuracy,
  };
  writeStoredJson(levelRecordsStorageKey, records);
}

function updateBestStatsDisplay() {
  const record = getLevelRecord();
  bestScoreElement.textContent = record.bestScore;
  bestAccuracyElement.textContent = `${record.bestAccuracy}%`;
}

function updateLevelRecord() {
  const currentAccuracy = calculateAccuracy();
  const record = getLevelRecord();
  const nextRecord = {
    bestScore: Math.max(record.bestScore, score),
    bestAccuracy: Math.max(record.bestAccuracy, currentAccuracy),
  };

  saveLevelRecord(currentLevelIndex, nextRecord);
  updateBestStatsDisplay();
}

function getFinalRecord() {
  const record = readStoredJson(finalRecordStorageKey, {});

  return {
    bestFinalScore: Number.isFinite(record.bestFinalScore) ? record.bestFinalScore : 0,
    bestFinalAccuracy: Number.isFinite(record.bestFinalAccuracy)
      ? record.bestFinalAccuracy
      : 0,
  };
}

function saveFinalRecord() {
  const currentFinalAccuracy = calculateFinalAccuracy();
  const record = getFinalRecord();
  const nextRecord = {
    bestFinalScore: Math.max(record.bestFinalScore, totalScore),
    bestFinalAccuracy: Math.max(record.bestFinalAccuracy, currentFinalAccuracy),
  };

  writeStoredJson(finalRecordStorageKey, nextRecord);
  return nextRecord;
}

function updateFinalRecordDisplay(record = getFinalRecord()) {
  bestFinalScoreElement.textContent = record.bestFinalScore;
  bestFinalAccuracyElement.textContent = `${record.bestFinalAccuracy}%`;
}

function resetRecords() {
  try {
    window.localStorage.removeItem(levelRecordsStorageKey);
    window.localStorage.removeItem(finalRecordStorageKey);
  } catch (error) {
    // Keep the current game running even if storage is unavailable.
  }

  updateBestStatsDisplay();
  updateFinalRecordDisplay({
    bestFinalScore: 0,
    bestFinalAccuracy: 0,
  });
  setStatusMessage("messages.recordsReset");
}

function initAudio() {
  if (isSoundMuted || !hasUserInteracted) {
    return null;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function playTone({
  frequency = 220,
  endFrequency = frequency,
  duration = 0.08,
  type = "sine",
  gain = 0.025,
  delay = 0,
}) {
  const context = initAudio();

  if (!context || isSoundMuted) {
    return;
  }

  const startTime = context.currentTime + delay;
  const endTime = startTime + duration;
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  oscillator.frequency.exponentialRampToValueAtTime(endFrequency, endTime);

  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.linearRampToValueAtTime(gain, startTime + 0.012);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, endTime);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(endTime + 0.01);
}

function playMoveSound() {
  playTone({ frequency: 180, endFrequency: 205, duration: 0.045, gain: 0.014 });
}

function playRotateSound() {
  playTone({ frequency: 235, endFrequency: 310, duration: 0.075, gain: 0.018 });
}

function playDropSound(isHardDrop = false) {
  if (isHardDrop) {
    playTone({
      frequency: 180,
      endFrequency: 120,
      duration: 0.12,
      type: "triangle",
      gain: 0.024,
    });
    return;
  }

  playTone({ frequency: 160, endFrequency: 145, duration: 0.045, gain: 0.013 });
}

function playLockSound() {
  playTone({
    frequency: 128,
    endFrequency: 104,
    duration: 0.16,
    type: "triangle",
    gain: 0.026,
  });
}

function playMistakeSound() {
  playTone({
    frequency: 92,
    endFrequency: 78,
    duration: 0.18,
    type: "triangle",
    gain: 0.02,
  });
}

function playLevelCompleteSound() {
  playTone({ frequency: 220, endFrequency: 260, duration: 0.16, gain: 0.021 });
  playTone({ frequency: 330, endFrequency: 390, duration: 0.2, gain: 0.018, delay: 0.08 });
}

function playGameCompleteSound() {
  playTone({ frequency: 196, endFrequency: 247, duration: 0.18, gain: 0.022 });
  playTone({ frequency: 294, endFrequency: 370, duration: 0.24, gain: 0.019, delay: 0.1 });
  playTone({ frequency: 392, endFrequency: 494, duration: 0.3, gain: 0.017, delay: 0.22 });
}

function updateSoundToggleLabel() {
  soundToggleButton.textContent = isSoundMuted ? t("buttons.soundOff") : t("buttons.soundOn");
  soundToggleButton.setAttribute("aria-pressed", String(!isSoundMuted));
}

function updateLanguageToggleLabel() {
  languageToggleButton.textContent = t("buttons.language");
}

function toggleSound() {
  isSoundMuted = !isSoundMuted;

  if (!isSoundMuted) {
    initAudio();
  }

  saveSettings();
  updateSoundToggleLabel();
}

function handleUserInteraction() {
  hasUserInteracted = true;
  initAudio();
}

function getCellFromMap(mapRows, column, row) {
  if (row < 0 || row >= mapRows.length || column < 0 || column >= gridColumns) {
    return ".";
  }

  return mapRows[row][column];
}

function isTargetMapSymbol(symbol) {
  return symbol === "#" || symbol === "R";
}

function isBorderTargetCell(mapRows, column, row) {
  const neighbors = [
    getCellFromMap(mapRows, column, row - 1),
    getCellFromMap(mapRows, column + 1, row),
    getCellFromMap(mapRows, column, row + 1),
    getCellFromMap(mapRows, column - 1, row),
  ];

  return neighbors.some((cell) => !isTargetMapSymbol(cell));
}

function parseLevelMap(mapRows) {
  if (mapRows.length !== gridRows) {
    throw new Error(`Level map must have ${gridRows} rows.`);
  }

  const parsedOutlineCells = new Set();
  const parsedTargetCells = new Set();
  const parsedRequiredCells = new Set();

  mapRows.forEach((mapRow, row) => {
    if (mapRow.length !== gridColumns) {
      throw new Error(`Level map row ${row} must have ${gridColumns} columns.`);
    }

    [...mapRow].forEach((symbol, column) => {
      const cellKey = `${column}-${row}`;

      if (![".", "#", "O", "R"].includes(symbol)) {
        throw new Error(`Unknown level map symbol "${symbol}" at ${column},${row}.`);
      }

      if (isTargetMapSymbol(symbol)) {
        parsedTargetCells.add(cellKey);

        if (isBorderTargetCell(mapRows, column, row)) {
          parsedOutlineCells.add(cellKey);
        }
      }

      if (symbol === "R") {
        parsedRequiredCells.add(cellKey);
      }

      if (symbol === "O") {
        parsedOutlineCells.add(cellKey);
      }
    });
  });

  return {
    outlineCells: parsedOutlineCells,
    targetCells: parsedTargetCells,
    requiredCells: parsedRequiredCells,
  };
}

function getCurrentLevel() {
  return levels[currentLevelIndex];
}

function renderBriefPreview(level) {
  const parsedLevel = parseLevelMap(level.map);

  briefPreviewElement.innerHTML = "";

  for (let row = 0; row < gridRows; row += 1) {
    for (let column = 0; column < gridColumns; column += 1) {
      const cell = document.createElement("div");
      const cellKey = `${column}-${row}`;

      cell.className = "brief-preview-cell";

      if (parsedLevel.targetCells.has(cellKey)) {
        cell.classList.add("target-cell");
      }

      if (parsedLevel.outlineCells.has(cellKey)) {
        cell.classList.add("outline");
      }

      if (parsedLevel.requiredCells.has(cellKey)) {
        cell.classList.add("required-cell");
      }

      briefPreviewElement.appendChild(cell);
    }
  }
}

function loadCurrentLevel() {
  const level = getCurrentLevel();
  const displayedLevelNumber = currentLevelIndex + 1;
  const parsedLevel = parseLevelMap(level.map);

  outlineCells = parsedLevel.outlineCells;
  targetCells = parsedLevel.targetCells;
  requiredCells = parsedLevel.requiredCells;
  levelElement.textContent = displayedLevelNumber;
  levelNameNumberElement.textContent = displayedLevelNumber;
  levelNameElement.textContent = getLocalizedLevelText(level, "name");
  updateBestStatsDisplay();
}

function getPieceCells(piece = currentPiece, position = currentPiecePosition) {
  if (!piece) {
    return [];
  }

  const cells = [];

  piece.matrix.forEach((pieceRow, rowIndex) => {
    pieceRow.forEach((value, columnIndex) => {
      if (value) {
        cells.push({
          column: position.column + columnIndex,
          row: position.row + rowIndex,
        });
      }
    });
  });

  return cells;
}

function getGhostPieceCells() {
  if (
    isMainMenuOpen ||
    isLevelBriefOpen ||
    isHowToPlayOpen ||
    isPaused ||
    isGameOver ||
    isLevelComplete ||
    isGameComplete ||
    !currentPiece
  ) {
    return [];
  }

  const ghostPosition = { ...currentPiecePosition };

  while (
    canPlacePiece(currentPiece, {
      column: ghostPosition.column,
      row: ghostPosition.row + 1,
    })
  ) {
    ghostPosition.row += 1;
  }

  return getPieceCells(currentPiece, ghostPosition);
}

function renderCellClasses(cell, cellKey, activeCells, ghostCells) {
  if (outlineCells.has(cellKey)) {
    cell.classList.add("outline");
  }

  if (targetCells.has(cellKey)) {
    cell.classList.add("target-cell");
  }

  if (requiredCells.has(cellKey)) {
    cell.classList.add("required-cell");
  }

  if (correctPlacedCells.has(cellKey)) {
    cell.classList.add("correct-cell");
  }

  if (wrongPlacedCells.has(cellKey)) {
    cell.classList.add("wrong-cell");
  }

  if (ghostCells.has(cellKey) && !activeCells.has(cellKey) && !placedCells.has(cellKey)) {
    cell.classList.add("ghost-piece");
  }

  if (activeCells.has(cellKey)) {
    cell.classList.add("active-piece");
  }

  if (justLockedCells.has(cellKey)) {
    cell.classList.add("just-locked-cell");
  }

  if (mistakeFlashCells.has(cellKey)) {
    cell.classList.add("mistake-flash-cell");
  }

  if (levelCompleteGlowCells.has(cellKey)) {
    cell.classList.add("level-complete-glow-cell");
  }
}

function renderGrid() {
  gridElement.innerHTML = "";
  const activeCells = currentPiece
    ? new Set(getPieceCells().map(({ column, row }) => `${column}-${row}`))
    : new Set();
  const ghostCells = new Set(
    getGhostPieceCells().map(({ column, row }) => `${column}-${row}`)
  );

  for (let row = 0; row < gridRows; row += 1) {
    for (let column = 0; column < gridColumns; column += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      const cellKey = `${column}-${row}`;

      renderCellClasses(cell, cellKey, activeCells, ghostCells);
      gridElement.appendChild(cell);
    }
  }
}

function spawnPiece() {
  if (
    isMainMenuOpen ||
    isLevelBriefOpen ||
    isHowToPlayOpen ||
    isGameOver ||
    isLevelComplete ||
    isGameComplete
  ) {
    return;
  }

  const nextPiece = tetrisPieces[Math.floor(Math.random() * tetrisPieces.length)];
  const spawnColumn = Math.floor((gridColumns - nextPiece.matrix[0].length) / 2);

  currentPiece = {
    name: nextPiece.name,
    matrix: nextPiece.matrix.map((row) => [...row]),
  };
  currentPiecePosition = {
    column: spawnColumn,
    row: 0,
  };

  if (!canPlacePiece(currentPiece, currentPiecePosition)) {
    currentPiece = null;
    stopAutoFall();

    if (isLevelWinReady()) {
      completeCurrentLevel();
    } else {
      isGameOver = true;
      setStatusMessage("messages.gameOver");
      showGameOverOverlay();
    }
  }

  renderGrid();
}

function isTargetCell(column, row) {
  return targetCells.has(`${column}-${row}`);
}

function canPlacePiece(piece = currentPiece, position = currentPiecePosition) {
  if (!piece) {
    return false;
  }

  return getPieceCells(piece, position).every(({ column, row }) => {
    const isInsideGrid =
      column >= 0 && column < gridColumns && row >= 0 && row < gridRows;
    const isCellEmpty = !placedCells.has(`${column}-${row}`);

    return isInsideGrid && isCellEmpty;
  });
}

function movePiece(columnOffset, rowOffset) {
  if (
    isMainMenuOpen ||
    isLevelBriefOpen ||
    isHowToPlayOpen ||
    isPaused ||
    isGameOver ||
    isLevelComplete ||
    isGameComplete ||
    !currentPiece
  ) {
    return false;
  }

  const nextPosition = {
    column: currentPiecePosition.column + columnOffset,
    row: currentPiecePosition.row + rowOffset,
  };

  if (!canPlacePiece(currentPiece, nextPosition)) {
    return false;
  }

  currentPiecePosition = nextPosition;
  renderGrid();
  return true;
}

function rotatePiece() {
  if (
    isMainMenuOpen ||
    isLevelBriefOpen ||
    isHowToPlayOpen ||
    isPaused ||
    isGameOver ||
    isLevelComplete ||
    isGameComplete ||
    !currentPiece
  ) {
    return false;
  }

  const rotatedMatrix = currentPiece.matrix[0].map((_, columnIndex) =>
    currentPiece.matrix.map((row) => row[columnIndex]).reverse()
  );
  const rotatedPiece = {
    ...currentPiece,
    matrix: rotatedMatrix,
  };

  if (!canPlacePiece(rotatedPiece, currentPiecePosition)) {
    return false;
  }

  currentPiece = rotatedPiece;
  renderGrid();
  return true;
}

function lockPiece() {
  if (!currentPiece) {
    return;
  }

  const lockedCells = getPieceCells();
  const wrongCells = [];

  lockedCells.forEach(({ column, row }) => {
    const cellKey = `${column}-${row}`;

    placedCells.add(cellKey);

    if (isTargetCell(column, row)) {
      correctPlacedCells.add(cellKey);
    } else {
      wrongPlacedCells.add(cellKey);
      wrongCells.push(cellKey);
    }
  });

  markJustLockedCells(lockedCells);
  markMistakeFlashCells(wrongCells);
  playLockSound();

  if (wrongCells.length > 0) {
    playMistakeSound();
  }

  scoreLockedPiece(lockedCells);
  updateStats();

  spawnPiece();
}

function clearTimeoutIfActive(timeoutId) {
  if (timeoutId) {
    window.clearTimeout(timeoutId);
  }
}

function replaceFeedbackCells(feedbackSet, cellKeys) {
  feedbackSet.clear();
  cellKeys.forEach((cellKey) => feedbackSet.add(cellKey));
}

function clearLockFeedback() {
  justLockedCells.clear();
  lockFeedbackTimeoutId = null;
  renderGrid();
}

function clearMistakeFlashFeedback() {
  mistakeFlashCells.clear();
  mistakeFlashTimeoutId = null;
  renderGrid();
}

function clearLevelCompleteFeedback() {
  levelCompleteGlowCells.clear();
  levelCompleteGlowTimeoutId = null;
  renderGrid();
}

function clearFeedbackTimers() {
  clearTimeoutIfActive(lockFeedbackTimeoutId);
  clearTimeoutIfActive(mistakeFlashTimeoutId);
  clearTimeoutIfActive(levelCompleteGlowTimeoutId);
  clearTimeoutIfActive(levelCompleteOverlayTimeoutId);
  lockFeedbackTimeoutId = null;
  mistakeFlashTimeoutId = null;
  levelCompleteGlowTimeoutId = null;
  levelCompleteOverlayTimeoutId = null;
}

function clearFeedbackState() {
  clearFeedbackTimers();
  justLockedCells.clear();
  mistakeFlashCells.clear();
  levelCompleteGlowCells.clear();
}

function markJustLockedCells(lockedCells) {
  clearTimeoutIfActive(lockFeedbackTimeoutId);
  replaceFeedbackCells(
    justLockedCells,
    lockedCells.map(({ column, row }) => `${column}-${row}`)
  );
  lockFeedbackTimeoutId = window.setTimeout(clearLockFeedback, 420);
}

function markMistakeFlashCells(cellKeys) {
  clearTimeoutIfActive(mistakeFlashTimeoutId);
  replaceFeedbackCells(mistakeFlashCells, cellKeys);

  if (mistakeFlashCells.size === 0) {
    mistakeFlashTimeoutId = null;
    return;
  }

  mistakeFlashTimeoutId = window.setTimeout(clearMistakeFlashFeedback, 360);
}

function triggerLevelCompleteFeedback() {
  clearTimeoutIfActive(levelCompleteGlowTimeoutId);
  replaceFeedbackCells(levelCompleteGlowCells, targetCells);
  levelCompleteGlowTimeoutId = window.setTimeout(clearLevelCompleteFeedback, 700);
  renderGrid();
}

function showLevelCompleteAfterDelay() {
  clearTimeoutIfActive(levelCompleteOverlayTimeoutId);
  levelCompleteOverlayTimeoutId = window.setTimeout(() => {
    levelCompleteOverlayTimeoutId = null;

    if (!isLevelComplete || isGameComplete) {
      return;
    }

    showLevelCompleteOverlay();
  }, 600);
}

function dropPieceOneCell() {
  if (
    isMainMenuOpen ||
    isLevelBriefOpen ||
    isHowToPlayOpen ||
    isPaused ||
    isGameOver ||
    isLevelComplete ||
    isGameComplete ||
    !currentPiece
  ) {
    return false;
  }

  if (movePiece(0, 1)) {
    return true;
  }

  lockPiece();
  return false;
}

function softDropPiece() {
  if (
    isMainMenuOpen ||
    isLevelBriefOpen ||
    isHowToPlayOpen ||
    isPaused ||
    isGameOver ||
    isLevelComplete ||
    isGameComplete ||
    !currentPiece
  ) {
    return false;
  }

  if (movePiece(0, 1)) {
    score += 1;
    updateStats();
    return true;
  }

  lockPiece();
  return false;
}

function hardDrop() {
  if (
    isMainMenuOpen ||
    isLevelBriefOpen ||
    isHowToPlayOpen ||
    isPaused ||
    isGameOver ||
    isLevelComplete ||
    isGameComplete ||
    !currentPiece
  ) {
    return false;
  }

  let droppedRows = 0;

  while (movePiece(0, 1)) {
    droppedRows += 1;
  }

  score += droppedRows * 2;
  updateStats();
  lockPiece();
  return droppedRows > 0;
}

function scoreLockedPiece(lockedCells) {
  const correctCellCount = lockedCells.filter(({ column, row }) =>
    isTargetCell(column, row)
  ).length;
  const wrongCellCount = lockedCells.length - correctCellCount;
  const isEntirePieceInsideTarget = correctCellCount === lockedCells.length;

  // Scoring rewards target coverage, penalizes off-plan cells, and gives a clean-placement bonus.
  score += correctCellCount * 10;
  score -= wrongCellCount * 5;

  if (isEntirePieceInsideTarget) {
    score += 20;
  }

  score = Math.max(0, score);
}

function calculateAccuracy() {
  if (placedCells.size === 0) {
    return 0;
  }

  return Math.round((correctPlacedCells.size / placedCells.size) * 100);
}

function calculateCompletion() {
  if (targetCells.size === 0) {
    return 0;
  }

  const completedTargetCells = [...targetCells].filter((cellKey) =>
    correctPlacedCells.has(cellKey)
  ).length;

  return Math.round((completedTargetCells / targetCells.size) * 100);
}

function calculateRequiredProgress() {
  if (requiredCells.size === 0) {
    return {
      filled: 0,
      total: 0,
    };
  }

  return {
    filled: [...requiredCells].filter((cellKey) => correctPlacedCells.has(cellKey))
      .length,
    total: requiredCells.size,
  };
}

function areRequiredCellsFilled() {
  const requiredProgress = calculateRequiredProgress();
  return requiredProgress.total === 0 || requiredProgress.filled === requiredProgress.total;
}

function getBuilderRating(completionPercent) {
  const getRatingWithIcon = (ratingKey, icon) => `${icon} ${t(`ratings.${ratingKey}`)}`;

  if (completionPercent >= 95) {
    return getRatingWithIcon("masterBuilder", "🏛️");
  }

  if (completionPercent >= 90) {
    return getRatingWithIcon("architect", "🏗️");
  }

  if (completionPercent >= 80) {
    return getRatingWithIcon("builder", "🧱");
  }

  if (completionPercent >= 60) {
    return getRatingWithIcon("apprentice", "👷");
  }

  return getRatingWithIcon("failedProject", "📐");
}

function calculateFinalAccuracy() {
  if (totalPlacedCells === 0) {
    return 0;
  }

  return Math.round((totalCorrectCells / totalPlacedCells) * 100);
}

function updateStats() {
  scoreElement.textContent = score;
  accuracyElement.textContent = `${calculateAccuracy()}%`;
  updateCompletionDisplay();
  updateRequiredProgressDisplay();
}

function updateCompletionDisplay() {
  completionElement.textContent = `${calculateCompletion()}%`;
}

function updateRequiredProgressDisplay() {
  const requiredProgress = calculateRequiredProgress();
  requiredProgressElement.textContent =
    requiredProgress.total > 0
      ? `${requiredProgress.filled}/${requiredProgress.total}`
      : "—";
}

function isLevelWinReady() {
  return calculateCompletion() / 100 >= winCompletionThreshold && areRequiredCellsFilled();
}

function checkLevelComplete() {
  return isLevelWinReady();
}

function getCurrentFallSpeed() {
  return fallSpeeds[currentLevelIndex] || fallSpeeds[fallSpeeds.length - 1];
}

function addCurrentLevelToTotals() {
  if (currentLevelTotalsAdded) {
    return;
  }

  completedLevelTotals.set(currentLevelIndex, {
    score,
    correctCells: correctPlacedCells.size,
    placedCells: placedCells.size,
  });
  recalculateTotals();
  currentLevelTotalsAdded = true;
}

function removeCurrentLevelFromTotals() {
  completedLevelTotals.delete(currentLevelIndex);
  recalculateTotals();
}

function recalculateTotals() {
  totalScore = 0;
  totalCorrectCells = 0;
  totalPlacedCells = 0;

  completedLevelTotals.forEach((levelTotal) => {
    totalScore += levelTotal.score;
    totalCorrectCells += levelTotal.correctCells;
    totalPlacedCells += levelTotal.placedCells;
  });
}

function completeCurrentLevel() {
  addCurrentLevelToTotals();
  updateLevelRecord();
  currentPiece = null;
  isLevelComplete = true;
  stopAutoFall();
  setStatusMessage("messages.levelComplete");
  playLevelCompleteSound();
  triggerLevelCompleteFeedback();
  showLevelCompleteAfterDelay();
}

function startAutoFall() {
  stopAutoFall();

  if (
    !isMainMenuOpen &&
    !isLevelBriefOpen &&
    !isHowToPlayOpen &&
    !isPaused &&
    !isGameOver &&
    !isLevelComplete &&
    !isGameComplete
  ) {
    fallIntervalId = window.setInterval(dropPieceOneCell, getCurrentFallSpeed());
  }
}

function stopAutoFall() {
  if (fallIntervalId) {
    window.clearInterval(fallIntervalId);
    fallIntervalId = null;
  }
}

function updateStatusMessageDisplay() {
  statusMessage.textContent = currentStatusMessageKey ? t(currentStatusMessageKey) : "";
}

function setStatusMessage(messageKey) {
  currentStatusMessageKey = messageKey;
  updateStatusMessageDisplay();
}

function updateLevelCompleteOverlay() {
  const completionPercent = calculateCompletion();

  finalAccuracyElement.textContent = `${calculateAccuracy()}%`;
  finalCompletionElement.textContent = `${completionPercent}%`;
  finalRatingElement.textContent = getBuilderRating(completionPercent);
  finalScoreElement.textContent = score;
}

function showLevelCompleteOverlay() {
  updateLevelCompleteOverlay();
  levelCompleteOverlay.classList.remove("hidden");
}

function hideLevelCompleteOverlay() {
  levelCompleteOverlay.classList.add("hidden");
}

function updateGameOverOverlay() {
  const completionPercent = calculateCompletion();

  gameOverScoreElement.textContent = score;
  gameOverAccuracyElement.textContent = `${calculateAccuracy()}%`;
  gameOverCompletionElement.textContent = `${completionPercent}%`;
  gameOverRatingElement.textContent = getBuilderRating(completionPercent);
}

function showGameOverOverlay() {
  updateGameOverOverlay();
  isGameOverOverlayOpen = true;
  gameOverOverlay.classList.remove("hidden");
}

function hideGameOverOverlay() {
  isGameOverOverlayOpen = false;
  gameOverOverlay.classList.add("hidden");
}

function showGameCompleteOverlay() {
  updateFinalRecordDisplay();
  totalScoreElement.textContent = totalScore;
  totalAccuracyElement.textContent = `${calculateFinalAccuracy()}%`;
  gameCompleteOverlay.classList.remove("hidden");
}

function hideGameCompleteOverlay() {
  gameCompleteOverlay.classList.add("hidden");
}

function updateLevelBriefText() {
  const level = getCurrentLevel();

  levelBriefTitleElement.textContent = getLocalizedLevelText(level, "name");
  briefAtmosphereElement.textContent = getLocalizedLevelText(level, "atmosphere");
  briefObjectiveElement.textContent = getLocalizedLevelText(level, "objective");
  briefHintElement.textContent = getLocalizedLevelText(level, "hint");
}

function showHowToPlay() {
  stopAutoFall();
  isHowToPlayOpen = true;
  isMainMenuOpen = true;
  setStatusMessage("");
  mainMenuOverlay.classList.remove("hidden");
  howToPlayOverlay.classList.remove("hidden");
}

function hideHowToPlay() {
  isHowToPlayOpen = false;
  howToPlayOverlay.classList.add("hidden");
}

function showLevelBrief() {
  const displayedLevelNumber = currentLevelIndex + 1;

  loadCurrentLevel();
  stopAutoFall();
  isLevelBriefOpen = true;
  briefLevelNumberElement.textContent = displayedLevelNumber;
  updateLevelBriefText();
  renderBriefPreview(getCurrentLevel());
  renderGrid();
  setStatusMessage("");
  levelBriefOverlay.classList.remove("hidden");
}

function hideLevelBrief() {
  isLevelBriefOpen = false;
  levelBriefOverlay.classList.add("hidden");
}

function showMainMenu() {
  isMainMenuOpen = true;
  stopAutoFall();
  hideHowToPlay();
  hideLevelBrief();
  hideLevelCompleteOverlay();
  hideGameOverOverlay();
  hideGameCompleteOverlay();
  setStatusMessage("");
  mainMenuOverlay.classList.remove("hidden");
}

function hideMainMenu() {
  isMainMenuOpen = false;
  hideHowToPlay();
  mainMenuOverlay.classList.add("hidden");
}

function startNewGameFromMenu() {
  currentLevelIndex = 0;
  completedLevelTotals.clear();
  recalculateTotals();
  resetLevelState();
  hideMainMenu();
  hasStartedGame = true;
  showLevelBrief();
}

function retryCurrentLevelAfterGameOver() {
  hideGameOverOverlay();
  resetLevelState();
  startGame();
}

function continueGameFromMenu() {
  hideMainMenu();

  if (!hasStartedGame || isGameComplete) {
    currentLevelIndex = 0;
    completedLevelTotals.clear();
    recalculateTotals();
    resetLevelState();
    hasStartedGame = true;
    showLevelBrief();
    return;
  }

  hasStartedGame = true;

  if (!currentPiece && !isLevelComplete && !isGameOver) {
    spawnPiece();
  } else {
    renderGrid();
  }

  startAutoFall();
}

function completeCurrentLevelDev() {
  if (isMainMenuOpen || isGameComplete || isLevelComplete) {
    return;
  }

  targetCells.forEach((cellKey) => {
    placedCells.add(cellKey);
    correctPlacedCells.add(cellKey);
  });
  updateStats();
  completeCurrentLevel();
}

function goToNextLevelDev() {
  if (isMainMenuOpen) {
    return;
  }

  const nextLevelIndex = currentLevelIndex + 1;

  if (nextLevelIndex >= levels.length) {
    showFinalScreenDev();
    return;
  }

  currentLevelIndex = nextLevelIndex;
  resetLevelState(true);
  showLevelBrief();
}

function showFinalScreenDev() {
  if (isMainMenuOpen) {
    return;
  }

  isGameComplete = true;
  isLevelComplete = false;
  currentPiece = null;
  stopAutoFall();
  hideLevelCompleteOverlay();
  hideGameOverOverlay();
  hideLevelBrief();
  hideMainMenu();
  setStatusMessage("");
  const finalRecord = saveFinalRecord();
  updateFinalRecordDisplay(finalRecord);
  showGameCompleteOverlay();
  renderGrid();
}

function handleNextLevel() {
  if (!isLevelComplete) {
    return;
  }

  const nextLevelIndex = currentLevelIndex + 1;

  if (nextLevelIndex >= levels.length) {
    isGameComplete = true;
    stopAutoFall();
    hideLevelCompleteOverlay();
    hideGameOverOverlay();
    setStatusMessage("");
    const finalRecord = saveFinalRecord();
    updateFinalRecordDisplay(finalRecord);
    playGameCompleteSound();
    showGameCompleteOverlay();
    return;
  }

  currentLevelIndex = nextLevelIndex;
  resetLevelState(true);
  showLevelBrief();
}

function resetLevelState(keepCompletedTotal = false) {
  stopAutoFall();
  clearFeedbackState();

  if (!keepCompletedTotal) {
    removeCurrentLevelFromTotals();
  }

  placedCells.clear();
  correctPlacedCells.clear();
  wrongPlacedCells.clear();
  currentPiece = null;
  currentPiecePosition = { column: 0, row: 0 };
  score = 0;
  isPaused = false;
  isGameOver = false;
  isLevelComplete = false;
  isGameComplete = false;
  currentLevelTotalsAdded = false;
  hideLevelBrief();
  hideLevelCompleteOverlay();
  hideGameOverOverlay();
  hideGameCompleteOverlay();
  setStatusMessage("");
  updateStats();
  updateBestStatsDisplay();
}

function startGame() {
  hasStartedGame = true;
  loadCurrentLevel();
  hideLevelBrief();
  hideLevelCompleteOverlay();
  hideGameOverOverlay();
  setStatusMessage("");
  updateStats();
  spawnPiece();
  startAutoFall();
}

function restartGame() {
  if (isMainMenuOpen || isGameComplete) {
    return;
  }

  resetLevelState();
  startGame();
}

function restartWholeGame() {
  currentLevelIndex = 0;
  completedLevelTotals.clear();
  recalculateTotals();
  resetLevelState();
  showLevelBrief();
}

function togglePause() {
  if (
    isMainMenuOpen ||
    isLevelBriefOpen ||
    isHowToPlayOpen ||
    isGameOver ||
    isLevelComplete ||
    isGameComplete
  ) {
    return;
  }

  isPaused = !isPaused;
  setStatusMessage(isPaused ? "messages.paused" : "");

  if (isPaused) {
    stopAutoFall();
  } else {
    startAutoFall();
  }
}

function handleAction(action) {
  handleUserInteraction();

  if (action === "toggleSound") {
    toggleSound();
    return;
  }

  if (action === "toggleLanguage") {
    toggleLanguage();
    return;
  }

  if (action === "closeHowToPlay") {
    hideHowToPlay();
    return;
  }

  if (isHowToPlayOpen) {
    return;
  }

  if (action === "resetRecords") {
    resetRecords();
    return;
  }

  if (action === "startGame") {
    startNewGameFromMenu();
    return;
  }

  if (action === "howToPlay") {
    showHowToPlay();
    return;
  }

  if (action === "startBuilding") {
    if (isLevelBriefOpen) {
      startGame();
    }

    return;
  }

  if (action === "continueGame") {
    continueGameFromMenu();
    return;
  }

  if (action === "mainMenu") {
    showMainMenu();
    return;
  }

  if (action === "tryAgain") {
    retryCurrentLevelAfterGameOver();
    return;
  }

  if (isDevMode && action === "completeLevelDev") {
    completeCurrentLevelDev();
    return;
  }

  if (isDevMode && action === "nextLevelDev") {
    goToNextLevelDev();
    return;
  }

  if (isDevMode && action === "finalScreenDev") {
    showFinalScreenDev();
    return;
  }

  if (isMainMenuOpen) {
    return;
  }

  if (isGameOverOverlayOpen) {
    return;
  }

  if (action === "restart") {
    restartGame();
    return;
  }

  if (action === "pause") {
    togglePause();
    return;
  }

  if (action === "nextLevel") {
    handleNextLevel();
    return;
  }

  if (action === "playAgain") {
    restartWholeGame();
    return;
  }

  if (isPaused || isHowToPlayOpen || isGameOver || isLevelComplete || isGameComplete) {
    return;
  }

  if (action === "left") {
    if (movePiece(-1, 0)) {
      playMoveSound();
    }
  }

  if (action === "right") {
    if (movePiece(1, 0)) {
      playMoveSound();
    }
  }

  if (action === "rotate") {
    if (rotatePiece()) {
      playRotateSound();
    }
  }

  if (action === "drop") {
    if (dropPieceOneCell()) {
      playDropSound();
    }
  }

  if (action === "softDrop") {
    if (softDropPiece()) {
      playDropSound();
    }
  }

  if (action === "hardDrop") {
    if (hardDrop()) {
      playDropSound(true);
    }
  }
}

function handleKeyboardInput(event) {
  if (isHowToPlayOpen) {
    if (event.key === "Escape" || event.key === "Enter") {
      event.preventDefault();
      handleAction("closeHowToPlay");
    }

    return;
  }

  if (isLevelBriefOpen) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAction("startBuilding");
    }

    return;
  }

  if (isMainMenuOpen) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAction("startGame");
    }

    return;
  }

  if (isGameOverOverlayOpen) {
    if (event.key === "Enter" || event.key === "r" || event.key === "R") {
      event.preventDefault();
      handleAction("tryAgain");
    }

    if (event.key === "Escape") {
      event.preventDefault();
      handleAction("mainMenu");
    }

    return;
  }

  const keyActions = {
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowDown: "softDrop",
    ArrowUp: "rotate",
    " ": "hardDrop",
    Spacebar: "hardDrop",
    Enter: "nextLevel",
    p: "pause",
    P: "pause",
    r: "restart",
    R: "restart",
  };

  // Dev-only shortcuts are disabled for the MVP build unless isDevMode is enabled.
  if (isDevMode) {
    keyActions.n = "completeLevelDev";
    keyActions.N = "completeLevelDev";
    keyActions.m = "nextLevelDev";
    keyActions.M = "nextLevelDev";
    keyActions.f = "finalScreenDev";
    keyActions.F = "finalScreenDev";
  }

  const action = keyActions[event.key];

  if (!action) {
    return;
  }

  event.preventDefault();
  handleAction(action);
}

controls.forEach((button) => {
  button.addEventListener("click", () => {
    handleAction(button.dataset.action);
  });
});

nextLevelButton.addEventListener("click", () => {
  handleAction("nextLevel");
});
startBuildingButton.addEventListener("click", () => {
  handleAction("startBuilding");
});
tryAgainButton.addEventListener("click", () => {
  handleAction("tryAgain");
});
gameOverMainMenuButton.addEventListener("click", () => {
  handleAction("mainMenu");
});
playAgainButton.addEventListener("click", () => {
  handleAction("playAgain");
});
mainMenuButton.addEventListener("click", () => {
  handleAction("mainMenu");
});
startGameButton.addEventListener("click", () => {
  handleAction("startGame");
});
continueGameButton.addEventListener("click", () => {
  handleAction("continueGame");
});
howToPlayButton.addEventListener("click", () => {
  handleAction("howToPlay");
});
howToPlayBackButton.addEventListener("click", () => {
  handleAction("closeHowToPlay");
});
menuResetRecordsButton.addEventListener("click", () => {
  handleAction("resetRecords");
});
soundToggleButton.addEventListener("click", () => {
  handleAction("toggleSound");
});
languageToggleButton.addEventListener("click", () => {
  handleAction("toggleLanguage");
});
resetRecordsButton.addEventListener("click", () => {
  handleAction("resetRecords");
});
document.addEventListener("keydown", handleKeyboardInput);

loadSettings();
updateFinalRecordDisplay();
updateStats();
renderGrid();
showMainMenu();
updateTexts();
