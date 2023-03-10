const router = require("express").Router();
const mongoose = require("mongoose");

const Photo = require("../models/Photo.model");

//show all photos
router.get("/photos", async (req, res, next) => {
  try {
    //we create a variable that stores all the Id's of all the photos
    const photos = await Photo.find();
    //sending the document to the client
    res.json(photos);
  } catch (error) {
    console.log(error);
  }
});

// create an photo
router.post("/photos", async (req, res, next) => {
    try {
      //getting the information from the model
      const { title, description, url, gallery } = req.body;
      //waiting until we have the information so that we can create the document
      const photos = await Photo.create({ title, description, url, gallery });
      //sending the created document to the client
      res.json(photos);
    } catch (error) {
      console.log(error);
    }
  });

  //to delete a specific photo
router.delete('/photos/:id', async (req, res, next) => {

    const {id} = req.params;  //->id of the photo to be deleted
  
    //checking if the ID is valid or not. If not we:
    if(!mongoose.Types.ObjectId.isValid(id)){
      //send an error message to the client
      res.json('The provided id is not valid')
    }
  
    try {
      //so, we delete the photo from the database if we have a valid ID
      await Photo.findByIdAndRemove(id)
      //success message saying that the photo with the given ID has been deleted
      res.json({message: `Event with the ${id} id successfully deleted`}) 
  
    } catch (error) {
      console.log(error);
      res.json(error); 
    }
  
  });

module.exports = router;
