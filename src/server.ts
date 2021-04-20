import express from "express";


const app = express();


/**
 * GET = Buscas 
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATH = Alterar uma informação especifica
 */

app.get("/", (request, response)  => {
    return response.json({
        message: "Ola NLW 05",
    })
})

app.post("/", (request, response) => {
    return response.json({
         message: "Usuario salvo com sucesso !"});
})


app.listen(4545, () => console.log("Server is running on port 4545"));  