// Soundscape helper for Days 13–51. Uses the existing audio files only.
(function () {
  const paths = Object.values(window.AUDIO_FILES || {}).filter(Boolean);
  if (!paths.length) return;
  window.KEMP_SOUNDscape_RANDOM_13_51 = function (day) {
    if (day < 13 || day > 51) return null;
    return paths[Math.floor(Math.random() * paths.length)];
  };
})();
