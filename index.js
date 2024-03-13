function calcularHipotenusa(){
    const cateto1 = document.getElementById("catetoA").value
    const cateto2 = document.getElementById("catetoB").value
    let cuadradoCateto1 = Math.pow(cateto1, 2)
    let cuadradoCateto2 = Math.pow(cateto2, 2)
    //sumar 
    let sumaCuadrados = cuadradoCateto1 + cuadradoCateto2
    //raiz
    let hipotenusa = Math.sqrt(sumaCuadrados);
    const resultado = document.getElementById("resultado")
    resultado.innerText = `La hipotenusa es: ${hipotenusa}`;

}

