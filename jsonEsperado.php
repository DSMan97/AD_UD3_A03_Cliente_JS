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

$arrVideojuegoEsperado["id"]="";
$arrVideojuegoEsperado["nombre"]="";
$arrVideojuegoEsperado["fecha_lanzamiento"]="";
$arrVideojuegoEsperado["desarrollador"]="";
$arrVideojuegoEsperado["plataforma"]="";


$arrEsperado["personajeAnnadir"] = $arrPersonajeEsperado;
$arrEsperado["personajeUpdate"] = $arrPersonajeEsperado;
$arrEsperado["personajeBorrar"] = $arrPersonajeEsperado;

$arrEsperado["videojuegoAnnadir"] = $arrVideojuegoEsperado;
$arrEsperado["videojuegoUpdate"] = $arrVideojuegoEsperado;
$arrEsperado["videojuegoBorrar"] = $arrVideojuegoEsperado;


/* Funcion para comprobar si el recibido es igual al esperado */

function JSONCorrectoAnnadir($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["personajeAnnadir"])){

		$auxPersonaje = $recibido["personajeAnnadir"];
		if(isset($auxPersonaje["id"]) && isset($auxPersonaje["nombre"]) && isset($auxPersonaje["id_juego"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}

function JSONCorrectoUpdate($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["personajeUpdate"])){

		$auxPersonaje = $recibido["personajeUpdate"];
		if(isset($auxPersonaje["id"]) && isset($auxPersonaje["nombre"]) && isset($auxPersonaje["id_juego"])){
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
		if(isset($auxVideojuego["id"]) && isset($auxVideojuego["nombre"]) && isset($auxVideojuego["fecha_lanzamiento"]) && isset($auxVideojuego["desarrollador"]) && isset($auxVideojuego["plataforma"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}

function JSON2CorrectoUpdate($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="update" && isset($recibido["videojuegoUpdate"])){

		$auxVideojuego = $recibido["videojuegoUpdate"];
		if(isset($auxVideojuego["id"]) && isset($auxVideojuego["nombre"]) && isset($auxVideojuego["fecha_lanzamiento"]) && isset($auxVideojuego["desarrollador"]) && isset($auxVideojuego["plataforma"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}

function JSON2CorrectoBorrar($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="del" && isset($recibido["videojuegoBorrar"])){

		$auxVideojuego = $recibido["videojuegoBorrar"];
		if(isset($auxVideojuego["id"]) && isset($auxVideojuego["nombre"]) && isset($auxVideojuego["fecha_lanzamiento"]) && isset($auxVideojuego["desarrollador"]) && isset($auxVideojuego["plataforma"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}


?>
