const { readFile } = require('fs')
const { promisify } = require('util');
const readFilePromisse = promisify(readFile)



async function readLocalFile() {
    const response = await readFilePromisse('./uploads/ext.txt', 'utf-8')
    return response
}

module.exports = { 
    readLocalFile: readLocalFile
}