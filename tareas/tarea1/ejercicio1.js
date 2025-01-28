
function palindromo(texto){
    texto=texto.toLowerCase()
    let textoInvertido=texto.split("").reverse().join("");
    
    if(textoInvertido==texto){
        console.log("es un palindromo");
    }
    else{
        console.log("no es palindromo");
    }
    console.log(textoInvertido);
}
palindromo("pedro");
