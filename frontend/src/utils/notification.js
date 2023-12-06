import socketIO from "socket.io-client";
const socketId = socketIO("http://localhost:4000/", {
  transports: ["websocket"],
});

export const addUser = (userId) => {
  socketId.emit("addUser", userId);
};

export const sendNotification = ({ user, message }) => {
  socketId.emit("sendMessage", {
    senderId: user._id,
    receiverId: "655e1c699964f3d67de3f423",
    data: { message, user: user, date: new Date() },
  });
};

export const getSocket = () => {
  return socketId;
};
