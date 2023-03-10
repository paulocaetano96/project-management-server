const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");
const Club = require("../models/Club.model");

//create a new club
router.post("/club", async (req, res, next) => {
  try {
    //getting the information from the model
    const { name, sport, primaryColor, secondaryColor, teams, members } = req.body;

    //waiting until we have the information so that we can create the club
    const club = await Club.create( { name, sport, primaryColor, secondaryColor, teams, members } );
    //sending the created club to the client
    res.json(club);
  } catch (error) {
    console.log(error);
  }
});

//show a specific club details
router.get("/club/:id", async (req, res, next) => {

  const {id} = req.params;

  try {
    //we create a variable that stores the id of the club we want to find
    const club = await Club.findById(id)
    //sending the club details to the client
    res.json(club);
  } catch (error) {
    console.log(error);
  }
});

//to edit a specific club's details
router.put("/club/:id", async (req, res, next) => {
  //get the id of the club to be edited
  const {id} = req.params;  //->id of the club to be edited
  const { name, sport, primaryColor, secondaryColor, teams, members } = req.body; //->information from the model

  if(!mongoose.Types.ObjectId.isValid(id)) {
      res.json("The provided Id is not valid")
  }
 
  try {
    //we create a variable that stores the id of the club to be edited
    const updatedClubDetails = await Club.findByIdAndUpdate(id, { name, sport, primaryColor, secondaryColor, teams, members }, {new: true});
    //sending the updated club details to the client
    res.json(updatedClubDetails);

  } catch (error) {
    console.log(error);
  }

})

module.exports = router;
