const express = require('express');
const router = express.Router();
const Lobby = require('../models/Lobby');


//LIST ALL LOBBIES
router.get('/', async(req, res) => {
	const lobbies = await Lobby.find();
	res.send(lobbies);
});

//SUBMITS LOBBY
router.post('/', (req, res) => {
	const lobby = new Lobby({
		name: req.body.name,

	});
	lobby.save()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.send(err);
		})
});

//LIST SPECIFIC LOBBY
router.get('/:lobbyId', async(req, res) => {
	const lobby = await Lobby.findById(req.params.lobbyId);
	res.send(lobby)
		.then()
		.catch(err => {
			res.send(err);
		})
});

//DELETE LOBBY
router.delete('/:lobbyId', async(req, res) => {
	const removedLobby = await Lobby.remove({
		_id: req.params.lobbyId
	});
	res.send(removedLobby)
		.then()
		.catch(err => {
			res.send(err);
		})
});

//UPDATE LOBBY
router.patch('/:lobbyId', async(req, res) => {
	const updatedLobby = await Lobby.updateOne({
		_id: req.params.lobbyId
	}, {
		$set: {
			name: req.body.name
		}
	});
	res.send(updatedLobby)
		.then()
		.catch(err => {
			res.send(err);
		})
});

module.exports = router;