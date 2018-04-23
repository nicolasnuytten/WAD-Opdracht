
class Store {
  events = [];

  addEvent = event => {
    this.events.push(event);
  };
}

const store = new Store();
export default store;
