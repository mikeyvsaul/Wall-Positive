const Message = require('../../models/message');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  try {
    const messages = await Message.find({});
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    const message = await Message.findById(req.params.id);
    res.status(200).json(message);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const deletedMessage = await Message.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedMessage);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedMessage);
  } catch (err) {
    res.status(400).json(err);
  }
}