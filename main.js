//Declaración de variables//
let nombre, genero, altura, peso;

//Declaracion de funciones//
function saludar(nombre) {
  if(genero == "F"){
    alert("Bienvenida " + nombre); 
  } else {
    alert("Bienvenido " + nombre);
  }
}

function calculoPeso(nombre, genero, altura, peso){
  let pesoMin;
  let pesoMax;
  switch(genero){
    case "F": 
      pesoMin = altura - 110;
      pesoMax = altura - 100;
      recomendacion(nombre,peso,pesoMax,pesoMin)
      break;
    case "M": 
      pesoMin = altura - 100;
      pesoMax = altura - 90;
      recomendacion(nombre,peso,pesoMax,pesoMin)
      break;
    default:  
      alert("Se necesita de un género válido para hacer el cálculo");
  }
}

function recomendacion(nombre, peso, pesoMax,pesoMin){
  if(peso < pesoMin){
    return (
      document.write("<h2>" + nombre + ": " + "El peso está por debajo de lo normal </h2>"),
      document.write("<p>Recomendamos una rutina de hipertrofia y dieta hipercalórica</p>")
    );
  }
  if(peso >= pesoMin && peso <= pesoMax){
    return (
      document.write("<h2>" + nombre + ": " + "El peso está dentro de los parámentros normales </h2>"),
      document.write("<p>Recomendamos una rutina regular</p>")
    );
  }
  if(peso > pesoMax){
    return (
      document.write("<h2>" + nombre + ": " + "Tiene sobrepeso </h2>"),
      document.write("<p>Recomendamos una rutina aeróbita y dieta hipocalórica</p>")
    );
  }

}

//Datos del usuario//
nombre = prompt("Ingrese su nombre");
genero = prompt("Ingrese su género (F o M)").toUpperCase();

saludar(nombre);

let cantPersonas = Number(prompt("Ingrese cantidad de personas que quiere consultar"));

for(let i = 0; i < cantPersonas; i+=1){
  nombre = prompt("Ingrese el nombre");
  genero = prompt("Ingrese género (F o M)").toUpperCase();
  altura = Number(prompt("Ingrese altura en cms"));
  peso = Number(prompt("Ingrese su peso actual en kg"));
  
  calculoPeso(nombre, genero, altura, peso);

}




