var octetoA =  document.getElementById("octetoA");
var octetoB =  document.getElementById("octetoB");
var octetoC =  document.getElementById("octetoC");
var octetoD =  document.getElementById("octetoD");
var mascara =  document.getElementById("mascara");
var mascara_octeto_A =  document.getElementById("mascaraA");
var mascara_octeto_B =  document.getElementById("mascaraB");
var mascara_octeto_C =  document.getElementById("mascaraC");
var mascara_octeto_D =  document.getElementById("mascaraD");
var respuestaA_Binario= document.getElementById("respuestaA_Binario");
var respuestaB_Binario= document.getElementById("respuestaB_Binario");
var respuestaC_Binario= document.getElementById("respuestaC_Binario");
var respuestaD_Binario= document.getElementById("respuestaD_Binario");

function principal(octeto) {
  var octeto_valor= octeto.id ;
  var valor= octeto.value ;
  convertirBinario(valor, octeto_valor);
}

function convertirBinario(valor, nombar) {

  var binario = parseInt(valor).toString(2).padStart(8,"0");
  $("#" + nombar + "_Binario").val(binario);
}



function compararArrays(octeto,octeto1){//compara dos arrays  cambiar por string
    var respuesta;

    for (var i = 0; i < 8; i++) {
      respuesta +=(octeto[i]&octeto1[i]);

    }
    console.log(respuesta);
    console.log(respuesta.join(""));

}


