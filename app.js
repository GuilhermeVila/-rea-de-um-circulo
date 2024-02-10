function NomeInicial(tag, texto){
    let camp = document.querySelector(tag);
    camp.innerHTML = texto}
function areaCirculo(r){
    let resultado = ((r*r)*Math.PI);
    return resultado;
}
console.log(areaCirculo(4));
NomeInicial("h1", "calculadora de area");
NomeInicial("p", "determine o raio");