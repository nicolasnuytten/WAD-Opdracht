import uniqid from "uniqid";
import { decorate, observable, action } from "mobx";


class Event {
  constructor(name, date, money, text, removeEvent, activeEvent) {
    this.id = uniqid();
    this.name = name;
    this.date = date;
    this.money = money;
    this.text = text;
    this.killMe = removeEvent;
    this.amount = 1;
    this.active = true;
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
    this.amount--;
    if (this.amount === 0) {
      this.killMe(this);
    }
  };

  setActive = () => {
    console.log("active: ", this, this.active);

    if (this.active === true) {
      this.active = false;
    } else {
      this.active = true;
    }
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
  decrement: action, //enforceActions: true
  setActive: action,
});

export default Event;
