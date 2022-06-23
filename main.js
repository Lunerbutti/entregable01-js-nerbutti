

let nombre = prompt( "ingrese su nombre");
let apellido = prompt( "ingrese su apellido");

let verificacion = parseFloat(prompt( "ingrese su DNI"));


if ((verificacion !== "") && (nombre !== "") && (apellido !== "")) {
    alert("Bienvenido "+nombre +" "+apellido+" "+ verificacion)
}else{
    alert("vuelva a ingresar sus datos")
}
let promedio = 0;

function prom(notaUno, notaDos, notaTres) {
promedio = (notaUno+notaDos+notaTres)/3}

let promedioGral = 0;

function promGral(promLen, promMat, promSoc, promNat) {
promedioGral = (promLen+promMat+promSoc+promNat)/4}

let numero = (parseInt(prompt("Bienvenido a la libreta escolar, escoja lo que desea visualizar \n\ 1 Lengua; \n\ 2 Matematicas;\n\ 3 cs Naturales;\n\ 4 cs Sociales;\n\ 5 Promedio General;\n\ 6 Salir"))); while (numero < 6) {
    alert("Gracias por su visita")


 
    if (numero == 1) {alert("Estas son las notas de Lengua ")
    let notaUno = parseInt(prompt( "ingrese nota  uno"));
    let notaDos = parseInt(prompt( "ingrese nota  Dos"));
    let notaTres = parseInt(prompt( "ingrese nota  Tres"));
    
    prom(notaUno,notaDos,notaTres);
    alert(" El promedio es: "+ promedio+"\n\ Las notas son: "+ notaUno +" "+ notaDos +" "+ notaTres);}
else if(numero == 2) {alert("Estas son las notas de Matematicas")
let notaUno = parseInt(prompt( "ingrese nota  uno"));
let notaDos = parseInt(prompt( "ingrese nota  Dos"));
let notaTres = parseInt(prompt( "ingrese nota  Tres"));

prom(notaUno,notaDos,notaTres);
alert(" El promedio es: "+ promedio+"\n\ Las notas son: "+ notaUno +" "+ notaDos +" "+ notaTres);}
else if(numero == 3) {alert("Estas son las notas de cs Naturales")
let notaUno = parseInt(prompt( "ingrese nota  uno"));
let notaDos = parseInt(prompt( "ingrese nota  Dos"));
let notaTres = parseInt(prompt( "ingrese nota  Tres"));

prom(notaUno,notaDos,notaTres);
alert(" El promedio es: "+ promedio+"\n\ Las notas son: "+ notaUno +" "+ notaDos +" "+ notaTres);}
else if(numero == 4) {alert("Estas son las notas de Sociales")
let notaUno = parseInt(prompt( "ingrese nota  uno"));
let notaDos = parseInt(prompt( "ingrese nota  Dos"));
let notaTres = parseInt(prompt( "ingrese nota  Tres"));

prom(notaUno,notaDos,notaTres);
alert(" El promedio es: "+ promedio+"\n\ Las notas son: "+ notaUno +" "+ notaDos +" "+ notaTres);}
else if(numero == 5) {alert("Este es el Promedio General")
let promLen = parseFloat(prompt( "ingrese promedio de Lengua"));
let promMat = parseFloat(prompt( "ingrese promedio de Matematicas"));
let promSoc = parseFloat(prompt( "ingrese promedio de cs Sociales"));
let promNat = parseFloat(prompt( "ingrese promedio de cs Naturales"));

promGral(promLen,promMat,promSoc,promNat);
alert(" El promedio GENERAL es: "+ promedioGral+"\n\ Las promedios son: "+"\n\ prom Lengua "+ promLen +"\n\ prom Matematicas "+ promMat +"\n\ prom cs Sociales "+ promSoc+"\n\ prom cs Naturales "+ promNat);}
else {alert("Gracias por su visita")}

numero = (parseInt(prompt("Bienvenido a la libreta escolar, escoja lo que desea visualizar \n\ 1 Lengua; \n\ 2 Matematicas;\n\ 3 cs Naturales;\n\ 4 cs Sociales;\n\ 5 Promedio General;\n\ 6 Salir")));
}

