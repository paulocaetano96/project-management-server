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
        fileUrl: {
            type: String,
        },
        group: {
            type: String,

        }
    }, {
        timestamps: true,
    }
);

const Document = model("Document", documentSchema);

module.exports = Document;
