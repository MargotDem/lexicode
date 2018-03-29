// import CONFIG from './config.js'

const express = require('express')

const app = express()
const port = 5002

var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'lexicodeUser',
  password: 'TakeCodeNotes13',
  database: 'lexicode'
})

app.get('/api/entries', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  con.connect(function (err) {
    // getting rid of this makes the disturbing error disappear ha ha ha what is life
    // if (err) throw err
    con.query('SELECT * FROM entries ORDER BY name', function (err, result) {
      if (err) throw err
      console.log(result)
      res.send(result)
    })
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
