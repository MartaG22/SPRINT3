const amqp = require('amqplib/callback_api');

class Subscriber {
    consturctor(cua,servidor) {
        this.cua = cua;
        this.servidor = servidor;

    };

    rebreMissatge() {
        amqp.connect(this.servidor, (error0, connexio) => {
            if (error0) {
                throw error0;
            }

            connexio.createChannel((error1, canal) => {
                if (error1) {
                    throw error1;
                };
                canal.assertQueue(this.cua, {
                    durable: false
                });

                console.log(`CLIENT > Rebent missatge del Publisher => ${this.cua}`);

                canal.consume(this.cua, (missatge) => {
                    console.log(this.cua)
                    console.log (`CLIENT > Rebut missatge => ${missatge.content.toString()}`);
                })
            })
        })
    }
};

module.exports = Subscriber;