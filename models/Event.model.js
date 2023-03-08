const {Schema, model} = require ('mongoose')

const eventSchema = new Schema ({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    startTime: {
        type: String,
        trim: true,
    },  
    endTime: {
        type: String,
        trim: true,
    },
    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Notifications'
        }
    ]
}, {
    timestamps: true,
})


module.exports = model('Event', eventSchema)