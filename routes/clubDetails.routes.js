const router = require("express").Router();
const mongoose = require("mongoose");

const Club = require("../models/Club.model");

// create a club    
router.post("/club", async (req, res, next) => {    /* ?????????????? */
  try {
    //getting the information from the model
    const { name, sport, primaryColor, secondaryColor, teams } = req.body;
    //waiting until we have the information so that we can create the club
    const club = await Club.create({ name, sport, primaryColor, secondaryColor, teams });
    //sending the created club to the client
    res.json(club);
  } catch (error) {
    console.log(error);
  }
});


//show a specific document
router.get("/club-details/:id", async (req, res, next) => {

  const {id} = req.params;

  try {
    //we create a variable that stores the id of a club in specific
    const club = await Document.findById(id)
    //sending the club to the client
    res.json(club);
  } catch (error) {
    console.log(error);
  }
});

//to edit a specific club's details
router.put("/club-details/:id", async (req, res, next) => {
  //get the id of the club to be edited
  const {id} = req.params;  //->id of the club to be edited
  const { name, sport, primaryColor, secondaryColor, teams } = req.body; //->information from the model

  if(!mongoose.Types.ObjectId.isValid(id)) {
      res.json("The provided Id is not valid")
  }
 
  try {
    //we create a variable that stores the id of the club to be edited
    const updatedClubs = await Document.findByIdAndUpdate(id, { name, sport, primaryColor, secondaryColor, teams }, {new: true});
    //sending the updated club to the client
    res.json(updatedClubs);

  } catch (error) {
    console.log(error);
  }
})

//to delete a specific club -> ??????????????????????
router.delete('/club-details/:id', async (req, res, next) => {

    const {id} = req.params;  //->id of the club to be deleted
  
    //checking if the ID is valid or not. If not we:
    if(!mongoose.Types.ObjectId.isValid(id)){
      //send an error message to the client
      res.json('The provided id is not valid')
    }
  
    try {
      //so, we delete the club from the database if we have a valid ID
      await Club.findByIdAndRemove(id)
      //success message saying that the club with the given ID has been deleted
      res.json({message: `Document with the ${id} id successfully deleted`}) 
  
    } catch (error) {
      console.log(error);
      res.json(error); 
    }
  
  });



module.exports = router;
