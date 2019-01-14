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

function mostrarPersonaje(){

	var capa = document.getElementById("principal");

	borraHijos(capa);

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			pintaTabla(this.responseText);
		}else{
			console.log(this.readyState + " " + this.status);
		}
	};

	xhttp.open("GET", "http://localhost/AD_UD3_A03_Cliente_JS/leeJugadores.php", true);
	xhttp.send();


}

function pintaTabla(respuesta){

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
			var textonum = document.createTextNode(arrPersonajes[i].numero);
			numero.appendChild(textonum);
			numero.setAttribute("id","numerojugador_"+ arrPersonajes[i].id );

			var equipo = document.createElement("h2");
			var textoequipo = document.createTextNode(arrPersonajes[i].equipo);
			equipo.appendChild(textoequipo);
			equipo.setAttribute("id","equipojugador_"+ arrPersonajes[i].id );

			fila.appendChild(nombre);
			fila.appendChild(numero);
			fila.appendChild(equipo);


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

function insertarColega(){
//Insertar Videojuego
	var videojuego = {};

	var btnInsert = document.getElementById("btnInsert").value;
	videojuego.nombre = document.getElementById("nombre").value;
	videojuego.numero = document.getElementById("id").value;
	videojuego.fecha = document.getElementById("fecha").value;
	videojuego.desarrollador = document.getElementById("desarrollador").value;
	videojuego.plataforma = document.getElementById("plataforma").value;
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

function borrarColega(){

	var jugador = {};

	var btnDelete = document.getElementById("btnDelete").value;
	jugador.nombre = document.getElementById("nombreColega").value;
	jugador.numero = document.getElementById("numeroColega").value;
	jugador.equipo = document.getElementById("equipoColega").value;
  btnDelete = document.getElementById("btnDelete").disabled=true;
	console.log(jugador);

	var peticion = {};

	peticion.peticion = "del";
	peticion.jugadorBorrar = jugador;

	console.log(peticion);

	peticionJSON = JSON.stringify(peticion);

	console.log(peticionJSON);

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost/AD_UD3_A03_Cliente_JS/borrarJugador.php");
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
