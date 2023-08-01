import { io } from "./http";

io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);
});
