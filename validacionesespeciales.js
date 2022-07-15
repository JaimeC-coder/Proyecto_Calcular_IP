
let mascaraA = "";
let mascaraB = "";
let mascaraC = "";
let mascaraD = "";
let mascaraA_Binario = "";
let mascaraB_Binario = "";
let mascaraC_Binario = "";
let mascaraD_Binario = "";


function llenarmascara(valor) {
  let valorMostrador = [];
  let res;
  let resentero = Math.trunc(valor / 8);
  let resresiduo = valor % 8;
  let valorfor = resentero * 8 + resresiduo;
  let valorfor2 = 32 - valorfor;
  for (let i = 0; i < valorfor; i++) {
    valorMostrador.push(1);
  }
  for (let i = 0; i < valorfor2; i++) {
    valorMostrador.push(0);
  }
  res = valorMostrador.join("");
  $("#respuesta_Mascara_Decimal").val(valor);
  numeroIPDisponibles(valor);
  separar(res);
}

function separar(valor) {
  mascaraA_Binario = valor.slice(0, 8);
  mascaraB_Binario = valor.slice(8, 16);
  mascaraC_Binario = valor.slice(16, 24);
  mascaraD_Binario = valor.slice(24, 32);
  mascaraA=parseInt(mascaraA_Binario,2);
  mascaraB=parseInt(mascaraB_Binario,2);
  mascaraC=parseInt(mascaraC_Binario,2);
  mascaraD=parseInt(mascaraD_Binario,2);
  $("#mascaraA").val(mascaraA);
  $("#mascaraB").val(mascaraB);
  $("#mascaraC").val(mascaraC);
  $("#mascaraD").val(mascaraD);
  $("#mascaraA_Binario").val(mascaraA_Binario);
  $("#mascaraB_Binario").val(mascaraB_Binario);
  $("#mascaraC_Binario").val(mascaraC_Binario);
  $("#mascaraD_Binario").val(mascaraD_Binario);
  respuesta();
}

function comparar (octeto,mascara,valor){
  var auxocta = octeto;
  var auxmascara = mascara;
  var respuesta="";
  for (var i = 0; i < 8; i++) {
    respuesta +=(auxocta[i]&auxmascara[i]);
  }
   $("#respuesta"+valor+"_Binario").val(respuesta);
   llenarDatosSubRed(respuesta,valor);
}

























//funcion para validar los datos ingresados con los del array y que si esta en el array se escriba el mas sercano que se encuentre

// function buscar(array, valores) {
//     let valor = valores.value;
//     var cercano;
//   let res = array.indexOf(valor);
//   if (res > -1) {
  //     cercano= array[res];
  //   } else {
    //     for (var i = 0; i < array.length; i++) {
      //       if (array[i] > valor) {
        //         cercano = array[i];
        //         break;
        //       }
        //     }
        //     console.log(cercano);
        //   }
        //     return cercano;
        
        //   //console.log(res);
        // }
        
        //   console.log(
        //     valor.slice(0, 8)+"=>"+valor.slice(0, 8).length+"=>"+parseInt(valor.slice(0, 8), 2)+"=>"+valor.slice(0, 8).padStart(8, "0")
        //     +"\n" +
        //     valor.slice(8, 16)+"=>"+valor.slice(8, 16).length+"=>"+parseInt(valor.slice(8, 16),2)+"=>"+valor.slice(8, 16).padStart(8, "0")
        //     +"\n" +
        //       valor.slice(16, 24) +
        //       "=>" +
        //       valor.slice(16, 24).length +
        //       "=>" +
        //       parseInt(valor.slice(16, 24), 2) +
        //       "=>" +
        //       valor.slice(16, 24).padStart(8, "0") +
        //       "\n" +
        //       valor.slice(24, 32) +
        //       "=>" +
        //       valor.slice(24, 32).length +
        //       "=>" +
        //       parseInt(valor.slice(24, 32), 2) +
        //       "=>" +
        //       valor.slice(24, 32).padStart(8, "0")
        //   );