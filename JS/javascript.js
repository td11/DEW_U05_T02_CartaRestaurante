/* Generamos los elementos del html en una funcion */
var menu;
var titulo;
var cajaColores;
var divTxt, divIconos, divMostrar;
var btnColor1, btnColor2, btnColor3, btnColor4;
var txtPlato;
var boton1, boton2, boton3, boton4, boton5, boton6, boton7;
var colorElegido = '#4CAF50';

inicio();

function inicio() {
    inicializarElementos();
}

/* Metemos todos los elementos en el html */
function inicializarElementos() {
    /* Titulos */
    titulo = document.createElement("h1");
    var txtTitulo = document.createTextNode("Nuestro menú");
    titulo.appendChild(txtTitulo);
    document.getElementById('titulo').appendChild(titulo);
    /*Fin  titulos */

    /* Colores */
    btnColor1 = document.createElement("button");
    btnColor1.setAttribute("class", "button");
    btnColor2 = document.createElement("button");
    btnColor2.setAttribute("class", "button2");
    btnColor3 = document.createElement("button");
    btnColor3.setAttribute("class", "button3");
    btnColor4 = document.createElement("button");
    btnColor4.setAttribute("class", "button4");

    document.getElementById('cajaColores').appendChild(btnColor1);
    document.getElementById('cajaColores').appendChild(btnColor2);
    document.getElementById('cajaColores').appendChild(btnColor3);
    document.getElementById('cajaColores').appendChild(btnColor4);
    /* Fin colores */

    /* Input platos */
    txtPlato = document.createElement("input");
    txtPlato.setAttribute("id", "platos");
    txtPlato.setAttribute("type", "text");
    txtPlato.required = true;
    txtPlato.setAttribute("size", "100");

    document.getElementById('textoIntroducir').appendChild(txtPlato);
    /* Fin platos */

    /* Iconos */
    boton1 = document.createElement('span');
    boton1.className = "glyphicon glyphicon-plus";
    boton1.id = "botonAdd";
    boton1.setAttribute("style", "cursor:pointer");
    boton2 = document.createElement('span');
    boton2.className = "glyphicon glyphicon-remove";
    boton2.setAttribute("style", "cursor:pointer");
    boton2.id = "botonRemove";
    boton3 = document.createElement('span');
    boton3.className = "glyphicon glyphicon-text-width";
    boton3.setAttribute("style", "cursor:pointer");
    boton3.id = "botonTachar";
    boton4 = document.createElement('span');
    boton4.className = "glyphicon glyphicon-check";
    boton4.setAttribute("style", "cursor:pointer");
    boton4.id = "botonSeleccionar";
    boton5 = document.createElement('span');
    boton5.className = "glyphicon glyphicon-unchecked";
    boton5.setAttribute("style", "cursor:pointer");
    boton5.id = "botonDeseleccionar";
    boton6 = document.createElement('span');
    boton6.className = "glyphicon glyphicon-ok";
    boton6.setAttribute("style", "cursor:pointer");
    boton6.id = "botonSeleccionarTodo";
    boton7 = document.createElement('span');
    boton7.className = "glyphicon glyphicon-resize-vertical";
    boton7.setAttribute("style", "cursor:pointer");
    boton7.id = "botonOrganizar";

    document.getElementById('iconos').appendChild(boton1);
    document.getElementById('iconos').appendChild(boton2);
    document.getElementById('iconos').appendChild(boton3);
    document.getElementById('iconos').appendChild(boton4);
    document.getElementById('iconos').appendChild(boton5);
    document.getElementById('iconos').appendChild(boton6);
    document.getElementById('iconos').appendChild(boton7);
    /* Fin iconos */


    asignarEventos();

}

//Eventos de todos los elementos
function asignarEventos() {
    txtPlato.addEventListener("keydown", function (e) {
        var key = e.keyCode;
        if (key === 13) {
            if (/^\s+|\s+$/.test(e.target.value) || e.target.value == "") {
                alert("Introduzca un plato que no este vacio.");
            } else {
                addPlato(e);
            }
        }
    });

    /* Colores */
    btnColor1.addEventListener('click', function (e) {
        colorElegido = window.getComputedStyle(e.target, null).getPropertyValue('background-color');
    });
    btnColor2.addEventListener('click', function (e) {
        colorElegido = window.getComputedStyle(e.target, null).getPropertyValue('background-color');
    });
    btnColor3.addEventListener('click', function (e) {
        colorElegido = window.getComputedStyle(e.target, null).getPropertyValue('background-color');
    });
    btnColor4.addEventListener('click', function (e) {
        colorElegido = window.getComputedStyle(e.target, null).getPropertyValue('background-color');
    });

    /* Botones Iconos */
    /* Añadir */
    boton1.addEventListener('click', function () {
            if (/^\s+|\s+$/.test(txtPlato.value) || txtPlato.value == "") {
                alert("Introduzca un plato que no este vacio.");
            } else {
                addPlatoButton(txtPlato);
            }
        }

    );
    /* Eliminar */
    boton2.addEventListener('click', function () {
        var numeroPlatos = contarPlatos();
        for (var i = 0; i < numeroPlatos; i++) {
            var divPlato = document.getElementById('plato' + i);
            var checkBox = document.getElementById('checkbox' + i);
            if (checkBox.checked == true) {
                divPlato.parentElement.removeChild(divPlato);
            }
        }
        recontarPlatos();
    });

    /* Subrayar el texto */
    boton3.addEventListener('click', function () {
        var numeroPlatos = contarPlatos();
        for (var i = 0; i < numeroPlatos; i++) {
            var divPlato = document.getElementById('plato' + i);
            var checkBox = document.getElementById('checkbox' + i);
            if (checkBox.checked == true) {
                var txt = divPlato.getElementsByTagName("span")[0];
                txt.innerHTML = txt.innerText.strike();
            }
        }
    });

    /* Seleccionar todos los checkbox */
    boton4.addEventListener('click', function () {
        var numeroPlatos = contarPlatos();
        for (var i = 0; i < numeroPlatos; i++) {
            var divPlato = document.getElementById('plato' + i);
            var checkBox = document.getElementById('checkbox' + i);
            if (checkBox.checked == false) {
                checkBox.checked = true;
            }
        }
    });

    /* Deseleccionar todos los checkbox */
    boton5.addEventListener('click', function () {
        var numeroPlatos = contarPlatos();
        for (var i = 0; i < numeroPlatos; i++) {
            var divPlato = document.getElementById('plato' + i);
            var checkBox = document.getElementById('checkbox' + i);
            if (checkBox.checked == true) {
                checkBox.checked = false;
            }
        }
    });

    /* Cambiar seleccion de checkbox */
    boton6.addEventListener('click', function () {
        var numeroPlatos = contarPlatos();
        for (var i = 0; i < numeroPlatos; i++) {
            var divPlato = document.getElementById('plato' + i);
            var checkBox = document.getElementById('checkbox' + i);
            if (checkBox.checked == true) {
                checkBox.checked = false;
            } else if (checkBox.checked == false) {
                checkBox.checked = true;
            }
        }
    });
    
    /* Reordenar por letra y color */
    boton7.addEventListener('click', function(){
        var arrayPlatos;
    });

}



function comprobarTexto(e) {
    alert(e.target.value);
}

//Actualizar numero de platos
function recontarPlatos() {
    var conteo = contarPlatos();
    for (var i = 0; i < conteo; i++) {
        var lista = document.getElementsByClassName('plato');
        var cajaPlato = lista.item(i);
        cajaPlato.id = 'plato' + i;
        var checkbox = cajaPlato.getElementsByTagName('input').item(0);
        checkbox.id = 'checkbox' + i;
    }
}

//Cambia nombre de los platos
function cambiarPlato(id) {
    var caja = document.getElementById(id);
    var texto = prompt("Introduzca un nuevo nombre:");
    if (texto != null) {
        caja.getElementsByTagName('span').item(0).innerHTML = texto;
    } else {
        alert('Nombre de plato a cambiar no válido.');
    }
}


// Añadir platos al listado evento teclado
function addPlato(e) {
    var txtPlato = document.createTextNode(e.target.value);
    var spanPlato = document.createElement('span');
    var idparaspan = 'plato' + contarPlatos();
    spanPlato.appendChild(txtPlato);
    spanPlato.addEventListener('click', function () {
        var caja = document.getElementById(idparaspan);
        var texto = prompt("Introduzca un nuevo nombre:");
        if (texto != null) {
            caja.getElementsByTagName('span').item(0).innerHTML = texto;
        } else {
            alert('Nombre de plato a cambiar no válido.');
        }
    });
    var cajaPlato = document.createElement('div');
    cajaPlato.id = 'plato' + contarPlatos();
    cajaPlato.className = 'plato';
    cajaPlato.contenteditable = "true";
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'checkbox' + contarPlatos();
    checkBox.name = 'plato';
    cajaPlato.appendChild(checkBox);
    cajaPlato.appendChild(spanPlato);
    cajaPlato.style.backgroundColor = colorElegido;
    document.getElementById('platos').value = "";
    document.getElementById('lista').appendChild(cajaPlato);

}

//Añadir platos al listado evento plus
function addPlatoButton(e) {
    var txtPlato = document.createTextNode(e.value);
    var spanPlato = document.createElement('span');
    var idparaspan = 'plato' + contarPlatos();
    spanPlato.appendChild(txtPlato);
    spanPlato.addEventListener('click', function () {
        var caja = document.getElementById(idparaspan);
        var texto = prompt("Introduzca un nuevo nombre:");
        if (texto != null) {
            caja.getElementsByTagName('span').item(0).innerHTML = texto;
        } else {
            alert('Nombre de plato a cambiar no válido.');
        }
    });
    var cajaPlato = document.createElement('div');
    cajaPlato.id = 'plato' + contarPlatos();
    cajaPlato.className = 'plato';
    cajaPlato.contenteditable = "true";
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'checkbox' + contarPlatos();
    checkBox.name = 'plato';
    checkBox.value = 'txtPlato';
    cajaPlato.appendChild(checkBox);
    cajaPlato.appendChild(spanPlato);
    cajaPlato.style.backgroundColor = colorElegido;
    document.getElementById('platos').value = "";
    document.getElementById('lista').appendChild(cajaPlato);

}

//Contar numero de platos introducidos
function contarPlatos() {
    var lista = document.getElementById('lista');
    var contadorPlatos = lista.getElementsByTagName('div').length;
    return contadorPlatos;
}
