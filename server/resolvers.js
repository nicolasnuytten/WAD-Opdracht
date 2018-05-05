const { Event } = require("./connectors");

module.exports = {
  Query: {
    allEvents() {
      return Event.find();
    },
    event(_, args) {
      return Event.findById(args._id);
    }
  },
  Mutation: {
    addEvent(_, args) {
      return new Event(args).save();
    }
  },
  Event: {
    _id: _id => {
      console.log(_id);
    }
  }
};
