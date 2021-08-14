async function writeData(arrayData, op){
    let body = ''
    let headHtml = `
        <tr>
        <th colspan="5">Relatório Operação ${op}</th>
        </tr>
        <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Baixa</th>
        </tr>`

    const tt = appendFile("log.txt", headHtml, (err) => {
        if (err) {
            console.log(err);
        }
        else {
              
        }
        });
    let bodyHtml = arrayData.forEach(e => {
        
        let html = `
        <tr>
            <td>${e[0]}</td>
            <td>${e[1]}</td>
            <td>${e[2]}</td>
            <td>${e[3]}</td>
            <td>O</td>
        </tr>`
        const tt = appendFile("log.txt", html, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                  
            }
            });
        
    })
    
    
    
}

module.exports = { 
    writeData: writeData
}