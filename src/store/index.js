import { decorate, observable, action, configure } from "mobx";
import Event from "../models/Event";

configure({ enforceActions: true });

class Store {
  events = [];
  active = [];

  constructor(props) {
    this.addEvent(
      new Event(
        "Bump 2017",
        "2017-04-21",
        100,
        "Leukste festival ooit!",
        this.removeEvent,
        this.setActive
      )
    );
    this.addEvent(
      new Event(
        "Rock Werchter 2017",
        "2017-04-21",
        40,
        "Ik weet er niet veel meer van. Oops",
        this.removeEvent,
        this.setActive
      )
    );
    this.addEvent(
      new Event(
        "Tomorrowland 2017",
        "2017-04-21",
        80,
        "Harde beats!",
        this.removeEvent,
        this.setActive
      )
    );
    this.addEvent(
      new Event(
        "Pukkelpop 2017",
        "2018-04-21",
        60,
        "Pukkel, pukkel, pukkel",
        this.removeEvent,
        this.setActive
      )
    );
  }

  addEvent = event => {
    this.events.push(event);
  };

  removeEvent = event => {
    console.log(event);
    console.log(this.events);
    this.events.remove(event);
  };

  setActive = event => {
    this.events.event.active = true;
  };

  get total() {
    return this.events.reduce((acc, cv) => (acc += cv.total), 0);
  }
}
decorate(Store, {
  events: observable,
  active: observable,
  addEvent: action, //enforceActions: true
  removeEvent: action, //enforceActions: true
  setActive: action //enforceActions: true
});

const store = new Store();
export default store;
