import axios from 'axios';

export default class Database {
  constructor() {
    this.baseURL = 'https://levendor-tav25-rsclone.herokuapp.com/';
  }

  async getAll(collection) {
    const { baseURL } = this;
    const response = await axios({
      baseURL,
      url: collection,
    });

    if (response.status === 200) {
      return JSON.stringify(response.data, null, 2);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async getOne(collection, id) {
    const { baseURL } = this;
    const response = await axios({
      baseURL,
      url: `${collection}/${id}`,
    });

    if (response.status === 200) {
      return JSON.stringify(response.data, null, 2);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async create(collection, id, documentData) {
    const { baseURL } = this;
    const data = {};
    data.id = id;
    data.content = documentData;
    const response = await axios({
      method: 'post',
      baseURL,
      url: `/${collection}`,
      data,
    });

    if (response.status === 200) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async update(collection, id, documentData) {
    const { baseURL } = this;
    const data = {};
    data.id = id;
    data.content = documentData;
    const response = await axios({
      method: 'put',
      baseURL,
      url: `/${collection}/${id}`,
      data,
    });

    if (response.status === 200) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async delete(collection, id) {
    const { baseURL } = this;
    const response = await axios({
      method: 'delete',
      baseURL,
      url: `/${collection}/${id}`,
    });

    if ((/20\d/).test(response.status)) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }
}
