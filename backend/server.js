const app = require("./app");
const connectDatabase = require('./db/Database')
process.on("uncaughtException", (err)=>{
    console.log(`error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
});

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path : "backend/config/.env",
    });
};
connectDatabase();

const server = app.listen(process.env.PORT, () =>{
    console.log(
        `Server is running on http://localhost:${process.env.PORT}`
    );
});
process.on("unhandledRejection", (err) =>{
    console.error(`Unhandled Rejection: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");

    server.close(()=> {
        process.exit(1);
    });
});