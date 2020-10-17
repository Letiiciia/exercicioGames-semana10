const games = require("../model/games.json");

//PUT change Name
function upDateNameWithPut (request, response){
    const getBody = request.body;
    const id = parseInt(request.params.id);

    const search = games.map(game => game.id);
    const foundObject = search.indexOf(id)
    const showEverything = {id, ...getBody};

    games.splice(foundObject, 1, getBody);

    response.status(200).send(showEverything);

  
}

 //PATCH change Name
 function upDateNameWithPatch (request, response){
 const getBody = request.body;
 const id = parseInt(request.params.id);
 
 const search = games.find(game => game.id === id);

 for(key in getBody){
     search[key] = getBody[key];
 }

 response.status(200).send(search);

 }



// PUT change Company
function upDateCompanyWithPut (request, response){
const getBody = request.body;
const id = parseInt(request.parms.id);

const search = games.map(game => game.id === id);
const foundObject = search.indexOf(id);
const showEverything = {id, ...getBody};

games.splice(foundObject, 1, showEverything);

response.status(200).send(showEverything);


}


// PATCH change Company
function upDateCompanyWithPatch (request, response){
const getBody = request.body;
const id = parseInt(request.params.id);

const search = games.map(game =>game.id === id);

for(key in getBody){
    upDate[key] = getBody[key];

    response.status(200).send(search);
}

}


module.exports = {
    upDateNameWithPut,
    upDateNameWithPatch,
    upDateCompanyWithPut,
    upDateCompanyWithPatch
    
}