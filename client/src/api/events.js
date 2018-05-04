
class Api {
  url = `http://localhost:4000/events`;

  getAll = () => {
    return fetch(this.url).then(r => r.json());
  };

  create = (name, date, money, text) => {
    const options = {
      method: `POST`,
      headers: { "content-type": `application/json` },
      body: JSON.stringify({ name, date, money, text })
    };
    return fetch(this.url, options)
      .then(r => r.json())
      .catch(err => console.log(err));
  };

  remove = event => {
    console.log(event)
    return fetch(`${this.url}/${event.id}`, this.getOptions(`delete`))
      .then(r => r.json())
      .catch(err => console.error(err));
  };

  update = event => {
    console.log(event)
    return fetch(`${this.url}/${event.id}`, this.getOptions(`put`, event))
      .then(r => r.json())
      .catch(err => console.error(err));
  };

  getOptions = (method, body = null) => {
    const options = {
      method: method.toUpperCase(),
      headers: {
        "content-type": `application/json`
      }
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return options;
  };
}

export default Api;