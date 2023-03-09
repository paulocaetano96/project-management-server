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
    start: {
        type: Date,
        trim: true,
    },  
    end: {
        type: Date,
        trim: true,
    },
    allDay: {
        type: Boolean,
    },


    message: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Notifications'
        }
    ]
}, {
    timestamps: true,
})


module.exports = model('Event', eventSchema)