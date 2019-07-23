require('./index.js');

test('Sanity', () => {
  // passes
});

test('lower', () => {
  expect('YEEHAW'.lower()).toBe('yEEHAW');
  expect('DINGDONG'.lower()).toBe('dINGDONG');
  expect('A'.lower()).toBe('a');
});

test('capitalize sentence', () => {
  expect('cowboy say yeehaw'.capitalizeSentence()).toBe('Cowboy Say Yeehaw');
  expect('yeet'.capitalizeSentence()).toBe('Yeet');
  expect('bingo bango bongo'.capitalizeSentence()).toBe('Bingo Bango Bongo');
});

test('even caps', () => {
  expect('yeehaw'.evenCaps()).toBe('YeEhAw');
  expect('bang'.evenCaps()).toBe('BaNg');
  expect('a'.evenCaps()).toBe('A');
});

test('oddCaps', () => {
  expect('yeehaw'.oddCaps()).toBe('yEeHaW');
  expect('bang'.oddCaps()).toBe('bAnG');
  expect('a'.oddCaps()).toBe('a');
});

test('remove whitespace', () => {
  expect('h e l l o'.removeWhitespace()).toBe('hello');
  expect('w    o w '.removeWhitespace()).toBe('wow');
  expect('     '.removeWhitespace()).toBe('');
});

test('remove extra whitespace', () => {
  expect('yeehaw    '.removeExtraWhitespace()).toBe('yeehaw');
  expect('  extra    '.removeExtraWhitespace()).toBe('extra');
  expect('a    '.removeExtraWhitespace()).toBe('a');
});

test('kebabcase', () => {
  expect('this is string'.kebabCase()).toBe('this-is-string');
  expect('kebabs yum'.kebabCase()).toBe('kebabs-yum');
  expect('no'.kebabCase()).toBe('no');
});

test('snakecase', () => {
  expect('this is string'.snakeCase()).toBe('this_is_string');
  expect('slithery snake'.snakeCase()).toBe('slithery_snake');
  expect('python'.snakeCase()).toBe('python');
});

test('camelcase', () => {
  expect('this is string'.camelCase()).toBe('thisIsString');
  expect('camel journey'.camelCase()).toBe('camelJourney');
  expect('a'.camelCase()).toBe('a');
});

test('asciiShift', () => {
  expect('abcdefg'.asciiShift(1)).toBe('bcdefgh');
  expect('bcdefgh'.asciiShift(-1)).toBe('abcdefg');
  expect('12345'.asciiShift(1)).toBe('23456');
});
