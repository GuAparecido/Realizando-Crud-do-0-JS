const { prisma } = require("./prisma");

const findAllGames = async () => {
    const games = await prisma.jogos.findMany({
    })
    return games;
}

const findOneGame = async (id) => {
    const game = await prisma.jogos.findFirst({
        where: {
            id
        }
    })
    return game;
}

module.exports = {
    findAllGames,
    findOneGame
}