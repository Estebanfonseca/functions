console.log(beer)
function cervezas (array, grades){
    let beeer = []
    for(let beer of array){
        if(parseInt(beer.abv) <= grades ){
            beeer.push(beer)
        }
    }
    return beeer
}

let cerveza = cervezas(beer, 4)
console.log(cerveza)







