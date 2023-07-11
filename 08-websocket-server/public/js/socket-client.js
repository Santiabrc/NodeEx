const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const socketClient = io();

socketClient.on('connect', () =>{
    console.log('conectado')

    lblOffline.style.display = 'none';
    lblOnline.style.display = ''; 
});

socketClient.on('disconnect', () =>{
    console.log('Desconectado del servidor')

    lblOffline.style.display = '';
    lblOnline.style.display = 'none'; 
});