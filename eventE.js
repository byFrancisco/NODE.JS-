//utilizamos la libreria EventEmitter Object
//funciona para la terminal 
//con node.js
var events = require('events');
var EventEmitter = new events.EventEmitter();

//creamos un evento handler
var myEventHandler = function(){
    console.log('configurandolo con la terminal');
}
//asignamos el evento handler a un event
EventEmitter.on('scream', myEventHandler);

//fire the scream event
EventEmitter.emit('scream');
