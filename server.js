// import CONFIG from './config.js'
const bodyParser = require('body-parser')

const express = require('express')

const app = express()

const port = 5002

app.use(bodyParser.json())

app.listen(port, () => console.log(`Listening on port ${port}`))

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
    // edit fri 30/03 weirdd today the request wouldnt work and then i uncommented this
    // and then it worked and then i recommented it and it still works and is this linked
    // or not at all wth
    // if (err) throw err
    con.query('SELECT * FROM entries ORDER BY name', function (err, result) {
      if (err) throw err
      res.send(result)
    })
  })
})

app.get('/api/entries/:entry', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')

  let sql = 'SELECT * FROM entries WHERE id = ' + req.param('entry')
  con.connect(function (err) {
    // if (err) throw err
    con.query(sql, function (err, result) {
      if (err) throw err
      res.send(result)
    })
  })
})

app.delete('/api/entries/:entry', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')

  let entryToDelete = req.param('entry')
  let sql = 'DELETE FROM entries WHERE id = ' + entryToDelete
  con.connect(function (err) {
    // if (err) throw err
    con.query(sql, function (err, result) {
      if (err) throw err
      res.send(result)
    })
  })
})

app.post('/api/entries', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')

  let { name, isArticle, tag1, tag2, tag3, text, translationFr, links } = req.body
  if (isArticle) {
    isArticle = 1
  } else {
    isArticle = 0
  }
  let values = ''
  let valuesArray = [name, isArticle, tag1, tag2, tag3, text, translationFr, links]
  for (let field in valuesArray) {
    if (valuesArray[field] === undefined) {
      valuesArray[field] = '-'
    }
    values = values + '"' + valuesArray[field] + '", '
  }
  values = values.substring(0, values.lastIndexOf(','))

  let sql = 'INSERT INTO entries (name, isArticle, tag_1, tag_2, tag_3, text, translation_fr, links) VALUES (' + values + ')'
  con.connect(function (err) {
    // if (err) throw err
    con.query(sql, function (err, result) {
      if (err) throw err
      res.send(result)
    })
  })
})

app.put('/api/entries/:entry', (req, res) => {
  // not sure this is useful since I still get the 'no access stuff header set' error...
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  let entryToDelete = req.param('entry')

  let { name, isArticle, tag1, tag2, tag3, text, translationFr, links } = req.body
  if (isArticle) {
    isArticle = 1
  } else {
    isArticle = 0
  }

  let sql = 'UPDATE entries SET name = "' + name + '", isArticle = "' + isArticle + '", tag_1 = "' + tag1 + '", tag_2 = "' + tag2 + '", tag_3 = "' + tag3 + '", text = "' + text + '", translation_fr = "' + translationFr + '", links = "' + links + '" WHERE id = ' + entryToDelete
  con.connect(function (err) {
    // if (err) throw err
    con.query(sql, function (err, result) {
      if (err) throw err
      res.send(result)
    })
  })
})

process.on('uncaughtException', function () {
  // stop stuff
  // app.end()
  console.log('uncaughtException')
  // ...
  // end process
  process.exit(0)
})
