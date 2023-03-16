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
        },
        club: {
            type: Schema.Types.ObjectId,
            ref: 'Club',
            required: [true, "You have to be a club member to upload a document"]
        }
    }, {
        timestamps: true,
    }
);

const Document = model("Document", documentSchema);

module.exports = Document;
