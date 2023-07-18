import express from "express";
import http from "http";
import { Server } from "socket.io";
import router from "./routes";

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp);

app.use(express.json());
app.use(router);

export { serverHttp, io };
