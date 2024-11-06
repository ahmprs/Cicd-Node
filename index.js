require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 7070
app.get("/test", (req, res) => {
  res.json({ err: "", msg: "TEST!" })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
