const router = require("express").Router();
const mongoose = require("mongoose");

const Event = require("../models/Event.model");
const Message = require("../models/Message.model");

// create an event
router.post("/events", async (req, res, next) => {
  try {
    //getting the information from the model
    const { title, description, start, end, message, allDay,  } = req.body;
    //waiting until we have the information so that we can create the event
    const event = await Event.create(req.body);
    //sending the created event to the client
    res.json(event);
  } catch (error) {
    console.log(error);
  }
});

//show all events
router.get("/events", async (req, res, next) => {
  try {
    //we create a variable that stores all the Id's of all the events and we're populating it also with the notifications associated with the day
    const events = await Event.find()/* .populate("message"); */
    //sending the events to the client
    res.json(events);
  } catch (error) {
    console.log(error);
  }
});

//show a specific event
router.get("/events/:id", async (req, res, next) => {

  const {id} = req.params;

  try {
    //we create a variable that stores all the Id's of all the events and we're populating it also with the notifications associated with the day
    const events = await Event.findById(id)
    //sending the events to the client
    res.json(events);
  } catch (error) {
    console.log(error);
  }
});














module.exports = router;
