const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  displayed: false,
  location: String,
  font: String,
  orientation: String,
  color: String,
  size: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema)