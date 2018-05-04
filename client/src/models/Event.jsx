import { decorate, observable, action } from "mobx";

class Event {
  constructor(name, date, money, text, id, removeEvent) {
    this.name = name;
    this.date = date;
    this.money = money;
    this.text = text;
    this.id = id;
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
  name: observable,
  money: observable,
  text: observable,
  date: observable,
  updateName: action, //enforceActions: true
  updateMoney: action, //enforceActions: true
  updateDate: action, //enforceActions: true
  updateText: action //enforceActions: true
});

export default Event;
