// Declaracion de variables | Objetos | Array:
const precioEntrada = 500;
const itemsDisponibles = ["Pochoclos", "Chocolate", "Gaseosa", "Agua"];
const cartelera = ["JURASSIC PARK", "ROCKY", "TITANIC"];
const respSaludar = document.getElementById("respuestaSaludar");
const respPeliculas = document.getElementById("respuestaPelicula");
const respAsientos = document.getElementById("respuestaAsientos");
const respCandy = document.getElementById("respuestaCandy");
const respAzar = document.getElementById("azar");

let pelicula, asientos;
let frase1, frase2, frase3, frase4;

// Funciones:
function valor(a, b) {
	frase2 = "Cantidad de entradas: " + b + ". Valor total: <strong>$" + a * b + "</strong>.";
	respAsientos.innerHTML = frase2;
}

function saludar() {
	let saludo = prompt("Bienvenido/a a Cine+. Como te llamas?").toUpperCase();
	if (saludo === "") {
		alert("Debe ingresar un nombre para continuar con la reserva.");
		return; // return interrumpe la ejecucion
	} else {
		const mensaje = "¡Hola <strong>" + saludo + "</strong>! Puedes seleccionar una película de nuestro catálogo." + "<br>" + "(Si no sabes cual elegir, podes probar suerte 🍀)";
		respSaludar.innerHTML = mensaje;
	}
}

function comprarEntradas() {
	let pelicula = prompt("Selecciona la pelicula: Jurassic Park | Rocky | titanic").toUpperCase();
	const respPeliculas = document.getElementById("respuestaPelicula");

	if (pelicula === "JURASSIC PARK" || pelicula === "ROCKY" || pelicula === "TITANIC") {
		frase1 = "La pelicula seleccionada es: <strong>" + pelicula + "</strong>.";
		respPeliculas.innerHTML = frase1;
	} else {
		alert("¡Comando Incorrecto!");
		return;
	}

	asientos = Number(prompt("Cantidad de asientos: (valor: $500 c/u)"));
	valor(precioEntrada, asientos);
}

function seleccionarAlimento() {
	let carrito = [];

	let i = 0;
	while (i < itemsDisponibles.length) {
		let seleccion = confirm(
			"¿Deseas agregar a la reserva " +
				itemsDisponibles[i] +
				" para acompañar la pelicula?"
		);

		if (seleccion) {
			carrito.push(itemsDisponibles[i]);
		}

		i+=1;
	}

	frase3 = "Reserva: <br>" + carrito.join(" + ") + ". (Podes abonar y retirar por el candy hasta 5 min antes de la pelicula).";
	respCandy.innerHTML = frase3;
}

function probarSuerte() {
	const indice = Math.floor(Math.random() * cartelera.length);
	const peliculaAzar = cartelera[indice];
	
	frase4 = "La pelicula seleccionada es: <strong>" + peliculaAzar + "</strong>.";
	respAzar.innerHTML = frase4;

	asientos = Number(prompt("Cantidad de asientos: (valor: $500 c/u)"));
	valor(precioEntrada, asientos);
}

//  Ejecucion
saludar();

let boton1 = document.getElementById("seleccionar");
boton1.onclick = comprarEntradas;

let boton2 = document.getElementById("seleccionarCandy");
boton2.onclick = seleccionarAlimento;

let boton3 = document.getElementById("azar");
boton3.onclick = probarSuerte;