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
    ]
}, {
    timestamps: true,
})


module.exports = model('Message', messageSchema)