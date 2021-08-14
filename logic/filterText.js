

async function filterText(texto, operacao) {
    
    let arrText = []
    operacao.forEach(element => {
        
        
        const semAcento = texto.replace(/�/g, "a");
        const semAcento1 = semAcento.replace(/\r\n/g, "");
        const removeLine = /\W(C|D){1}\r\n/g
        const replaceLine = semAcento1.replace(removeLine, '')
        const regex = new RegExp(`.{59}${element[1]}\\s+${element[0]}.{151}`, 'g');
        const matchText = replaceLine.match(regex)
        
        
        if(matchText){
            arrText.push({
                op: element[0],
                data: matchText
            })
            return
        }

    });
    
    return arrText
};


module.exports = { 
    filterText: filterText
}