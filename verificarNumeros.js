//fucion para ver si entra los numeros
// let array = [128, 192, 224, 240, 248, 252, 254, 255];
// let array2 = ["A", "B", "C", "D"];

function llenarDatosSubRed(respuesta, valor) {
  let num = parseInt(respuesta, 2);
  $("#respuesta" + valor + "_Decimal").val(num);
  primeraIP(respuesta, valor);
}


function broadcast() {
  let mascaraTotal = $("#mascara").val();
  let respuestaTotal = [];
  let auxres = [];
  let aux = 32 - mascaraTotal;
  let respuestaA_Binario = $("#respuestaA_Binario").val();
  let respuestaB_Binario = $("#respuestaB_Binario").val();
  let respuestaC_Binario = $("#respuestaC_Binario").val();
  let respuestaD_Binario = $("#respuestaD_Binario").val();
  respuestaTotal = respuestaA_Binario
    .split("")
    .concat(
      respuestaB_Binario.split(""),
      respuestaC_Binario.split(""),
      respuestaD_Binario.split("")
    );
  auxres = respuestaTotal.slice(0, mascaraTotal);
  for (let i = 0; i < aux; i++) {
    auxres.push(1);
  }
  llenarbroadcast(auxres);
}
function llenarbroadcast(valor) {
  auxvalor = valor.join("");
  let auxA = auxvalor.slice(0, 8);
  let auxB = auxvalor.slice(8, 16);
  let auxC = auxvalor.slice(16, 24);
  let auxD = auxvalor.slice(24, 32);
  mascaraA = parseInt(auxA, 2);
  mascaraB = parseInt(auxB, 2);
  mascaraC = parseInt(auxC, 2);
  mascaraD = parseInt(auxD, 2);
  $("#BroadcastA_Respuesta").val(mascaraA);
  $("#BroadcastB_Respuesta").val(mascaraB);
  $("#BroadcastC_Respuesta").val(mascaraC);
  $("#BroadcastD_Respuesta").val(mascaraD);
  ultimaIP(mascaraA, "A");
  ultimaIP(mascaraB, "B");
  ultimaIP(mascaraC, "C");
  ultimaIP(mascaraD, "D");
}
function primeraIP(respuesta, valor) {
  let num = parseInt(respuesta, 2);
  if (valor === "D") {
    $("#PrimeraIP" + valor + "_Respuesta").val(num + 1);
  } else {
    num = parseInt(respuesta, 2);
    $("#PrimeraIP" + valor + "_Respuesta").val(num);
  }
}

function ultimaIP(respuesta, valor) {
  if (valor === "D") {
    $("#UltimaIP" + valor + "_Respuesta").val(respuesta - 1);
  } else {
    $("#UltimaIP" + valor + "_Respuesta").val(respuesta);
  }
}
function numeroIPDisponibles(mascara) {
  aux = 32 - mascara;
  var IpDisponibles = Math.pow(2, aux) - 2;
  $("#IP_Disponible_Respuesta").val(IpDisponibles);
}

