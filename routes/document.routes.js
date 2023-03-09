const router = require("express").Router();
const mongoose = require("mongoose");

const Document = require("../models/Document.model");

// create an document
router.post("/documents", async (req, res, next) => {
  try {
    //getting the information from the model
    const { title, description, url } = req.body;
    //waiting until we have the information so that we can create the document
    const document = await Document.create({ title, description, url });
    //sending the created document to the client
    res.json(document);
  } catch (error) {
    console.log(error);
  }
});

//show all documents
router.get("/documents", async (req, res, next) => {
  try {
    //we create a variable that stores all the Id's of all the documents
    const documents = await Document.find()
    //sending the document to the client
    res.json(documents);
  } catch (error) {
    console.log(error);
  }
});

//show a specific document
router.get("/documents/:id", async (req, res, next) => {

  const {id} = req.params;

  try {
    //we create a variable that stores the id of a document in specific
    const documents = await Document.findById(id)
    //sending the documents to the client
    res.json(documents);
  } catch (error) {
    console.log(error);
  }
});

//to edit a specific document
router.put("/documents/:id", async (req, res, next) => {
  //get the id of the document to be edited
  const {id} = req.params;  //->id of the document to be edited
  const { title, description, url } = req.body; //->information from the model

  if(!mongoose.Types.ObjectId.isValid(id)) {
      res.json("The provided Id is not valid")
  }
 
  try {
    //we create a variable that stores the id of the document to be edited
    const updatedDocuments = await Document.findByIdAndUpdate(id, { title, description, url }, {new: true});
    //sending the updated document to the client
    res.json(updatedDocuments);

  } catch (error) {
    console.log(error);
  }
})

//to delete a specific document
router.delete('/documents/:id', async (req, res, next) => {

    const {id} = req.params;  //->id of the document to be deleted
  
    //checking if the ID is valid or not. If not we:
    if(!mongoose.Types.ObjectId.isValid(id)){
      //send an error message to the client
      res.json('The provided id is not valid')
    }
  
    try {
      //so, we delete the document from the database if we have a valid ID
      await Document.findByIdAndRemove(id)
      //success message saying that the document with the given ID has been deleted
      res.json({message: `Document with the ${id} id successfully deleted`}) 
  
    } catch (error) {
      console.log(error);
      res.json(error); 
    }
  
  });



module.exports = router;
