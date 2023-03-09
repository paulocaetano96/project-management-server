const router = require("express").Router();

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

module.exports = router;
