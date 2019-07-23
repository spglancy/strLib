String.prototype.lower = function () {
  return this[0].toLowerCase() + this.slice(1, this.length);
};

String.prototype.capitalizeSentence = function () {
  return this.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ');
};

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

String.prototype.removeWhitespace = function () {
  return this.split('')
    .map(letter => (letter === ' ' ? '' : letter))
    .join('');
};

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

String.prototype.asciiShift = function (val) {
  const output = [];
  for (i = 0; i < this.length; i++) {
    const char = this.charCodeAt(i);
    if (char < 122) {
      output.push(String.fromCharCode(char + val));
    }
  }
  return output.join('');
};
