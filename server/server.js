const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'test5'
})

//Register

app.post('/signup', (req, res) => {
    const sql = 'INSERT INTO user(name, email, password) VALUES (?, ?, ?)';
    const values = [
      req.body.name,
      req.body.email,
      req.body.password
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
      return res.status(200).json({ message: 'Cadastro realizado com sucesso' });
    });
  });

//Login

app.post('/signin', (req, res)=>{
    const { email, password } = req.body;
    const values = [email, password]
    
    if(email && password){
        db.query('SELECT * FROM user WHERE email = ? AND password = ?', values, function(error, result, fields){
            if (error) throw error

            if (result.length > 0){
                console.log('tudo certo')
                return res.json ("Success")
            }
            else {
				console.log('erro ao fazer o login')
                return res.json ("Failed")
            }
        } )
    }else {
		console.log('erro no login')
	}
})


const port = 3300
app.listen(port, ()=>{
    console.log(`Server iniciado na porta ${port}`)
})
