import { decorate, observable, action } from "mobx";

class Event {
  constructor(_id, name, date, money, text, removeEvent, changeActive) {
    this.name = name;
    this.date = date;
    this.money = money;
    this.text = text;
    this._id = _id;
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
}
decorate(Event, {
  _id: observable,
  name: observable,
  money: observable,
  text: observable,
  date: observable,
  active: observable,
  updateName: action, //enforceActions: true
  updateMoney: action, //enforceActions: true
  updateDate: action, //enforceActions: true
  updateText: action, //enforceActions: true
  changeActive: action //enforceActions: true
});

export default Event;
