const express = require("express");
const { findAllGames, findOneGame } = require("../db/Jogo");
const { prisma } = require("../db/prisma");
const router = express.Router();

router.get("/jogos", async (req, res) => {
    const jogos = await findAllGames();
    res.json(jogos);
})

router.get("/jogo/:id", async (req, res) => {
    try {
        const id = Number(req.params.id)
        const jogo = await findOneGame(id);
        res.json(jogo);
        res.status(204);
    } catch (error) {
        res.status(404).json({ message: "Jogo inexistente" });
    }
})

module.exports = {
    router
}


