import { ServiceBroker } from "moleculer";

const emailService=new ServiceBroker();

emailService.createService({
    name:"email",
    actions:{
       async sendEmail(ctx){
        const {recipient,subject,message}=ctx.params;
        console.log(`Email sent to:${recipient} with subject ${subject}`);
        console.log(`Email message:${message}`);
        return `Email sent to ${recipient}`;
       }
       
    },
});

export default emailService;