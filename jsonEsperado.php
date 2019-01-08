<?php

/*  Formato JSON esperado */

$arrEsperado = array();
$arrJugadorEsperado = array();

$arrEsperado["peticion"] = "add";
$arrEsperado["peticion"] = "del";

$arrJugadorEsperado["nombre"] = "Lorenzo (Un string)";
$arrJugadorEsperado["equipo"] = "2 (Un int)";
$arrJugadorEsperado["numero"] = "2 (Un int)";

$arrEsperado["jugadorAnnadir"] = $arrJugadorEsperado;
$arrEsperado["jugadorBorrar"] = $arrJugadorEsperado;


/* Funcion para comprobar si el recibido es igual al esperado */

function JSONCorrectoAnnadir($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["jugadorAnnadir"])){

		$auxJugador = $recibido["jugadorAnnadir"];
		if(isset($auxJugador["nombre"]) && isset($auxJugador["equipo"]) && isset($auxJugador["numero"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}

function JSONCorrectoBorrar($recibido){

	$auxCorrecto = false;

	if(isset($recibido["peticion"]) && $recibido["peticion"] ="del" && isset($recibido["jugadorBorrar"])){

		$auxJugador = $recibido["jugadorBorrar"];
		if(isset($auxJugador["nombre"]) && isset($auxJugador["equipo"]) && isset($auxJugador["numero"])){
			$auxCorrecto = true;
		}

	}


	return $auxCorrecto;

}
