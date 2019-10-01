const { io } = require('../server')


io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Welcome to this application'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);


        client.broadcast.emit('enviarMensaje', data);


        //  if (mensaje.usuario) {
        //    callback({
        //      answer: 'TODO SALIO BIEN!'
        //  });
        // } else {
        //    callback({
        //        answer: 'TODO SALIO MAL!!!!!'
        //   });
        //
        //       }
    });

});