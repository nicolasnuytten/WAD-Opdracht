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
    // this.api = new Api();
    // this.api.getAll().then(events => this._add(...events));
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

  remove = event => {
    this.api.remove(event).then(() => this._remove(event));
  };

  _remove = event => {
    this.events.remove(event);
  };

  update = event => {
    this.api.update(event).then(event => this._update(event));
  };

  _update = event => {
    const index = this.events.findIndex(check => check.id === event.id);
    this.events[index] = event;
  };

  resetEvent = () => {
    this.name = ``;
    this.date = ``;
    this.money = ``;
    this.text = ``;
  };
}
decorate(Store, {
  events: observable,
  resetEvent: action,
  add: action,
  _add: action,
  remove: action,
  _remove: action,
  update: action,
  _update: action,
  name: observable,
  date: observable,
  money: observable,
  text: observable
});

const store = new Store();
export default store;
