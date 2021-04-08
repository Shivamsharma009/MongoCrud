const express = require('express');

const route = express.Router();

const Player = require('../model/playerModel');

route.get('/players', async (req, res) => {
  try {
    const players = await Player.find();
    res.json({ data: players });
  } catch (err) {
    res.status(500).json({ errMsg: err.message });
  }
});

route.get('/player/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    res.json(player);
  } catch (err) {
    res.send('Error ' + err);
  }
});

route.post('/player', async (req, res) => {
  try {
    let player = new Player();
    player.name = req.body.name;
    player.club = req.body.club;
    player.position = req.body.position;
    player.rating = req.body.rating;
    player.debug = req.body.debug;
    await player.save();
    res.json({ message: 'Sucess', player });
  } catch (err) {
    res.status(400).json({ errMsg: err.message });
  }
});

route.patch('/player/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    player.name = req.body.name;
    const a1 = await Player.save();
    res.json(a1);
  } catch (err) {
    res.send('Error');
  }
});

route.delete('/player/:id', async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    res.json({ message: 'Success', data: player });
  } catch (err) {
    res.send('Error');
  }
});

module.exports = route;
