// JavaScript source code
//Disciplina: Linguagens de Script para Web
//Autor: Ariane Figueiredo
//Data: 16/05/2022
//Objetivo: Calcular a média do aluno

function media() {
  var Nota1 = parseFloat(document.getElementById("Nota1").value);
  var Nota2 = parseFloat(document.getElementById("Nota2").value);
  var Nota3 = parseFloat(document.getElementById("Nota3").value);
  var Nota4 = parseFloat(document.getElementById("Nota4").value);
  var media = (Nota1 * 0.10 + Nota2 * 0.20 + Nota3 * 0.3 + Nota4 * 0.4);

    alert("A média do aluno é: " + media);
    console.log(media);
}