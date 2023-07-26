// import gulp from 'gulp';
const { watch, gulp } = require('gulp');
const run = require('gulp-run');
const { transformTokens } = require('token-transformer');
const fs = require('fs');
const setsToUse = ['vz-prime'];
const excludes = [];
const { registerTransforms } = require('@tokens-studio/sd-transforms');

const transformerOptions = {
  expandTypography: true,
  expandShadow: true,
  expandComposition: true,
  expandBorder: true,
  preserveRawValue: false,
  throwErrorWhenNotResolved:  true,
  resolveReferences:true
}

const paths = {
  styles: {
    src: 'token/token.json',
    dest: 'src/assets/tokenTrans.json'
  }
};

exports.default = function() {
  watch(paths.styles.src, runTasks);
};

function runTasks() {
  setTimeout(runTrans, 0);
}



var tokens;
var resolved;

function runTrans() {
  console.log("runTrans");
  
  fs.readFile(paths.styles.src, 'utf8', function (err, data) {
    if (err) {
      console.log('It\'s Jacked! ' + paths.styles.src);
      throw err;
    } else {
      
      tokens = JSON.parse(data);
      console.log("tokens " + tokens);
      
      
      // Start Token Transformer ———————————–
      resolved = transformTokens(
        tokens, 
        setsToUse,  
        excludes, 
        transformerOptions
      );
      resolved = JSON.stringify(resolved);
      console.log('resolved '+ resolved);
      // End Token Transformer ———————————–
      
      
      fs.writeFile(paths.styles.dest, resolved, function (err) {
          if (err) {
            throw err;
          }
          else { 
            console.log('It\'s Saved! '+ paths.styles.dest);
            
            watch(paths.styles.src, runTasks);
            return run('npm run styleBuild').exec();
          }
      });
    }
  });
}
