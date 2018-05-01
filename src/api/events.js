
class Api {
  url = `http://localhost:4000/events`;
  
  getAll = () => {
    return fetch(this.url).then(r => r.json());
  }

  create = (name, date, money, text) => {
    const options = {
      method: `POST`,
      headers: {"content-type": `application/json`},
      body: JSON.stringify({ name, date, money, text })
    }
    return fetch(this.url, options)
    .then(r => r.json())
    .catch(err => console.log(err));
  };
}

export default Api;