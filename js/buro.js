function segmentoNombreDelCliente(){  
  var data          = [];
  var primerNombre  = "";
  var segundoNombre = "";
  var nombres       = "";
  var todo          = "";
  var personalData  = "";
  
  var nombre        = document.getElementById("nombre").value;
  var aPaterno      = document.getElementById("aPaterno").value;
  var aMaterno      = document.getElementById("aMaterno").value;
  var RFC           = document.getElementById("RFC").value; 
  
  aPaterno    = "PN" + count(aPaterno) + aPaterno;
  data.push(aPaterno);
  
  aMaterno    = "00" + count(aMaterno) + aMaterno;
  data.push(aMaterno);
  
  if(hasWhiteSpace(nombre)){
    nombres       = separateName(nombre);
    primerNombre  = "02" + count(nombres[0]) + nombres[0];
    data.push(primerNombre);
    segundoNombre  = "03" + count(nombres[1]) + nombres[1];
    data.push(segundoNombre);
  }else{
    primerNombre = "02" + count(nombre) + nombre;
    data.push(primerNombre)
  }
  
  RFC = "05" + count(RFC) + RFC;
  data.push(RFC);
  
  for(i = 0; i < data.length; i++){
    todo = todo + data[i];
  }

  personalData = todo.toUpperCase();
  console.log(personalData);
}

//Función contar caracteres.
function count(text){
  var lenght  = text.length;
  var final   = lenght;
  if(lenght<=9){
    final = "0" + final;
  }
  return(final);
}

//Función buscar espacios.
function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

//Función separar nombres.
function separateName(name){
  var res                 = name.split(" ");
  var primerNombre        = "";
  var segundoNombre       = "";
  var segundoNombreTemp   = "";
  for(i=0; i<res.length; i++){
    if(i == 0){
      primerNombre = res[i];
    }else{
      segundoNombreTemp = segundoNombreTemp + res[i] + " ";
    }
  }
  segundoNombre = segundoNombreTemp.trim();
  return[primerNombre, segundoNombre];
}