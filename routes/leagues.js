// Tworzyć crud dla lig?

const express = require('express');
const router = express.Router();
const League = require('../models/league');
const mongoose = require('mongoose');

// Get all leagues
router.get('/', async(req, res) => {
	const leagues = await League.find();
	res.send(leagues);
});

// Add new league
router.post('/', (req, res) => {
	const league = new League({
        _id: new mongoose.Types.ObjectId(),
        league_id: req.body.league_id,
		name: req.body.name,
	});
	league.save()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.send(err);
		})
});

module.exports = router;