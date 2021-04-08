const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const playerRoutes = require('./routes/playerRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/', playerRoutes);

const MONGO_URL =
  'mongodb+srv://Shivam:kalinga@cluster0.zimfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((client) => {
    console.log('Connected to Database');
  })
  .catch((error) => console.error(error));

const players = [
  {
    name: 'Lionell Messi',
    club: 'Fc Barcelona',
    position: 'LW',
    country: 'Argentina',
  },
  {
    name: 'Christina Ronaldo',
    club: 'Jamaica',
    position: 'CI',
    country: 'Portunal',
  },
];

const port = process.env.port || 4000;

//read data
app.get('/players', (req, res) => {
  res.json({ data: players });
});

//create data
app.post('/player', (req, res) => {
  players.push(req.body);
  res.json({ message: 'Success', data: players });
  //console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
