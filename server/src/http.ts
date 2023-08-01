import express from "express";
import http from "http";
import { Server } from "socket.io";
import router from "./routes";
import cors from "cors";

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(cors());
app.use(router);

export { serverHttp, io };
