document.addEventListener("keydown", konamiCode)

//Up Up Down Down Left Right Left Right B A [Enter or Space]
var code = [38,38,40,40,37,39,37,39,66,65,[13,32]]
var currentCode = []
var white = false;
var progress = document.getElementById("progress");

function konamiCode(k){
  currentCode.push(k.keyCode)
  
  //Si el código actual con el que estamos comprobando es un vector, compruebe si la pulsación de tecla coincide con alguno de los códigos especificados.
  if(Array.isArray(code[currentCode.length-1]))
    currentCode = code[currentCode.length-1].indexOf(currentCode[currentCode.length-1]) != -1 ? currentCode : [];
  else if(currentCode[currentCode.length-1] != code[currentCode.length-1])
    currentCode = []
  
  //Si lo logras cambiara el body de color
  if(currentCode.length == code.length){
    progress.className = document.body.className;
    white = !white;
    currentCode = []
    
    // Verificar si la última tecla presionada es Enter y redirigir a otra página
    if (k.keyCode === 13) {
      window.location.href = "/index.html";
    }
  }

  //Barra de progreso
  progress.style.marginLeft = (currentCode.length/code.length)*100+"%";
}
