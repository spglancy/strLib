# String Library

[![Build Status](https://travis-ci.com/spglancy/strLib.svg?branch=master)](https://travis-ci.com/spglancy/strLib)
![Coveralls github](https://img.shields.io/coveralls/github/spglancy/strLib.svg)
![Travis (.com)](https://img.shields.io/travis/com/spglancy/strLib.svg)
![npm](https://img.shields.io/npm/v/sariel_str_functions_lib.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/sariel_str_functions_lib.svg)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/sariel_str_functions_lib.svg)

---

A library of basic string functions

### Functions

- **String.prototype.capitalize())**  
  Capitalizes the first character of the string and returns it.
  ```js
  "this is a string".capitalize() //Output: "This is a string"
  ```
- **String.prototype.lower())**  
  Makes the first character of the string lowercase and returns it.
  ```js
  "This is a String".lower() //Output: "this is a String"
  ```
- **String.prototype.capitalizeSentence())**  
  Capitalizes each word in the string and returns it
  ```js
  "this is a string".capatlizeSentence() //Output: "This Is A String"
  ```
- **String.prototype.evenCaps())**  
  Capitalizes every other letter(even) in the string and returns it
  ```js
  "this is a string".evenCaps() //Output: "ThIs iS A StRiNg"
  ```
- **String.prototype.oddCaps())**  
  Capitalizes every other letter(odd) in the string and returns it
  ```js
  "this is a string".oddCaps() //Output: "tHiS Is a sTrInG"
  ```
- **String.prototype.removeWhitespace())**  
  Removes all spaces from a string and returns it
  ```js
  "this is a string".removeWhitespace() //Output: "thisisastring"
  ```
- **String.prototype.removeExtraWhitespace())**  
  Remove whitespace from the ends of the string as well as extra spaces in-between words and returns the string

  ```js
  "   this  is a    string   ".removeExtraWhitespace() //Output: "this is a string"
  ```

- **String.prototype.kebabCase()**  
  changes string from sentence into kebab case and returns it
  ```js
  "this is a string".kabobCase() //Output: "this-is-a-string"
  ```
- **String.prototype.snakeCase()**  
  changes string from sentence into snake case and returns it
  ```js
  "this is a string".snakeCase() //Output: "this_is_a_string"
  ```
- **String.prototype.camelCase()**  
  changes string from sentence into camel case and returns it
  ```js
  "this is a string".camelCase() //Output: "ThisIsAString"
  ```
