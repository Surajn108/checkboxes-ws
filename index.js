import http from "node:http";
import path from "node:path";

import express from "express";
import { Server } from "socket.io";
import { Socket } from "node:dgram";

const PORT = Number(process.env.PORT ?? 8000);


async function main() {

    const app = express();
    const server = http.createServer(app);
    const io = new Server();

    io.attach(server);
    io.on('connection' , (Socket)=>{
        console.log(`Socket initializes` , {id :Socket.id});

        Socket.on('client:checkbox:change' , (data)=>{
            console.log(`Socket : ${Socket.id}:client:checkbox:change` , data);
        })
    })

    app.use(express.static(path.resolve('./public')));
    app.get('/health', (req , res)=>{
        res.json({Healthy:true}); 
    })

    server.listen(PORT, () => {
        console.log(`HTTP server is running on PORT ${PORT}`);
      }); 
};

main();