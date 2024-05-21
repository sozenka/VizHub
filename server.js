const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// API routes
app.get('/api/profile/:username', async (req, res) => {
  try {
    const { username } = req.params;
    console.log(`Fetching profile for username: ${username}`);
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    console.log(`Profile data: ${JSON.stringify(response.data)}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).send('Error fetching profile data');
  }
});

app.get('/api/repos/:username', async (req, res) => {
  try {
    const { username } = req.params;
    console.log(`Fetching repos for username: ${username}`);
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    console.log(`Repos data: ${JSON.stringify(response.data)}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching repos data:', error);
    res.status(500).send('Error fetching repos data');
  }
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the above routes, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
