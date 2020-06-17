const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leaderSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        require: true
    },
    
    description: {
        type: String,
        require: true
    },
    featured: {
        type: Boolean,
        default:false      
    }
},{
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;