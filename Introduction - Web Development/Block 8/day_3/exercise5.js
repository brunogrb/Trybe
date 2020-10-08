    
const assert = require('assert');
const { gzip } = require('zlib');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((store, value) => {
    return store + value.match(/a/gi).length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);