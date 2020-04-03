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
                db.run(insert, ["Manu",10,10])
                db.run(insert, ["Patrick",8,7])
                db.run(insert, ["João",5,5])
                db.run(insert, ["Maria",9,9])
            }
        });  
    }
});


module.exports = db
