const toCaps = string => {
  return string[0].toUpperCase() + string.slice(1, string.length)
}

String.prototype.capatlize = function() {
  return this[0].toUpperCase() + this.slice(1, this.length)
}

String.prototype.lower = function() {
  return this[0].toLowerCase() + this.slice(1, this.length)
}

const sentenceCaps = string => {
  return string
    .split(" ")
    .map(word => toCaps(word))
    .join(" ")
}

String.prototype.capatlizeSentence = function() {
  return this.split(" ")
    .map(word => toCaps(word))
    .join(" ")
}

const everyOtherCaps = string => {
  return string
    .split("")
    .map((letter, i) => (i % 2 === 0 ? letter.toUpperCase() : letter))
    .join("")
}

String.prototype.evenCaps = function() {
  return this.split("")
    .map((letter, i) => (i % 2 === 0 ? letter.toUpperCase() : letter))
    .join("")
}

String.prototype.oddCaps = function() {
  return this.split("")
    .map((letter, i) => (i % 2 === 1 ? letter.toUpperCase() : letter))
    .join("")
}

const removeWhitespace = string => {
  return string
    .split("")
    .map(letter => (letter === " " ? "" : letter))
    .join("")
}

String.prototype.removeWhitespace = function() {
  return this.split("")
    .map(letter => (letter === " " ? "" : letter))
    .join("")
}

const removeExtraWhitespace = string => {
  return string
    .split("")
    .map((letter, i) => (string[i + 1] === " " && letter === " " ? "" : letter))
    .join("")
    .trim()
}

String.prototype.removeExtraWhitespace = function() {
  return this.split("")
    .map((letter, i) => (this[i + 1] === " " && letter === " " ? "" : letter))
    .join("")
    .trim()
}

String.prototype.kabobCase = function() {
  return this.removeExtraWhitespace()
    .split(" ")
    .join("-")
    .toLowerCase()
}

String.prototype.snakeCase = function() {
  return this.removeExtraWhitespace()
    .split(" ")
    .join("_")
    .toLowerCase()
}

String.prototype.camelCase = function() {
  return this.removeExtraWhitespace()
    .capatlizeSentence()
    .split(" ")
    .join("")
    .lower()
}

console.log("this is a string".oddCaps())
