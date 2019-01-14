<?php

/*  Formato JSON esperado */

$arrEsperado = array();
$arrPersonajeEsperado = array();
$arrVideojuegoEsperado = array();

$arrEsperado["peticion"] = "add";
$arrEsperado["peticion"] = "del";

$arrPersonajeEsperado["nombre"] = "Lorenzo (Un string)";
$arrPersonajeEsperado["id"] = "2 (Un int)";
$arrPersonajeEsperado["id_juego"] = "2 (Un int)";

$arrVideojuegoEsperado["ID"]="2";
$arrVideojuegoEsperado["Nombre"]="Monster Hunter:World";
$arrVideojuegoEsperado["Fecha_Lanzamiento"]="26/1/2018";
$arrVideojuegoEsperado["Desarrollador"]="Capcom";
$arrVideojuegoEsperado["Plataforma"]="Ps4/Xbox360/PC";


$arrEsperado["personajeAnnadir"] = $arrPersonajeEsperado;
$arrEsperado["personajeBorrar"] = $arrPersonajeEsperado;

$arrEsperado["videojuegoAnnadir"] = $arrVideojuegoEsperado;
$arrEsperado["videojuegoBorrar"] = $arrVideojuegoEsperado;


/* Funcion para comprobar si el recibido es igual al esperado */

function JSONCorrectoAnnadir($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["personajeAnnadir"])){

		$auxPersonaje = $recibido["personajeAnnadir"];
		if(isset($auxPersonaje["nombre"]) && isset($auxPersonaje["id"]) && isset($auxPersonaje["id_juego"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}

function JSONCorrectoBorrar($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="del" && isset($recibido["personajeBorrar"])){

		$auxPersonaje = $recibido["personajeBorrar"];
		if(isset($auxPersonaje["nombre"]) && isset($auxPersonaje["id"]) && isset($auxPersonaje["id_juego"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}


/* esto son las funciones de tabla videojuegos */

function JSON2CorrectoAnnadir($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["videojuegoAnnadir"])){

		$auxVideojuego = $recibido["videojuegoAnnadir"];
		if(isset($auxVideojuego["ID"]) && isset($auxVideojuego["Nombre"]) && isset($auxVideojuego["Fecha_Lanzamiento"]) && isset($auxVideojuego["Desarrollador"]) && isset($auxVideojuego["Plataforma"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}

function JSON2CorrectoBorrar($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="del" && isset($recibido["videojuegoBorrar"])){

		$auxVideojuego = $recibido["videojuegoBorrar"];
		if(isset($auxVideojuego["ID"]) && isset($auxVideojuego["Nombre"]) && isset($auxVideojuego["Fecha_Lanzamiento"]) && isset($auxVideojuego["Desarrollador"]) && isset($auxVideojuego["Plataforma"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}


?>
