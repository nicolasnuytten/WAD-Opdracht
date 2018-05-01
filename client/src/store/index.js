import { decorate, observable, action, configure } from "mobx";
import Event from "../models/Event";

configure({ enforceActions: true });

class Store {
  events = [];
  active = [];

  constructor(props) {
    this.addEvent(new Event("Bump 2017", "2018-02-10", 20, "TOP FESTIVAL"));
    this.addEvent(new Event("Bump 2017", "2018-02-10", 20, "TOP FESTIVAL"));
    this.addEvent(new Event("Bump 2017", "2018-02-10", 20, "TOP FESTIVAL"));
    this.addEvent(new Event("Bump 2017", "2018-02-10", 20, "TOP FESTIVAL"));
  }

  addEvent = event => {
    // console.log(event)
    this.events.push(event)
  };

  removeEvent = event => {
    console.log(event);
    this.events.remove(event);
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
});

const store = new Store();
export default store;
