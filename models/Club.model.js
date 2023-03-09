const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const clubSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        sport: {
            type: String,
            trim: true,
        },
        primaryColor: {
            type: String,
            default: '#A8D5E5',
        },
        secondaryColor: {
            type: String,
            default: '#372B25',
        },
        teams: [
            {
            type: String,
            trim: true,
        }
        ],
        members: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User'
            }
        ],
    }, {
        timestamps: true,
    }
);

const Club = model("Club", clubSchema);

module.exports = Club;