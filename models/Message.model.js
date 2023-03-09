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
    event: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Event'
        }
    ],
    expiration: {
        type: Date,
        /* !??!!??!?!?!?!?!?!??!?!?!?!?!??!?!?!?!?!?!?!?!?!? */
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
}, {
    timestamps: true,
})


module.exports = model('Message', messageSchema)