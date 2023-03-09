const router = require("express").Router();

//import the notifications model
const Notifications = require("../models/Message.model");

//import the events model
const Event = require("../models/Event.model");

//creating it, async because we want to trigger it after we recieve the information needed to create it.
router.post("/messages", async (req, res, next) => {
  try {
    //getting the information from the model
    const { title, description, startTime, endTime, event } = req.body;
    //wait until we have the information, then we create it
    const messages = await Notifications.create({
      title,
      description,
      startTime,
      endTime,
      event,
    });
    //find by id and push the information into the database
    await Event.findByIdAndUpdate(event, {
      $push: { messages: messages._id },
    });
    //send the information to the client
    res.json(messages);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
