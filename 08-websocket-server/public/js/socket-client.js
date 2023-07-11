const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socketClient = io();

socketClient.on('connect', () =>{
    console.log('conectado')

    lblOffline.style.display = 'none';
    lblOnline.style.display = ''; 
});

socketClient.on('disconnect', () =>{
    //console.log('Desconectado del servidor')

    lblOffline.style.display = '';
    lblOnline.style.display = 'none'; 
});

btnEnviar.addEventListener('click', () =>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }

    socketClient.emit('enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id );
    });
});