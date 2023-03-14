const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    gallery: {
      type: String,
      trim: true,
    },
    fileUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Photo = model("Photo", photoSchema);

module.exports = Photo;
