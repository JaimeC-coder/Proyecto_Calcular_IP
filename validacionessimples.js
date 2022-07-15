

octetoA.addEventListener("focus", function () {
  return (octetoA.value = "");
});
octetoA.addEventListener("blur", function () {
  if (octetoA.value != 0) {
    return octetoA.value;
  } else {
    return (octetoA.value = 0);
  }
});
octetoB.addEventListener("focus", function () {
  return (octetoB.value = "");
});
octetoB.addEventListener("blur", function () {
  if (octetoB.value != 0) {
    return octetoB.value;
  } else {
    return (octetoB.value = 0);
  }
});
octetoC.addEventListener("focus", function () {
  return (octetoC.value = "");
});
octetoC.addEventListener("blur", function () {
  if (octetoC.value != 0) {
    return octetoC.value;
  } else {
    return (octetoC.value = 0);
  }
});
octetoD.addEventListener("focus", function () {
  return (octetoD.value = "");
});
octetoD.addEventListener("blur", function () {
  if (octetoD.value != 0) {
    return octetoD.value;
  } else {
    return (octetoD.value = 0);
  }
});
mascara.addEventListener("focus", function () {
  return (mascara.value = "");
});
mascara.addEventListener("blur", function () {
  if (mascara.value != 0) {
    return mascara.value;
  } else {
    return (mascara.value = 0);
  }
});
mascaraA.addEventListener("focus", function () {
  return (mascaraA.value = "");
});
mascaraA.addEventListener("blur", function () {
  if (mascaraA.value != 0) {
    return mascaraA.value;
  } else {
    return (mascaraA.value = 0);
  }
});
mascaraB.addEventListener("focus", function () {
  return (mascaraB.value = "");
});
mascaraB.addEventListener("blur", function () {
  if (mascaraB.value != 0) {
    return mascaraB.value;
  } else {
    return (mascaraB.value = 0);
  }
});
mascaraC.addEventListener("focus", function () {
  return (mascaraC.value = "");
});
mascaraC.addEventListener("blur", function () {
  if (mascaraC.value != 0) {
    return mascaraC.value;
  } else {
    return (mascaraC.value = 0);
  }
});
mascaraD.addEventListener("focus", function () {
  return (mascaraD.value = "");
});
mascaraD.addEventListener("blur", function () {
  if (mascaraD.value != 0) {
    return mascaraD.value;
  } else {
    return (mascaraD.value = 0);
  }
});
octetoA.addEventListener("keyup", () => {
  if (octetoA.value == "") {
    octetoA.value = "";
  } else {
    if (octetoA.value > 255) {
      octetoA.value = 255;

      principal(octetoA);
    } else {
      principal(octetoA);
    }
  }
});
octetoB.addEventListener("keyup", () => {
  if (octetoB.value == "") {
    octetoB.value = "";
  } else {
    if (octetoB.value > 255) {
      octetoB.value = 255;

      principal(octetoB);
    } else {
      principal(octetoB);
    }
  }
});
octetoC.addEventListener("keyup", () => {
  if (octetoC.value == "") {
    octetoC.value = "";
  } else {
    if (octetoC.value > 255) {
      octetoC.value = 255;

      principal(octetoC);
    } else {
      principal(octetoC);
    }
  }
});
octetoD.addEventListener("keyup", () => {
  if (octetoD.value == "") {
    octetoD.value = "";
  } else {
    if (octetoD.value > 255) {
      octetoD.value = 255;

      principal(octetoD);
    } else {
      principal(octetoD);
    }
  }
});
mascara.addEventListener("keyup", () => {
  if (mascara.value == "") {
    mascara.value = "";
  } else {
    if (mascara.value > 30) {
      mascara.value = 30;

      llenarmascara(mascara.value);
    } else {
      llenarmascara(mascara.value);
    }
  }
});
mascaraA.addEventListener("keyup", () => {
  if (mascaraA.value == "") {
    mascaraA.value = "";
  } else {
    if (mascaraA.value > 255) {
      mascaraA.value = 255;

      principal(mascaraA);
    } else {
      principal(mascaraA);
    }
  }
});
mascaraB.addEventListener("keyup", () => {
  if (mascaraB.value == "") {
    mascaraB.value = "";
  } else {
    if (mascaraB.value > 255) {
      mascaraB.value = 255;

      principal(mascaraB);
    } else {
      principal(mascaraB);
    }
  }
});
mascaraC.addEventListener("keyup", () => {
  if (mascaraC.value == "") {
    mascaraC.value = "";
  } else {
    if (mascaraC.value > 255) {
      mascaraC.value = 255;

      principal(mascaraC);
    } else {
      principal(mascaraC);
    }
  }
});
mascaraD.addEventListener("keyup", () => {
  if (mascaraD.value == "") {
    mascaraD.value = "";
  } else {
    if (mascaraD.value > 255) {
      mascaraD.value = 255;

      principal(mascaraD);
    } else {
      principal(mascaraD);
    }
  }
});
function respuesta() {
  var octetoA_Binario  = $("#octetoA_Binario").val();
  var octetoB_Binario  = $("#octetoB_Binario").val();
  var octetoC_Binario  = $("#octetoC_Binario").val();
  var octetoD_Binario  = $("#octetoD_Binario").val();
  var mascaraA_Binario = $("#mascaraA_Binario").val();
  var mascaraB_Binario = $("#mascaraB_Binario").val();
  var mascaraC_Binario = $("#mascaraC_Binario").val();
  var mascaraD_Binario = $("#mascaraD_Binario").val();

  if (mascaraD_Binario.length > 0) {
   comparar(octetoA_Binario,mascaraA_Binario ,"A");
   comparar(octetoB_Binario,mascaraB_Binario, "B");
   comparar(octetoC_Binario,mascaraC_Binario, "C");
   comparar(octetoD_Binario,mascaraD_Binario, "D");
  }
  broadcast();
}
//---------------------------------------------
function soloNumeros(e) {
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key);
  numero = "0123456789";
  especiales = "8-37-38-46";
  tecla_especial = false;
  for (var i in especiales) {
    if (key == especiales[i]) tecla_especial = true;
  }
  if (numero.indexOf(teclado) == -1 && !tecla_especial) {
    return false;
  }
}
