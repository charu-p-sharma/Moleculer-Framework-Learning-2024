import { ServiceBroker } from "moleculer";

const broker=new ServiceBroker();

//Greeting Service Broker
broker.createService({
    name:"greeter",
    actions: {
        sayHello(ctx) {
            return `Hello ${ctx.params.name}`;
        }
    }
});

async function startApp(){
    await broker.start();
    const res=await broker.call("greeter.sayHello",{name:"Charu"});
    console.log(res);
    broker.stop();
}

startApp();
