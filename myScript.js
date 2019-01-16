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
	while(elemento.hasChildNodes()){
		elemento.removeChild(hijos[0]);
	}

}

function mostrarPersonajes(){

	var capa = document.getElementById("principal2");

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

		var arrVideojuegos =  respuestaJSON["videojuegos"];//CONECTA CON LINEA 43 $arrMensaje (DEBAJO DE estado)

		for(var i = 0; i < arrVideojuegos.length; i++){

			var fila = document.createElement("div");
			fila.setAttribute("id","jugador_"+ arrVideojuegos[i].id );
			fila.setAttribute("class","jugador");
			fila.setAttribute("onclick","getterVideojuego(this)");

			var nombre = document.createElement("h2");
			var texto = document.createTextNode("Nombre: "+ arrVideojuegos[i].nombre);

			nombre.appendChild(texto);
			nombre.setAttribute("id","nombre"+ arrVideojuegos[i].id );

			var fecha = document.createElement("h2");
			var textonum = document.createTextNode("Fecha de Lanzamiento: "+ arrVideojuegos[i].fecha_lanzamiento);
			fecha.appendChild(textonum);
			fecha.setAttribute("id","fecha"+ arrVideojuegos[i].id );

			var desarrollador = document.createElement("h2");
			var textoequipo = document.createTextNode("Desarrollador: "+arrVideojuegos[i].desarrollador);
			desarrollador.appendChild(textoequipo);
			desarrollador.setAttribute("id","desarrollador"+ arrVideojuegos[i].id );

			var plataforma = document.createElement("h2");
			var textoequipo = document.createTextNode("Plataforma: "+arrVideojuegos[i].plataforma);
			plataforma.appendChild(textoequipo);
			plataforma.setAttribute("id","plataforma"+ arrVideojuegos[i].id );


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


function getterVideojuego(elemento){

	id = elemento.id;

	pos = id.indexOf("_");

	tam = id.length

	idjugador = id.substring(pos+1,tam);

	console.log(elemento.id)



	nombre = document.getElementById("nombre" + idjugador).innerHTML;
	nombre = nombre.substring(nombre.indexOf(" ") + 1, nombre.length)
	fecha = document.getElementById("fecha" + idjugador).innerHTML;
	fecha = fecha.substring(fecha.indexOf(":") + 2, fecha.length)
	desarrollador = document.getElementById("desarrollador" + idjugador).innerHTML;
	desarrollador = desarrollador.substring(desarrollador.indexOf(" ") + 1, desarrollador.length)
	plataforma = document.getElementById("plataforma" + idjugador).innerHTML;
	plataforma = plataforma.substring(plataforma.indexOf(" ") + 1, plataforma.length)

	console.log(nombre + " " + fecha);

	document.getElementById("idVideojuego").value = idjugador
	document.getElementById("nombreVideojuego").value = nombre;
	document.getElementById("fechaVideojuego").value = fecha;
	document.getElementById("desarrolloVideojuego").value = desarrollador;
  document.getElementById("plataformaVideojuego").value = plataforma;
}
function pintaTablaPersonajes(respuesta){

	var respuestaJSON = JSON.parse(respuesta);

	var capa = document.getElementById("principal2");

	if(respuestaJSON["estado"] == "ok"){
		console.log("VAMOS BIEN");

		var arrPersonajes =  respuestaJSON["personajes"];

		for(var i = 0; i < arrPersonajes.length; i++){

			var fila = document.createElement("div");
			fila.setAttribute("id","jugador_"+ arrPersonajes[i].id );
			fila.setAttribute("class","jugador");
			fila.setAttribute("onclick","getterPersonaje(this)");

			var nombre = document.createElement("h2");
			var texto = document.createTextNode("Nombre: "+arrPersonajes[i].nombre);
			nombre.appendChild(texto);
			nombre.setAttribute("id","nombreP"+ arrPersonajes[i].id );

			var numero = document.createElement("h2");
			var textonum = document.createTextNode("ID del Juego: "+arrPersonajes[i].id_juego);
			numero.appendChild(textonum);
			numero.setAttribute("id","idjuego"+ arrPersonajes[i].id );


			fila.appendChild(nombre);
			fila.appendChild(numero);


			capa.appendChild(fila);

		}

	}else{
		console.log("VAMOS MAL");
	}



}



function getterPersonaje(elemento){

	id = elemento.id;

	pos = id.indexOf("_");

	tam = id.length

	idjugador = id.substring(pos+1,tam);

	console.log(elemento.id)

	nombre = document.getElementById("nombreP" + idjugador).innerHTML;
		nombre = nombre.substring(nombre.indexOf(" ") + 1, nombre.length)
	idjuego = document.getElementById("idjuego" + idjugador).innerHTML;
		idjuego = idjuego.substring(idjuego.indexOf(":") + 1, idjuego.length)


	document.getElementById("idPersonaje").value = idjugador;
	document.getElementById("nombrePersonaje").value = nombre;
	document.getElementById("idJuego_Personaje").value = idjuego;

}

function insertarVideojuego(){

	var videojuego = {};

	var btnInsert = document.getElementById("btnInsert").value;
	videojuego.id = document.getElementById("idVideojuego").value;
	videojuego.nombre = document.getElementById("nombreVideojuego").value;
	videojuego.fecha_lanzamiento = document.getElementById("fechaVideojuego").value;
	videojuego.desarrollador = document.getElementById("desarrolloVideojuego").value;
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

			console.log(this.responseText)
			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("INSERTADO CORRECTAMENTE.");
btnInsert = document.getElementById("btnInsert").disabled=false;


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
	personaje.nombre = document.getElementById("nombrePersonaje").value;
	personaje.id = document.getElementById("idPersonaje").value;
	personaje.id_juego = document.getElementById("comparacionPersonaje").value;
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

			console.log(this.responseText)
			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("INSERTADO CORRECTAMENTE.");
btnInsert = document.getElementById("btnInsert").disabled=false;


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

function updateVideojuego(){

	var videojuego = {};

	var btnInsert = document.getElementById("btnInsert").value;
	videojuego.id = document.getElementById("idVideojuego").value;
	videojuego.nombre = document.getElementById("nombreVideojuego").value;
	videojuego.fecha_lanzamiento = document.getElementById("fechaVideojuego").value;
	videojuego.desarrollador = document.getElementById("desarrolloVideojuego").value;
	videojuego.plataforma = document.getElementById("plataformaVideojuego").value;
  btnInsert = document.getElementById("btnInsert").disabled=true;
	console.log(videojuego);

	var peticion = {};

	peticion.peticion = "update";
	peticion.videojuegoUpdate = videojuego;

	console.log(peticion);

	peticionJSON = JSON.stringify(peticion);

	console.log(peticionJSON);

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost/AD_UD3_A03_Cliente_JS/updateVideojuego.php");
	xmlhttp.setRequestHeader("Content-Type", "application/json");

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			console.log(this.responseText)
			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("ACTUALIZADO CORRECTAMENTE.");
btnInsert = document.getElementById("btnInsert").disabled=false;


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
function updatePersonaje(){
	var personaje = {};

	var btnInsert = document.getElementById("boton2").value;
	personaje.nombre = document.getElementById("nombrePersonaje").value;
	personaje.id = document.getElementById("idPersonaje").value;
	personaje.id_juego = document.getElementById("comparacionPersonaje").value;
  btnInsert = document.getElementById("boton2").disabled=true;
	console.log(personaje);

	var peticion = {};

	peticion.peticion = "update";
	peticion.personajeUpdate = personaje;

	console.log(peticion);

	peticionJSON = JSON.stringify(peticion);

	console.log(peticionJSON);

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost/AD_UD3_A03_Cliente_JS/updatePersonaje.php");
	xmlhttp.setRequestHeader("Content-Type", "application/json");

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			console.log(this.responseText)
			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("Actualizado CORRECTAMENTE.");
btnInsert = document.getElementById("btnInsert").disabled=false;


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
	videojuego.id = document.getElementById("idVideojuego").value;
	videojuego.nombre = document.getElementById("nombreVideojuego").value;
	videojuego.fecha_lanzamiento = document.getElementById("fechaVideojuego").value;
	videojuego.desarrollador = document.getElementById("desarrolloVideojuego").value;
	videojuego.plataforma = document.getElementById("plataformaVideojuego").value;
  btnDelete = document.getElementById("btnDelete").disabled=true;
	console.log(videojuego);

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

		console.log(this.responseText)
			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("Borrado CORRECTAMENTE. "  );
				btnDelete = document.getElementById("btnDelete").disabled=false;


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


/// borrar personajes

function borrarPersonaje(){

	var personaje = {};

	var btnDelete = document.getElementById("boton3").value;
	personaje.nombre = document.getElementById("nombrePersonaje").value;
	personaje.id = document.getElementById("idPersonaje").value;
	personaje.id_juego = document.getElementById("comparacionPersonaje").value;
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

		console.log(this.responseText)
			var respuestaJSON = JSON.parse(this.responseText);

			if(respuestaJSON["estado"] == "ok"){

				alert("Borrado CORRECTAMENTE. "  );
				btnDelete = document.getElementById("boton3").disabled=false;


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
