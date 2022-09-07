// Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber.
// Mostra l'emissió i recepció de cada missatge en consoles diferents.

// https://www.netmentor.es/entrada/patron-productor-consumidor
// https://morioh.com/p/8bc4fb039a9a
// https://stackfull.dev/design-patterns-in-javascript-publish-subscribe-or-pubsub-1


// ==> npm install amqplib


// https://www.youtube.com/watch?v=jmxsswls0jk&t=259s
//! https://jackfiallos.com/comunicando-microservicios-en-nodejs-usando-rabbitmq-y-amqplib

const amqp = require('amqplib/callback_api');

 

// amqp.connect('amqp://localhost', function(error, connection) {
// });
// stdout

const Publisher = require('./publisher.js');
const Subscriber = require ('./subscriber.js');

const publisher = new Publisher("PEPITO", "amqp://localhost")
publisher.enviarMissatge("Enviant un missatge");
// setTimeout(() => publisher.enviarMissatge("de"), 600);
// setTimeout(() => publisher.enviarMissatge("Kiwi"), 800);

const subscriber = new Subscriber("JUANITO", "amqp://localhost");
console.log(subscriber.cua)
subscriber.rebreMissatge();