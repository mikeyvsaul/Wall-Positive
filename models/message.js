const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  displayed: false,
  locationX: Number,
  locationY: Number,
  orientation: Number,
  size: Number,
  font: String,
  color: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema)