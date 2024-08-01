import { ServiceBroker } from "moleculer";

const authService=new ServiceBroker();

authService.createService({
    name:"auth",
    actions:{
        async authUser(ctx){
            const{name,password}=ctx.params;

            if(name=="admin" && password=="admin"){
                return {
                   message:"Login Successfull",
                   status: "success",
                }
            }else{
                return {
                    message:"Login Failed",
                    status: "failure",
                 } }
            }

        }
});

export default authService;
