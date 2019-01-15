<!-- TODO: Prepara e ir cambiando las funciones de este archivo por las usadas en el index.html. -->



function cambia(){

	var capa = document.getElementById("principal");

	borraHijos(capa);

	var nodoTexto = document.createTextNode("HAS PULSADO EL BOTON PULSAR Y HAS HECHO MAGIA!!!!");

	var nodoElement = document.createElement("h2");

	nodoElement.appendChild(nodoTexto);

	capa.appendChild(nodoElement);

	console.log("FIN PRUEBA");

}


function borraHijos(elemento){

	//alert(elemento.innerHTML);

	var hijos = elemento.childNodes;

	//alert(hijos.length);
	for(var i=0; i < hijos.length ; i++){
		elemento.removeChild(hijos[i]);
	}

}

function mostrarPersonajes(){

	var capa = document.getElementById("principal");

borraHijos(capa);

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			pintaTablaPersonajes(this.responseText);

		}else{
			console.log(this.readyState + " " + this.status);
		}
	};

	xhttp.open("GET", "http://localhost/AD_UD3_A03_Cliente_JS/leePersonajes.php", true);
	xhttp.send();


}
function mostrarVideojuegos(){

	var capa = document.getElementById("principal");

	borraHijos(capa);

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			pintaTablaVideojuegos(this.responseText);
		}else{
			console.log(this.readyState + " " + this.status);
		}
	};

	xhttp.open("GET", "http://localhost/AD_UD3_A03_Cliente_JS/leeVideojuego.php", true);
	xhttp.send();


}

function pintaTablaVideojuegos(respuesta){

	var respuestaJSON = JSON.parse(respuesta);

	var capa = document.getElementById("principal");

	if(respuestaJSON["estado"] == "ok"){
		console.log("VAMOS BIEN");

		var arrPersonajes =  respuestaJSON["videojuegos"];//CONECTA CON LINEA 43 $arrMensaje (DEBAJO DE estado)

		for(var i = 0; i < arrPersonajes.length; i++){

			var fila = document.createElement("div");
			fila.setAttribute("id","jugador_"+ arrPersonajes[i].id );
			fila.setAttribute("class","jugador");
			fila.setAttribute("onclick","prueba(this)");

			var nombre = document.createElement("h2");
			var texto = document.createTextNode(arrPersonajes[i].nombre);
			nombre.appendChild(texto);
			nombre.setAttribute("id","nombrejugador_"+ arrPersonajes[i].id );

			var fecha = document.createElement("h2");
			var textonum = document.createTextNode(arrPersonajes[i].fecha_lanzamiento);
			fecha.appendChild(textonum);
			fecha.setAttribute("id","numerojugador_"+ arrPersonajes[i].id );

			var desarrollador = document.createElement("h2");
			var textoequipo = document.createTextNode(arrPersonajes[i].desarrollador);
			desarrollador.appendChild(textoequipo);
			desarrollador.setAttribute("id","equipojugador_"+ arrPersonajes[i].id );

			var plataforma = document.createElement("h2");
			var textoequipo = document.createTextNode(arrPersonajes[i].plataforma);
			plataforma.appendChild(textoequipo);
			plataforma.setAttribute("id","equipojugador_"+ arrPersonajes[i].id );

			fila.appendChild(nombre);
			fila.appendChild(fecha);
			fila.appendChild(desarrollador);
			fila.appendChild(plataforma);


			capa.appendChild(fila);
		}

	}else{
		console.log("VAMOS MAL");
	}



}
function pintaTablaPersonajes(respuesta){

	var respuestaJSON = JSON.parse(respuesta);

	var capa = document.getElementById("principal");

	if(respuestaJSON["estado"] == "ok"){
		console.log("VAMOS BIEN");

		var arrPersonajes =  respuestaJSON["personajes"];

		for(var i = 0; i < arrPersonajes.length; i++){

			var fila = document.createElement("div");
			fila.setAttribute("id","jugador_"+ arrPersonajes[i].id );
			fila.setAttribute("class","jugador");
			fila.setAttribute("onclick","prueba(this)");

			var nombre = document.createElement("h2");
			var texto = document.createTextNode(arrPersonajes[i].nombre);
			nombre.appendChild(texto);
			nombre.setAttribute("id","nombrejugador_"+ arrPersonajes[i].id );

			var numero = document.createElement("h2");
			var textonum = document.createTextNode(arrPersonajes[i].id_juego);
			numero.appendChild(textonum);
			numero.setAttribute("id","numerojugador_"+ arrPersonajes[i].id );


			fila.appendChild(nombre);
			fila.appendChild(numero);


			capa.appendChild(fila);
		}

	}else{
		console.log("VAMOS MAL");
	}



}

function prueba(elemento){

	id = elemento.id;

	pos = id.indexOf("_");

	tam = id.length

	idjugador = id.substring(pos+1,tam);

	nombre = document.getElementById("nombrejugador_" + idjugador).innerHTML;
	numero = document.getElementById("numerojugador_" + idjugador).innerHTML;
	equipo = document.getElementById("equipojugador_" + idjugador).innerHTML;

	document.getElementById("nombreColega").value = nombre;
	document.getElementById("numeroColega").value = numero;
	document.getElementById("equipoColega").value = equipo;

}

function insertarVideojuego(){
//Insertar Videojuego
	var videojuego = {};

	var btnInsert = document.getElementById("btnInsert").value;
	videojuego.nombre = document.getElementById("nombreVideojuego").value;
	videojuego.id = document.getElementById("idVideojuego").value;
	videojuego.lanzamiento = document.getElementById("fechaVideojuego").value;
	videojuego.desarrollado = document.getElementById("desarrolloVideojuego").value;
	videojuego.plataforma = document.getElementById("plataformaVideojuego").value;
  btnInsert = document.getElementById("btnInsert").disabled=true;
	console.log(videojuego);

	var peticion = {};

	peticion.peticion = "add";
	peticion.videojuegoAnnadir = videojuego;

	console.log(peticion);

	peticionJSON = JSON.stringify(peticion);

	console.log(peticionJSON);

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost/AD_UD3_A03_Cliente_JS/escribirVideojuego.php");
	xmlhttp.setRequestHeader("Content-Type", "application/json");

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("INSERTADO CORRECTAMENTE. ID: " + respuestaJSON["lastId"] );
btnInsert = document.getElementById("btnInsert").disabled=false;
location.reload();

			}else{
				alert(respuestaJSON["mensaje"]);
			}
		}else{
			console.log(this.readyState + " " + this.status);
			if (this.readyState == 4 && this.status == 404) {
				alert("URL INCORRECTA");

			}
		}
	};

	xmlhttp.send(peticionJSON);


}

//Insertar Personaje

function insertarPersonaje(){
	var personaje = {};

	var btnInsert = document.getElementById("boton2").value;
	personaje.nombreP = document.getElementById("nombrePersonaje").value;
	personaje.id = document.getElementById("idPersonaje").value;
	personaje.idGame = document.getElementById("comparacionPersonaje").value;
  btnInsert = document.getElementById("boton2").disabled=true;
	console.log(personaje);

	var peticion = {};

	peticion.peticion = "add";
	peticion.personajeAnnadir = personaje;

	console.log(peticion);

	peticionJSON = JSON.stringify(peticion);

	console.log(peticionJSON);

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost/AD_UD3_A03_Cliente_JS/escribirPersonaje.php");
	xmlhttp.setRequestHeader("Content-Type", "application/json");

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("INSERTADO CORRECTAMENTE. ID: " + respuestaJSON["lastId"] );
btnInsert = document.getElementById("boton2").disabled=false;
location.reload();

			}else{
				alert(respuestaJSON["mensaje"]);
			}
		}else{
			console.log(this.readyState + " " + this.status);
			if (this.readyState == 4 && this.status == 404) {
				alert("URL INCORRECTA");

			}
		}
	};

//////////////////////////////////

function borrarPersonaje(){

	var personaje = {};

	var btnDelete = document.getElementById("boton3").value;
	personaje.id = document.getElementById("idPersonaje").value;
	personaje.nombreP = document.getElementById("nombrePersonaje").value;
	personaje.idGame = document.getElementById("comparacionPersonaje").value;
  btnDelete = document.getElementById("boton3").disabled=true;
	console.log(personaje);

	var peticion = {};

	peticion.peticion = "del";
	peticion.personajeBorrar = personaje;

	console.log(peticion);

	peticionJSON = JSON.stringify(peticion);

	console.log(peticionJSON);

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost/AD_UD3_A03_Cliente_JS/borrarPersonaje.php");
	xmlhttp.setRequestHeader("Content-Type", "application/json");

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("Borrado CORRECTAMENTE. ID: " + respuestaJSON["lastId"] );
btnDelete = document.getElementById("boton3").disabled=false;
location.reload();

			}else{
				alert(respuestaJSON["mensaje"]);
			}
		}else{
			console.log(this.readyState + " " + this.status);
			if (this.readyState == 4 && this.status == 404) {
				alert("URL INCORRECTA");

			}
		}
	};

	xmlhttp.send(peticionJSON);


}

//Borrar videojuego

function borrarVideojuego(){

	var videojuego = {};

	var btnDelete = document.getElementById("btnDelete").value;
	videojuego.nombre = document.getElementById("nombreVideojuego").value;
	videojuego.id = document.getElementById("idVideojuego").value;
	videojuego.lanzamiento = document.getElementById("fechaVideojuego").value;
	videojuego.desarrollado = document.getElementById("desarrolloVideojuego").value;
	videojuego.plataforma = document.getElementById("plataformaVideojuego").value;
  btnDelete = document.getElementById("btnDelete").disabled=true;
	console.log(personaje);

	var peticion = {};

	peticion.peticion = "del";
	peticion.videojuegoBorrar = videojuego;

	console.log(peticion);

	peticionJSON = JSON.stringify(peticion);

	console.log(peticionJSON);

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost/AD_UD3_A03_Cliente_JS/borrarVideojuego.php");
	xmlhttp.setRequestHeader("Content-Type", "application/json");

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("Borrado CORRECTAMENTE. ID: " + respuestaJSON["lastId"] );
btnDelete = document.getElementById("btnDelete").disabled=false;
location.reload();

			}else{
				alert(respuestaJSON["mensaje"]);
			}
		}else{
			console.log(this.readyState + " " + this.status);
			if (this.readyState == 4 && this.status == 404) {
				alert("URL INCORRECTA");

			}
		}
	};

	xmlhttp.send(peticionJSON);


}

console.log("JS CARGADO");
}
