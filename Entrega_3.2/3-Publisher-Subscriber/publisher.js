// Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber.
// Mostra l'emissió i recepció de cada missatge en consoles diferents.

// https://www.netmentor.es/entrada/patron-productor-consumidor
// https://morioh.com/p/8bc4fb039a9a
// https://stackfull.dev/design-patterns-in-javascript-publish-subscribe-or-pubsub-1


// ==> npm install amqplib


// https://www.youtube.com/watch?v=jmxsswls0jk&t=259s
//! https://jackfiallos.com/comunicando-microservicios-en-nodejs-usando-rabbitmq-y-amqplib


const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (error0, connexio) => {
    if (error0) {
        throw error0;
    }
    connexio.createChannel((error1, canal) => {
        if (error1) {
            throw error1;
        }

        const cua = "PEPITO";
        const message = `Hola! \nAquest és el primer missatge de ${cua}`;

        canal.assertQueue(cua, {
            durable: false
        });

        canal.sendToQueue(cua, Buffer.from(message));
        console.log(`SERVER > Sent > ${message}`);

    });

    setTimeout(function () {
        connexio.close();
        process.exit(0)
    }, 500);
});



/* publisher = new Publisher("PEPITO", "amqp://localhost")
publisher.enviarMissatge("Holi");
setTimeout(() => publisher.enviarMissatge("de"));
setTimeout(() => publisher.enviarMissatge("Kiwi")); */



//     enviarMissatge(message)  {
//         amqp.connect('amqp:localhost', function(error) {
//             if (error) {
//                 throw error;
//             }
//             connection.createChannel(function (error, canal) {
//                 if (error) {
//                     throw error;
//                 }

//                 // let cua = 'hola';

//                 canal.assertQueue(this.cua, {
//                     durable: false
//                 });

//                 canal.sendToQueue(this.cua, Buffer.from(message));
//                 console.log(`SERVER > Sent > ${msg}`);

//             });
//         });
//     };
// };

// module.exports = Publisher;