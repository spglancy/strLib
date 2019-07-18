const toCaps = string => string[0].toUpperCase() + string.slice(1, string.length);

String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1, this.length);
};

String.prototype.lower = function () {
  return this[0].toLowerCase() + this.slice(1, this.length);
};

const sentenceCaps = string => string
  .split(' ')
  .map(word => toCaps(word))
  .join(' ');

String.prototype.capitalizeSentence = function () {
  return this.split(' ')
    .map(word => toCaps(word))
    .join(' ');
};

const everyOtherCaps = string => string
  .split('')
  .map((letter, i) => (i % 2 === 0 ? letter.toUpperCase() : letter))
  .join('');

String.prototype.evenCaps = function () {
  return this.split('')
    .map((letter, i) => (i % 2 === 0 ? letter.toUpperCase() : letter))
    .join('');
};

String.prototype.oddCaps = function () {
  return this.split('')
    .map((letter, i) => (i % 2 === 1 ? letter.toUpperCase() : letter))
    .join('');
};

const removeWhitespace = string => string
  .split('')
  .map(letter => (letter === ' ' ? '' : letter))
  .join('');

String.prototype.removeWhitespace = function () {
  return this.split('')
    .map(letter => (letter === ' ' ? '' : letter))
    .join('');
};

const removeExtraWhitespace = string => string
  .split('')
  .map((letter, i) => (string[i + 1] === ' ' && letter === ' ' ? '' : letter))
  .join('')
  .trim();

String.prototype.removeExtraWhitespace = function () {
  return this.split('')
    .map((letter, i) => (this[i + 1] === ' ' && letter === ' ' ? '' : letter))
    .join('')
    .trim();
};

String.prototype.kebabCase = function () {
  return this.removeExtraWhitespace()
    .split(' ')
    .join('-')
    .toLowerCase();
};

String.prototype.snakeCase = function () {
  return this.removeExtraWhitespace()
    .split(' ')
    .join('_')
    .toLowerCase();
};

String.prototype.camelCase = function () {
  return this.removeExtraWhitespace()
    .toLowerCase()
    .capitalizeSentence()
    .split(' ')
    .join('')
    .lower();
};
