import Event from "../models/Event";

class Store {
  events = [];

  constructor(props) {

    this.addEvent(new Event("Bump 2017", "2017-04-21", 100, "Leukste festival ooit!"));
    this.addEvent(new Event("Rock Werchter 2017", "2017-04-21", 40, "Ik weet er niet veel meer van. Oops"));
    this.addEvent(new Event("Tomorrowland 2017", "2017-04-21", 80, "Harde beats!"));
    this.addEvent(new Event("Pukkelpop 2017", "2018-04-21", 60, "Pukkel, pukkel, pukkel"));
  }

  addEvent = event => {
    this.events.push(event);
  };

  removeEvent = event => {
    this.events.remove(event);
  };

}

const store = new Store();
export default store;
