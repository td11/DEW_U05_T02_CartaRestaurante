/* Generamos los elementos del html en una funcion */
var titulo;
var cajaColores;
var divTxt,divIconos,divMostrar;
var btnColor1,btnColor2,btnColor3,btnColor4;
var txtPlato;
var boton1,boton2,boton3,boton4,boton5,boton6;


function inicio(){
    
}

function inicializarElementos(){
    titulo = document.createElement("h1").appendChild(document.createTextNode("Nuestro menú"));
    
    iniciarBotonesColores();
    
    
    txtPlato = document.createElement("input");
    txtPlato.setAttribute("id","platos");
    txtPlato.setAttribute("type","text");
    
}

function iniciarBotonesColores(){
    btnColor1 = document.createElement("button");   
    btnColor1.setAttribute("class","button1");
    
    btnColor2 = document.createElement("button");
    btnColor2.setAttribute("class","button2");
    
    btnColor3 = createElement("button");
    btnColor3.setAttribute("class","button3");
    
    btnColor4 = createElement("button");
    btnColor4.setAttribute("class","button4");
    
    cajaColores = document.createElement("div");
    cajaColores.setAttribute("id","cajaColores");
    llenarCajaColores();
}

function iniciarBotonesGestion(){
    
    boton1 = document.createElement('span');
    boton1.className ="glyphicon glyphicon-plus";
    boton2 = document.createElement('span');
    boton2.className ="glyphicon glyphicon-remove";
    boton3 = document.createElement('span');
    boton3.className ="glyphicon glyphicon-text-strike";
}

function cargarElementos(){
    inicializarElementos();
    cargarCajas();
    document.getElementById('resultados').appendChild(titulo);
    document.getElementById('resultados').appendChild(cajaColores);
    document.getElementById('resultados').appendChild(divIconos);
    document.getElementById('resultados').appendChild(divMostrar);
    document.getElementById('mostrar').appendChild(txtPlato);
    
}


function cargarCajas(){
    divTxt = document.createElement("div");
    divTxt.setAttribute("id","textoIntroducir");
    divIconos = document.createElement("div");
    divIconos.setAttribute("id","iconos");
    divMostrar = document.createElement("div");
    divMostrar.setAttribute("id","mostrar");
    
    document.getElementById('resultados').appendChild(cajaColores);
    document.getElementById('resultados').appendChild(divTxt);
    document.getElementById('resultados').appendChild(divIconos);
    document.getElementById('resultados').appendChild(divMostrar);
    
    
}

function llenarCajaColores(){
    cajaColores.appendChild(btnColor1);
    cajaColores.appendChild(btnColor2);
    cajaColores.appendChild(btnColor3);
    cajaColores.appendChild(btnColor4);
}
