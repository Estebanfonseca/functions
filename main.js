
function cervezas (array, grades){
    let beeer = []
    for(let beer of array){
        if(beer.abv <= parseFloat(grades) ){
            beeer.push(beer)
        }
    } 
    return beeer.map( elem => ({name:elem.name, abv:elem.abv ,ibu : elem.ibu}))
}

let cerveza = cervezas(beer,5)
console.log(cerveza)

function las10Mas(array){
    array.sort((a,b)=>{
        if(a.abv > b.abv){
            return -1
        }else if(a.abv < b.abv){
            return 1
        }else {
            return 0
        }
    })
    return array.slice(0,10)
}

let losMas = las10Mas(beer)
console.log(losMas)

function las10Menos (array){
    array.sort((a,b)=>{
        if(a.ibu < b.ibu){
            return -1
        }else if(a.ibu > b.ibu){
            return 1
        }else {
            return 0
        }
    })
    return array.slice(0,10)
}

let losMenos = las10Menos(beer)
console.log(losMenos)



function ordenPor(array,prop,bool){
    
}
























