var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    content: {type: String, required:true},
    user: {type: Schema.Types.ObjectId, required:true, ref:'User'}
});

module.exports = mongoose.model('Message', messageSchema);