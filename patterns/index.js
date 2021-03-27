const patternDict = [{
  pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
  intent: 'Hello'
}, {
  pattern: '\\bbye|goodbye\\b',
  intent: 'Bye'
}, {
  pattern: 'a\\sjoke\\b',
  intent: 'Joke'
}, {
  pattern: '^(?<rating>-?[0-9]{1,2})$',
  intent: 'Rating'
}, {
  pattern: '(?<number>[0-9]{1,2})\\s(?<quality>best|worst)\\sjokes\\b',
  intent: 'N jokes'
}, {
  pattern: '(?<negate>not)?\\sfunny',
  intent: 'React'
}];

module.exports = patternDict;
