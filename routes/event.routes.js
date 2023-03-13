const router = require('express').Router();
const mongoose = require('mongoose');
const moment = require('moment');

const Event = require('../models/Event.model');

// create an event
router.post('/events', async (req, res, next) => {
	try {
		//getting the information from the user inserted information
		const { title, description, start, end, allDay, eventType, color } =
			req.body;
		//waiting until we have the information so that we can create the event
		const event = await Event.create({
			title,
			description,
			start,
			end,
			allDay,
			eventType,
			color,
		});
		//sending the created event to the client
		res.json(event);
	} catch (error) {
		console.log(error);
	}
});

//show all events
router.get('/events', async (req, res, next) => {
	try {
		//we create a variable that stores all the events
		const events = await Event.find();

		//I will leave this here, in case we want, in the future, to search for events only between specific dates:
		/* const events = await Event.find({
			start: { $gte: moment(req.query.start).toDate() },
			end: { $lte: moment(req.query.end).toDate() },
		}); */
    
		//sending the events to the client
		res.json(events);
	} catch (error) {
		console.log(error);
	}
});

//show a specific event
router.get('/events/:id', async (req, res, next) => {
	const { id } = req.params;

	try {
		//we create a variable that stores all the Id's of all the events and we're populating it also with the notifications associated with the day
		const events = await Event.findById(id);
		//sending the events to the client
		res.json(events);
	} catch (error) {
		console.log(error);
	}
});

//to edit a specific event
router.put('/events', async (req, res, next) => {
	//in this case, the id will come from the body too
	const { id, title, description, start, end, allDay, eventType, color } =
		req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		res.json('The provided Id is not valid');
	}

	try {
		//we create a variable that stores the id of the event to be edited
		const updatedEvent = await Event.findByIdAndUpdate(
			id,
			{ title, description, start, end, allDay, eventType, color },
			{ new: true },
		);
		//sending the updated event to the client
		res.json(updatedEvent);
	} catch (error) {
		console.log(error);
	}
});

//to delete a specific event
router.delete('/events/:id', async (req, res, next) => {
	const { id } = req.params; //->id of the event to be deleted

	//checking if the ID is valid or not. If not we:
	if (!mongoose.Types.ObjectId.isValid(id)) {
		//send an error message to the client
		res.json('The provided id is not valid');
	}

	try {
		//so, we delete the event from the database if we have a valid ID
		await Event.findByIdAndRemove(id);
		//success message saying that the event with the given ID has been deleted
		res.json({ message: `Event with the ${id} id successfully deleted` });
	} catch (error) {
		console.log(error);
		res.json(error);
	}
});

module.exports = router;
