// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

const results = document.querySelector('#results');

const searchDictionary = (query) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${query}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    });
  };