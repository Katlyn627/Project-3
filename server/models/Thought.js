const mongoose = require("mongoose");

const { Schema } = mongoose;

const thoughtSchema = new Schema({
    id: {
        type: Number
    },
    thoughtTitle: {
        type: String,
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
    },
});
const Thought = mongoose.model("Thought", thoughtSchema);
module.exports = Thought;