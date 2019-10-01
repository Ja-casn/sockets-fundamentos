var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
});


//  (on) escuchar informacion
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');
});


// emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jose',
    mensaje: 'Good game well played'
}, function(answer) {
    console.log('Respuesta server:', answer);
});


// Escuchar información
socket.on('enviarMensaje', function(respuesta) {

    console.log('Servidor:', respuesta);
});