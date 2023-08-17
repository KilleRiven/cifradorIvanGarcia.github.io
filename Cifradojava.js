
function descifradoTexto() {
    const alfabeto2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',];
    
    var inputCifrado2 = document.getElementById('inputCifrado');
    var resultado2 = document.getElementById("result2");
    
    
    let mensajeCifrado2 = inputCifrado2.value;
    
    for (let i = 0; i < mensajeCifrado2.length; i++) {
        let letra2 = mensajeCifrado2[i];
        let indice2 = alfabeto2.indexOf(letra2);
        
        if (indice2 !== -1) {  
            let nuevaLetra2 = alfabeto2[(indice2 - 5 + alfabeto2.length) % alfabeto2.length];
            mensajeCifrado2 = mensajeCifrado2.replaceAll(letra2, nuevaLetra2);
        }
    }
    
    resultado2.value = mensajeCifrado2;
}


function cifrarTexto() {
    const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',];
    
    var inputOriginal = document.getElementById('inputOriginalText');
    var resultado = document.getElementById("result");
    
    let mensajeOriginal = inputOriginal.value;
    
    for (let i = 0; i < mensajeOriginal.length; i++) {
        let letra = mensajeOriginal[i];
        let indice = alfabeto.indexOf(letra);
        
        if (indice !== -1) {  
            let nuevaLetra = alfabeto[(indice + 5) % alfabeto.length];
            mensajeOriginal = mensajeOriginal.replaceAll(letra, nuevaLetra);
        }
    }
    
    resultado.value = mensajeOriginal;
}
