const mongoose = require("mongoose");

const { Schema } = mongoose;

const thoughtSchema = new Schema({
    id: {
        type: Number
    },
    thoguhtTitle: {
        type: string,
        required: true,
    },
    thoughtText: {
        type: string,
        required: true,
    },
});
const Thought = mongoose.model("Thought", thoughtSchema);
module.exports = Thought;