var radius = Number(prompt('Escribe el border-radius del 1 al 100 🔲'));

var image = document.getElementById('image');
var message = document.getElementById('message');
var valor = Number(document.getElementById('valor').innerText);

image.style.borderRadius = `${radius}%`;

var counter = 0;

var add = document.querySelector('#add').addEventListener('click', function () {
	counter = counter + 1;
	// counter += 1;
	counter++;

	message.innerText = `Has hecho click ${counter} veces \n
    Y has gastado ${counter * valor}
    `;
});
