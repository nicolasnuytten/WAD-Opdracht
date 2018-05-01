module.exports = app => {
  const events = require("../controllers/event.controller.js");
  app.get("/events", events.findAll);
  app.post("/events", events.create);
  app.get("/events/:eventId", events.findOne);
  app.put("/events/:eventId", events.update);
  app.delete("/events/:eventId", events.delete);
};