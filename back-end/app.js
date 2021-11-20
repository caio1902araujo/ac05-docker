const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Topic, sequelize } = require('./model/topic')

const app = express()
const port = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(cors())

// Post Topic
app.post('/topic', async (req, res) => {
  await sequelize.sync()
  const topic = await Topic.create({
    title: req.body.title,
    description: req.body.description
  });

  res.status(200).send(topic)
})

// Get Topics
app.get('/topics', async (req, res) => {
    await sequelize.sync()
    const topics = await Topic.findAll({
      order: [['createdAt', 'DESC']]
    })
    res.status(200).send(topics)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})