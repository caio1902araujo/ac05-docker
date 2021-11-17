const express = require('express')
const bodyParser = require('body-parser')
const { Topic } = require('./model/topic');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

// Post Topic
app.post('/topic', async (req, res) => {
  const topic = await Topic.create({
    title: req.body.title,
    description: req.body.description
  });

  res.status(200).send(topic)
})

// Get Topics
app.get('/topics', async (req, res) => {
    const topics = await Topic.findAll()
    res.status(200).send(topics)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})