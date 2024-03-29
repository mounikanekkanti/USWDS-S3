const fs = require('fs');

const inputFile = 'token.json';
const outputFile = 'styleguide1.css';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const json = JSON.parse(data);
    const css = jsonToCss(json);
    fs.writeFile(outputFile, css, (err) => {
      if (err) {
        console.error('Error writing CSS file:', err);
        return;
      }
      console.log('CSS file successfully created:', outputFile);
    });
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});

function jsonToCss(json) {
  let css = ':root {\n';

  function processToken(token, prefix = '') {
    for (const key in token) {
      if (token.hasOwnProperty(key) && key !== 'type') {
        const value = token[key];
        if (typeof value === 'object') {
          processToken(value, `${prefix}-${key}`);
        } else {
          css += `  --${prefix}-${key}: ${value};\n`;
        }
      }
    }
  }

  for (const category in json) {
    if (json.hasOwnProperty(category)) {
      processToken(json[category], category);
    }
  }

  css += '}';

  // Remove the line containing '--$metadata-tokenSetOrder-0: base;'
  css = css.replace(/--\$metadata-tokenSetOrder-0: base;\n/, '');

  return css;
}



