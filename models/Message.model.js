const {Schema, model} = require ('mongoose')

const messageSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    important: {
        type: Boolean,
        default: false,
    },
    event:{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    created: {
        type: Date,
        default: Date.now
    },
    expiration: {
        type: Date,
    },
    sentTo: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
    readBy: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
    club: {
        type: Schema.Types.ObjectId,
        ref: 'Club',
/*         required: [true, "You need to be a club member to create a message"] */
    }
}, {
    timestamps: true,
})


module.exports = model('Message', messageSchema)