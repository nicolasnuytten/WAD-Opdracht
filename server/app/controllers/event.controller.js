const Event = require("../models/event.model");

exports.create = (req, res) => {
  if (!req.body.name && !req.body.date && !req.body.money && !req.body.text) {
    return res.status(400).send({
      message: "Fill in every input"
    });
  }

  const event = new Event({
    
    name: req.body.name,
    date: req.body.date,
    money: req.body.money,
    text: req.body.text
  });

  event
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findAll = (req, res) => {
  Event.find()
    .then(events => {
      res.send(events);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findOne = (req, res) => {
  Event.findById(req.params.eventId)
    .then(event => {
      if (!event) {
        return res.status(404).send({
          message: "Event not found with id " + req.params.eventId
        });
      }
      res.send(event);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Event not found with id " + req.params.eventId
        });
      }
      return res.status(500).send({
        message: "Error retrieving event with id " + req.params.eventId
      });
    });
};

exports.update = (req, res) => {
  if (!req.body.name && !req.body.date && !req.body.money && !req.body.text) {
    return res
      .status(400)
      .send({
        message: "Event update can not be empty"
      });
  }

  Event.findByIdAndUpdate(req.params.eventId, 
    { 
      name: req.body.name, 
      date: req.body.date, 
      money: req.body.money, 
      text: req.body.text 
    }, { new: true })
    .then(event => {
      if (!event) {
        return res
          .status(404)
          .send({
            message: "Event not found with id " + req.params.eventId
          });
      }
      res.send(event);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res
          .status(404)
          .send({
            message: "Event not found with id " + req.params.eventId
          });
      }
      return res
        .status(500)
        .send({
          message: "Error updating event with id " + req.params.eventId
        });
    });
};

exports.delete = (req, res) => {
  Event.findByIdAndRemove(req.params.eventId)
    .then(event => {
      if (!event) {
        return res.status(404).send({
          message: "event not found with id " + req.params.eventId
        });
      }
      res.send({ message: "Event deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Event not found with id " + req.params.eventId
        });
      }
      return res.status(500).send({
        message: "Could not delete event with id " + req.params.eventId
      });
    });
};
