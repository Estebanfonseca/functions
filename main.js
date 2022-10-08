console.log(beer)
function cervezas (array, grades){
    let beeer = []
    for(let beer of array){
        if(beer.abv <= parseFloat(grades) ){
            beeer.push(beer)
        }
    } 
    return beeer
    
}

let cerveza = cervezas(beer,5)
console.log( cerveza.map( elem => ({name:elem.name, abv:elem.abv ,ibu : elem.ibu})))


















