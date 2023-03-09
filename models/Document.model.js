const { Schema, model } = require("mongoose");

const documentSchema = new Schema(
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

const Document = model("Document", documentSchema);

module.exports = Document;
