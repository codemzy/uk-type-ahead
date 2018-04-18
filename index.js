const endpoint = 'https://gist.githubusercontent.com/codemzy/be813a7a82bc1d0e13c9422418ce257c/raw/8665700764e62e4ae0e9135b483b7725821dc86a/uk-cities-towns-populations.json';

// store towns json
const towns = [];
fetch(endpoint)
  .then(function(blob) {
    return blob.json();
  })
  .then(function(data) {
    towns.push(...data);
  });

// find matches
let findMatches = function(word, towns) {
  return towns.filter((place) => {
    // does the town match the search
    const regex = new RegExp(word, 'gi');
    return place.location.match(regex);
  });
};