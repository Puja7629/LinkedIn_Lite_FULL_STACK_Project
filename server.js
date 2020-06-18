const express = require('express');
const connectdDB = require('./config/db');

const app =express();

//Connect Database
connectdDB();

app.get('/',(req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

//app.listen(PORT, () => console.log('Server started on port ${PORT}'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
