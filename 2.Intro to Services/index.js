import userService from "./Services/user.service.js";
import emailService from "./Services/email.service.js";
import authService from "./Services/auth.service.js";

async function startApp(){
    //Start the broker service
    await userService.start();
    await emailService.start();
    await authService.start();

    try {
        //User Service
       const newUser= await userService.call("user.createUser",{
        name:"charu sharma",
        email:"a@gmail.com",
       });
       console.log("New User Created",newUser);
       const users= await userService.call("user.getUsers");
       console.log("All the users:",users);

       //Email Service
       const emailResult=await emailService.call("email.sendEmail",{
           recipient:newUser.email,
           subject:"Welcome to our platform",
           message:"Thankyou for signing up !",
       })
       console.log("Email sent!",emailResult);

       //Auth Service
       const authResult=await authService.call("auth.authUser",{
        // name:newUser.name,
        name:"admin",
        password:"admin",
       });
       console.log("Authentication Result:",authResult);
    } catch (error) {
        return console.log("Error",error);
    }
    finally{
        await userService.stop();
        await emailService.stop();
        await authService.stop();
    }
}
startApp();
