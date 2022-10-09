function numeroAlReves(numero){
    let conver = numero.toString().split("").reverse().join("");
        return Number(conver);
}
let reves = numeroAlReves(123456789)
console.log(reves)

function palabraAlReves(string){
    let conver = string.split("").reverse().join("")
    return conver
}
let alreves = palabraAlReves("esteban")
console.log(alreves)

function frase (string){
    let palabras = string.split(" ")
    for(let i = 0;i<palabras.length;i++){
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1)
    }
    
    return palabras.join(" ")
} 

let oracion = frase("hola como estas")
console.log(oracion)

function laPalabraMasLarga (string){
    let oracion = string.split(" ")
    let long = " "
    for (let i = 0 ;i< oracion.length;i++){
        if(long.length < oracion[i].length){
            long = oracion[i]
        }
    }
    return long 
}

let masLarga = laPalabraMasLarga("hola como estas esteban")
console.log(masLarga)
