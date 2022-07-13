var octetoA =  document.getElementById("octetoA");
var octetoB =  document.getElementById("octetoB");
var octetoC =  document.getElementById("octetoC");
var octetoD =  document.getElementById("octetoD");
var mascara =  document.getElementById("mascara");
var mascara_octeto_A =  document.getElementById("mascaraA");
var mascara_octeto_B =  document.getElementById("mascaraB");
var mascara_octeto_C =  document.getElementById("mascaraC");
var mascara_octeto_D =  document.getElementById("mascaraD");

function principal(octeto) {
  var octeto_valor= octeto.id ;
  var valor= octeto.value ;
  convertirBinario(valor, octeto_valor);
}

function convertirBinario(valor, nombar) {
  var binario = parseInt(valor).toString(2);
  $("#" + nombar + "_Binario").val(binario);
}
// function convertirDecimal(valor, nombar) {
//   var decimal = parseInt(valor, 2);
//   $("#" + nombar + "_Decimal").val(decimal);
// }


// function compararArrays(octeto,octeto1){//compara dos arrays  cambiar por string
//     var respuesta=[];
//     for (var i = 0; i < octeto.length; i++) {
//         if((octeto[i]== 0 && octeto1[i]==0)||(octeto[i]== 1 && octeto1[i]==0)||(octeto[i]== 0 && octeto1[i]==1)){
//            respuesta.push(0);
//         }else{
//             respuesta.push(1);
//         }

//     }
//     console.log(respuesta);
//     console.log(respuesta.join(""));

// }

// function IpDisponibles(mascara){

// var IpDisponibles = Math.pow(2,mascara)-2;
// console.log(IpDisponibles);
// }


