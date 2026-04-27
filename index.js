import http from "node:http";
//import path from "node:path";
import express from "express";
//import { Server } from "socket.io";

const PORT = Number(process.env.PORT ?? 8000);


async function main() {
    const app = express();

    const server = http.createServer(app);

    app.get('/health', (req , res)=>{
        res.json({Healthy:true});
    })

    server.listen(PORT, () => {
        console.log(`HTTP server is running on PORT ${PORT}`);
      }); 
};

main();