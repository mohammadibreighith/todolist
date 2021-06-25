const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3100;
const path = require('path');
const publicPath = path.join(__dirname, 'client/build');
const todoRoute = require('./routes/todolist');

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

app.use('/todolist', todoRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT);
