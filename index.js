const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define your routes
app.get('/', (req, res) => {
  res.send('Welcome to the Anonyvoo website!');
});

app.get('/verify', (req, res) => {
  res.send('Please enter your verification code:');
});

app.post('/verify', (req, res) => {
  const { code } = req.body;

  // Check if the code is valid
  // If valid, give the user access to the Discord link
  // If invalid, return an error message

  res.send('Verification successful! Here is the Discord link:');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
