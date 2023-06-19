import express from "express"
import { router } from "./database/routes"

const app = express()

app.use(express.json())
app.use(router)

app.listen(4003, () => {
    console.log(`Example app listening on port ${port}`)
  })