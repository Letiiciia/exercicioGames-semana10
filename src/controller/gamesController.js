const games = require("../model/games.json");


function atualizaNamePorId (request, response){
    const nameGameAtualizar = request.body;
    const id = parseInt(request.params.id);
console.log(nameGameAtualizar)
    const gamesId = games.map(game => game.id === id);
    const identificaId = gamesId.indexOf(id)
    const atualizaGameComId = {id, ...nameGameAtualizar};

    games.splice(identificaId, 1, atualizaGameComId);

    response.status(200).send(games.find(game => game.id === id));

  
}











module.exports = {
    atualizaNamePorId
}