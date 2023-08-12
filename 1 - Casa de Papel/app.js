const capitales = ["Tokio", "Berlín", "Moscú", "Nairobi"];
let capitalUsuario = prompt("Por favor digite un nombre");

if (validadarCapital4(capitalUsuario)) {
	document.write("La ciudad ha sido elegida por El Profesor para el nombre de sus atracadores");
} else {
	document.write("La ciudad NO ha sido elegida");
};

// Casa de Papel con if

function validadarCapital1(capitalUsuario) {
	let encontrado = false;
	if (capitalUsuario == "Tokio" ||
		capitalUsuario == "Moscú" ||
		capitalUsuario == "Berlín" ||
		capitalUsuario == "Nairobi")
		encontrado = true;
	return encontrado;
}

// Casa de Papel con switch

function validadarCapital2(capitalUsuario) {
	let encontrado = false;
	switch (capitalUsuario) {
		case "Tokio": encontrado = true; break;
		case "Moscú": encontrado = true; break;
		case "Berlín": encontrado = true; break;
		case "Nairobi": encontrado = true; break;
	}
	return encontrado;
};

// Casa de Papel con array

function validadarCapital3(capitalUsuario) {
	let encontrado = false;
	for (let i = 0; i < capitales.length; i++) {
		if (capitales[i] === capitalUsuario) encontrado = true;
	}
	return encontrado;
}

// Casa de Papel con funciones

function validadarCapital4(capitalUsuario){
	let encontrado = false;
	encontrado = capitales.find((cap) => cap === capitalUsuario);
	console.log(encontrado);
	return encontrado;
}

/* Querida Ada, nos estamos haciendo un lío con los nombres de los atracadores que no te imaginas.Necesitamos que crees un programa que, dada una capital indique si se trata de uno de los nombres elegidos por El Profesor para alguno de los miembros de su equipo o no.
Necesitamos tenerlo para el sábado… ¡hay demasiados rehenes en juego! */
