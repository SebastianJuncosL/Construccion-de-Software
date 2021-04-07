const express = require('express');
const path = require('path');
const members = require('./Members');
const app = express();
// const sql = require('mysql');

// Going to a web page is a get request
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/api/members', (req, res) => res.json(members));

// Set a static folder to avoid using path.join
app.use(express.static(path.join(__dirname, 'public')));


// const { readFile } = require('fs').promises;

// app.get('/', async (request, response) => {
//     response.send(await readFile('./home.html', 'utf8'));
// });

//     server Deployment Port || Local Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));