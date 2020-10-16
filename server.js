const app = require("./src/app");

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log("O servidor esta rodando na porta " + PORT);
})
