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

		$auxJugador = $recibido["personajeAnnadir"];
		if(isset($auxJugador["nombre"]) && isset($auxJugador["id"]) && isset($auxJugador["id_juego"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}

function JSONCorrectoBorrar($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="del" && isset($recibido["personajeBorrar"])){

		$auxJugador = $recibido["personajeBorrar"];
		if(isset($auxJugador["nombre"]) && isset($auxJugador["id"]) && isset($auxJugador["id_juego"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}


/* esto son las funciones de tabla videojuegos */

function JSON2CorrectoAnnadir($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["videojuegoAnnadir"])){

		$auxJugador = $recibido["videojuegoAnnadir"];
		if(isset($auxJugador["ID"]) && isset($auxJugador["Nombre"]) && isset($auxJugador["Fecha_Lanzamiento"]) && isset($auxJugador["Desarrollador"]) && isset($auxJugador["Plataforma"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}

function JSON2CorrectoBorrar($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="del" && isset($recibido["videojuegoBorrar"])){

		$auxJugador = $recibido["videojuegoBorrar"];
		if(isset($auxJugador["ID"]) && isset($auxJugador["Nombre"]) && isset($auxJugador["Fecha_Lanzamiento"]) && isset($auxJugador["Desarrollador"]) && isset($auxJugador["Plataforma"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}


?>
