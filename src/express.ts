import express from 'express'
import { prismaClient } from './database/prismaClient'

const app = express()

app.get('/feed', async (req, res) => {
  const posts = await prismaClient.conta.findMany({
    where: { saldo: {gt: 0}}
  })
  res.json(posts)
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