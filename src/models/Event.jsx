import uniqid from "uniqid";
import { decorate, observable, action } from "mobx";

class Event {
  constructor(name, date, money, text, removeEvent) {
    this.id = uniqid();
    this.name = name;
    this.date = date;
    this.money = money;
    this.text = text;
    this.killMe = removeEvent;
  }

  updateName = value => {
    this.name = value;
  };

  updateDate = value => {
    this.date = value;
  };

  updateMoney = value => {
    this.money = value;
  };

  updateText = value => {
    this.text = value;
  };

  decrement = () => {
    this.killMe(this);
  };
}
decorate(Event, {
  name: observable,
  money: observable,
  text: observable,
  date: observable,
  updateName: action, //enforceActions: true
  updateMoney: action, //enforceActions: true
  updateDate: action, //enforceActions: true
  updateText: action, //enforceActions: true
  decrement: action
});

export default Event;