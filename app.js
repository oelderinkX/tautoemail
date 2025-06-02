const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const email = express();
const email_port = 25;

email.listen(email_port, () => {
  console.log(`Email back end running on port ${email_port}`);
});
require('./email.js')(email);

app.listen(port, () => {
  console.log(`Web front end running on port ${port}`);
});
require('./index.js')(app);