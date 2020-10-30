const fetch = require('node-fetch');

const getUserName = require('./exercise2');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
}

module.exports = getRepos;