const Message = require('../../models/message');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const messages = await Message.find({});
  res.status(200).json(messages);
}

async function show(req, res) {
  const message = await Message.findById(req.params.id);
  res.status(200).json(message);
}

async function create(req, res) {
  const message = await Message.create(req.body);
  res.status(201).json(message);
}

async function deleteOne(req, res) {
  const deletedMessage = await Message.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedMessage);
}

async function update(req, res) {
  const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedMessage);
}