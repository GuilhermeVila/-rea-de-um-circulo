function NomeInicial(tag, texto){
    let camp = document.querySelector(tag);
    camp.innerHTML = texto}
function volumeEsfera(r){
    let result = ((r ** 3)*(4*Math.PI)/3);
    return result;
}
    function areaCirculo(r){
    let resultado = ((r*r)*Math.PI);
    return resultado;
}
NomeInicial("h1", "calculadora de area e volume");
NomeInicial("p", "determine o raio");
console.log(areaCirculo(4));
console.log(volumeEsfera(2))
