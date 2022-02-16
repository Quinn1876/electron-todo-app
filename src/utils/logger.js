const levels = {
  CONSOLE: 'CONSOLE',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
};
exports.levels = levels;

exports.logger = (prefix) => (msg, lvl = levels.CONSOLE) => {
  switch (lvl) {
    case levels.WARNING:
      console.warn(`${prefix}: ${msg}`);
      break;
    case levels.ERROR:
      console.error(`${prefix}: ${msg}`);
      break;
    default:
      console.log(`${prefix}: ${msg}`);
      break;
  }
}
