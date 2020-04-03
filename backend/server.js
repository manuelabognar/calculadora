// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var cors = require("cors")
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Servidor rodando na porta ${HTTP_PORT}`)
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({ "message": "Online" })
});


//Lista todos os alunos
app.get("/api/alunos", (req, res, next) => {

    var sql = "select * from alunos"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

//Cria um aluno
app.post("/api/alunos", (req, res, next) => {
    var errors = []
    if (!req.body.notaUm) {
        errors.push("nota um não especificada");
    }
    if (!req.body.notaDois) {
        errors.push("nota dois não especificada");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    var data = {
        nome: req.body.nome,
        notaUm: req.body.notaUm,
        notaDois: req.body.notaDois,
    }
    

    var sql = 'INSERT INTO alunos (nome, notaUm, notaDois) VALUES (?,?,?)'
    var params = [data.nome, data.notaUm, data.notaDois]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        data.id = this.lastID;
        res.json({
            "message": "success",
            "data": data,
        })
    });
})


//Remove um aluno
app.delete("/api/alunos/:id", (req, res, next) => {
    db.run(
        'DELETE FROM alunos WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.json({ "message": "deleted", changes: this.changes })
        });
})




app.use(function (req, res) {
    res.status(404).json({"message": "url não encontrada"});
});
