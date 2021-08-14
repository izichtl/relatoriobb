const express = require('express');
//const { processService } = require('./logic/processService.js')
const path = require('path');

const { processService } = require('./logic/processService.js');

const app = express();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "uploads/")
    },
    filename: function (req, file, cb){
        cb(null, 'ext.txt')
    }
})
const upload = multer({storage})



app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('css', 'views/acessts/css/');



app.use('/views', express.static('views'));
app.use('/views/assets/css', express.static('css'));
app.use('/views/assets/image', express.static('image'));










//rotas - precisa modularizar 
app.get('/', (requisicao, resposta) =>{
    resposta.render('index2')
    
});
app.get('/exit', (requisicao, resposta) =>{
    
    //process.exit() 
    
});


app.get('/upload', async (requisicao, resposta) =>{
    let objArray = await processService()
    
    console.log('relatorio request')
    
    const date = new Date()
    const objArray1 = [
        {
            operacao: '615',
            arrIten: [['11/08/2021', '12:00', 'DIEGO SANTOS' , 'R$14,00'], ['09/08/2021', '16:00', 'LAR. ALVES' , 'R$140,00']]
    
        },
        {
            operacao: '900',
            arrIten: [['11/08/2021', '12:00', 'IVAN SANTOS' , 'R$14,00'], ['09/08/2021', '16:00', 'LAR. ALVES' , 'R$140,00']]
    
        }
    ]
    resposta.render('relatorio',{
        objArray: objArray,
        date:date
        
      })
    
});

app.post('/upload', upload.single("filePost"), (requisicao, resposta) =>{
    console.log('upload request')
    
    
    const arrItens = [['11/08/2021', '12:00', 'IVAN SANTOS' , 'R$14,00'], ['09/08/2021', '16:00', 'LAR. ALVES' , 'R$140,00']]

    resposta.render('upload');
    
});





app.listen(3001 , ()=> {
    console.log('Servidor rodando em 3001')
});