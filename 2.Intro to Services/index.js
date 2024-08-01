import broker from "./Services/user.service.js";

async function startApp(){
    //Start the broker service
    await broker.start();

    try {
       const newUser= await broker.call("user.createUser",{
        name:"charu sharma",
        email:"a@gmail.com",
       });
       console.log("New User Created",newUser);
       const users= await broker.call("user.getUsers");
       console.log("All the users:",users);
    } catch (error) {
        return console.log("Error",error);
    }
    finally{
        await broker.stop();
    }
}
startApp();