import { ServiceBroker } from "moleculer";
const broker=new ServiceBroker();

function generateId(){
    return Math.floor(Math.random()*1000);
}
const users=[];

broker.createService({
    name:"user",
    actions:{
        async createUser(ctx){
            const {name,email}=ctx.params;
            const newUser={id:generateId(),name:name,email:email};
            users.push(newUser);
            return newUser;
        },
        async getUsers(ctx){
            return users;
        },
    },
});

export default broker;