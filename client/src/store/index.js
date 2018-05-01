import { decorate, observable, action, configure } from "mobx";
import Event from "../models/Event";
import Api from "../api/events";

configure({ enforceActions: true });

class Store {
  events = [];
  name = ``;
  date = ``;
  money = ``;
  text = ``;

  constructor(props) {
    this.api = new Api();
    this.api.getAll().then(events => this._add(...events));
  }

  _add = (...events) => {
    events.forEach(event => {
      const { name, date, money, text, _id } = event;
      this.events.push(new Event(name, date, money, text, _id));
    });
  };

  add = (name, date, money, text) => {
    this.api.create(name, date, money, text).then(event => {
      this._add(event);
    });
  };

  setEventName = value => {
    this.name = value;
  };

  setEventDate = value => {
    this.date = value;
  };

  setEventMoney = value => {
    this.money = value;
  };

  setEventText = value => {
    this.text = value;
  };

  resetEvent = () => {
    this.name = ``;
    this.date = ``;
    this.money = ``;
    this.text = ``;
  };

  addEvent = event => {
    // console.log(event)
    this.events.push(event);
  };

  removeEvent = event => {
    console.log(event);
    this.events.remove(event);
  };

  setActive = event => {
    if (event.active === true) {
      event.active = false;
    } else {
      event.active = true;
    }
  };
}
decorate(Store, {
  events: observable,
  content: observable,
  addEvent: action,
  removeEvent: action,
  setActive: action,
  setEventName: action,
  setEventDate: action,
  setEventMoney: action,
  setEventText: action,
  resetEvent: action,
  add: action,
  _add: action,
  name: observable,
  date: observable,
  money: observable,
  text: observable
});

const store = new Store();
export default store;
