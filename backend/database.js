var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome text UNIQUE, 
            notaUm real, 
            notaDois real, 
            CONSTRAINT nome_unique UNIQUE (nome)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO alunos (nome, notaUm, notaDois) VALUES (?,?,?)'
                db.run(insert, ["Marie Skłodowska Curie",10,10])
                db.run(insert, ["Zaphod Beeblebrox",7,6])
                db.run(insert, ["João da Silva Sauro",1,1])
                db.run(insert, ["Mark Elliot Zuckerberg",9.9,10])
                db.run(insert, ["Internet Explorer",0,0])
                db.run(insert, ["Agente Smith",2,1])
                db.run(insert, ["Zé das couves",5,5])
                db.run(insert, ["Alan Mathison Turing",10,10])
            }
        });  
    }
});


module.exports = db
