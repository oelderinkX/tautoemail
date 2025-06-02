const express = require('express')
const app = express()
const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

require('./index.js')(app);