



const {readFile, appendFile} = require('fs')
const { promisify } = require('util');
const readFilePromisse = promisify(readFile)

//tratamento do texto
const { readLocalFile } = require('./readFile.js');
const { filterText } = require('./filterText.js');
const { cleanText } = require('./cleanText.js');
const { writeData } = require('./writeData.js');

const operacao = [['615', '00124'], ['870', '99020'], ['875', '01134'], ['900', '14397']                        
]


const processService = async () => {
    
    //_INIT_
    const texto = await readLocalFile()
    const filtrado = await filterText(texto, operacao)
    const arrObject = await cleanText(filtrado)
    
    
    return arrObject
};


module.exports = { 
    processService: processService
}