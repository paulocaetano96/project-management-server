const {Schema, model} = require ('mongoose')

const notificationsSchema = new Schema ({

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
    event: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
}, {
    timestamps: true,
})


module.exports = model('Notifications', notificationsSchema)