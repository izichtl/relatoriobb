async function cleanText (filtrado) {
    
    let arrObject = []
    filtrado.forEach(e => {
        let arrData = []
        e.data.forEach(e => {
            const date = /\d{2}\/\d{2}\/\d{4}/
            const matchDate = e.match(date)
            
            
            const name = /\s+[A-Za-z-\s]+$/g
            const matchName = e.match(name)
            
            
            const dateTime = /\d{2}:\d{2}/g
            let matchDateTime = e.match(dateTime)
            if(!matchDateTime){
                matchDateTime = '00:00'
            }
            
            
            const price = /\d+,\d{2}/;
            const matchPrice = e.match(price)
            let arrPrice = []
            matchPrice.forEach(element => {
                
                
                const cleanPrice = element.replace(/\sC/g, "");
                arrPrice.push(cleanPrice)
            })
            

            
            
            
            
            arrData.push([matchDate, matchDateTime, matchName, arrPrice]);
        });
        arrObject.push({
            op: e.op,
            data: arrData
        })
        
    });
    
    
    
    
    return arrObject
    
}  

module.exports = { 
    cleanText: cleanText
}