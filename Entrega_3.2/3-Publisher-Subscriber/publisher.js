const amqp = require('amqplib/callback_api');

class Publisher {
    constructor(cua, servidor){
        this.cua = cua;
        this.servidor = servidor;

    }

    enviarMissatge(message)  {
        amqp.connect(this.servidor, (error0, connexio)  =>{
            if (error0) {
                throw error0;
            }
            connexio.createChannel((error1, canal) => {
                if (error1) {
                    throw error1;
                }

                // let cua = 'hola';

                canal.assertQueue(this.cua, {
                    durable: false
                });

                canal.sendToQueue(this.cua, Buffer.from(message));
                console.log(`SERVER > Sent > ${message}`);

            });

            setTimeout(function() {
                connexio.close();
                process.exit(0)
            }, 500);
        });
    };
};


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

module.exports = Publisher;