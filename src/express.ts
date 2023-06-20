import express from 'express'
import { prismaClient } from './database/prismaClient'
import bodyParser from 'body-parser'

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  res.render('index')
})

app.post('/cadastrar', async (req, res) => {
  console.log(req.body)
  res.redirect('/')
})
// app.post('/post', async (req, res) => {
//   const { title, content, authorEmail } = req.body
//   const post = await prismaClient.post.create({
//     data: {
//       title,
//       content,
//       published: false,
//       author: { connect: { email: authorEmail } },
//     },
//   })
//   res.json(post)
// })

// app.put('/publish/:id', async (req, res) => {
//   const { id } = req.params
//   const post = await prismaClient.post.update({
//     where: { id },
//     data: { published: true },
//   })
//   res.json(post)
// })

// app.delete('/user/:id', async (req, res) => {
//   const { id } = req.params
//   const user = await prismaClient.user.delete({
//     where: {
//       id,
//     },
//   })
//   res.json(user)
// })

const server = app.listen(3000)