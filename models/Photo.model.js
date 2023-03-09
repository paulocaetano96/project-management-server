const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const photoSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            trim: true,
        },
        url: {
            type: String,
            trim: true,
        },
    }, {
        timestamps: true,
    }
);

const Photo = model("Photo", photoSchema);

module.exports = Photo;
