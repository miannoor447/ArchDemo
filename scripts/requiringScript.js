const fs = require('fs');
const path = require('path');
const { mapAndWriteObject, mapOldToNewObject } = require('./objectMappingScript');

const baseDirAPIs = path.join(__dirname, '../APIs');
const baseDirObjects = path.join(__dirname, '../Objects');

const directories = [];
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src).forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (path.extname(file) === '.js') {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} to ${destPath}`);
    }
  });
}


function requireAllJSFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      requireAllJSFiles(fullPath);
    } else if (path.extname(file) === '.js') {
        //console.log(`Required: ${fullPath}`);
        directories.push(fullPath);
        require(fullPath);
    }
  });


}
function loadAllObjects() {
  let index = 0;
  let size = 0;
  for (let key in global) {
    if (global.hasOwnProperty(key)) {
      if (key.endsWith('_object')) {
        try {
          mapAndWriteObject(global[key], key, directories[index++]);
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  }
  console.log("Files: ", index, " Objects: " , index);
}

// requireAllJSFiles(baseDirAPIs);
// loadAllObjects();
module.exports= {requireAllJSFiles, loadAllObjects, copyDirectory}



