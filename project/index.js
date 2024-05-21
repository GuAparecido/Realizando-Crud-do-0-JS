const express = require("express");

const server = express();

server.use(express.json())

const { router: routerGame } = require("./routes/Jogo");

server.use("/api", routerGame);

const port = 8080;

server.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
});

server.get("/health", (req, res) => {
    res.json({ message: "Server rodando!" })
})
