const app = express()
const httpServer = http.Server(app)
const io = new socketIo.Server(httpServer, {cors: {origin: "*"}})

const PORT = process.env.PORT ?? 8080

io.on("connection", (socket) => {

    // createLobbyHandler(socket)

    console.log("New client connected");
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

httpServer.listen(PORT, () => {
    console.log(`server ${PORT}`);
})