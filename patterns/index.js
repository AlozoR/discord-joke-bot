const patternDict = [{
  pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
  intent: 'Hello'
}, {
  pattern: '\\b(bye|exit)\\b',
  intent: 'Exit'
}, {
  pattern: 'joke\\b',
  intent: 'Joke'
}, {
  pattern: '^(?<rating>-?[0-9]{1,2})$',
  intent: 'Rating'
}, {
  pattern: '(?<number>[0-9]{1,2})\\s(?<quality>best|worst)\\sjokes\\b',
  intent: 'N jokes'
}, {
  pattern: 'joke\\b',
  intent: 'Joke'
}, {
  pattern: 'joke\\b',
  intent: 'Joke'
}];

module.exports = patternDict;
