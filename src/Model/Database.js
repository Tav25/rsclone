import axios from 'axios';

export default class Database {
  constructor() {
    this.baseURL = 'https://levendor-tav25-rsclone.herokuapp.com/';
  }

  async getAll(collection) {
    const response = await axios({
      baseURL: this.baseURL,
      url: collection,
    });

    if (response.status === 200) {
      return JSON.stringify(response.data, null, 2);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async getOne(collection, id) {
    const response = await axios({
      baseURL: this.baseURL,
      url: `${collection}/${id}`,
    });

    if (response.status === 200) {
      return JSON.stringify(response.data, null, 2);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async create(collection, id, documentData) {
    const data = {};
    data.id = id;
    data.content = documentData;
    const response = await axios({
      method: 'post',
      baseURL: this.baseURL,
      url: `/${collection}`,
      data,
    });

    if (response.status === 200) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async update(collection, id, documentData) {
    const data = {};
    data.id = id;
    data.content = documentData;
    const response = await axios({
      method: 'put',
      baseURL: this.baseURL,
      url: `/${collection}/${id}`,
      data,
    });

    if (response.status === 200) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async delete(collection, id) {
    const response = await axios({
      method: 'delete',
      baseURL: this.baseURL,
      url: `/${collection}/${id}`,
    });

    if ((/20\d/).test(response.status)) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }
}
