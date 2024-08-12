import express from 'express';
import { Server } from 'socket.io';
import {createServer} from 'http';
import cors from 'cors';

const app = express();
const server = createServer(app);

const PORT = 4000;

const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        credentials:true,
    }
});

app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST"],
    credentials:true,
}));


app.get('/',(req,res)=>{
    res.send("Hello World");
})

io.on("connection",(socket)=>{
    console.log("User Connected");
    console.log("Id",socket.id);
    socket.emit("welcome","Welcome to the server");
})

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
}) 
