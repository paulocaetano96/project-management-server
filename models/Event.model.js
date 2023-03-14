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
    eventType: {
        type: String,
    },
    color: {
        type: String,
        default: "#2596be"
    },
    club: {
        type: Schema.Types.ObjectId,
        ref: 'Club',
        required: [true, "You need to be a club member to create an event"]
    }
}, {
    timestamps: true,
})


module.exports = model('Event', eventSchema)