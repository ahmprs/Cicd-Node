const env = require("dotenv")

// ### Note:
// This environment variables are defined to
// be used when Server Environment Variables are not defined.
// If the server already has such a variable, the server variable is used.
env.config({ path: ".env" })
// -------------------------------------------------------------------------

// ### Note:
// It is possible to have other environment variable for other intensions
// env.config({ path: ".env.local" })
// -------------------------------------------------------------------------

const express = require("express")
const app = express()
const PORT = process.env.PORT || 7070
app.get("/test", (req, res) => {
  res.json({ err: "", msg: "TEST!" })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
