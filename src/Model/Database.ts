import axios from 'axios';

export default class Database {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://levendor-tav25-rsclone.herokuapp.com/';
  }

  async getAll(collection: string): Promise<string> {
    const response = await axios({
      baseURL: this.baseURL,
      url: collection,
    });

    if ((/20\d/).test(String(response.status))) {
      console.log(response.data);
      return JSON.stringify(response.data, null, 2);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async getOne(collection: string, id: string): Promise<string> {
    const response = await axios({
      baseURL: this.baseURL,
      url: `${collection}/${id}`,
    });

    if ((/20\d/).test(String(response.status))) {
      return JSON.stringify(response.data, null, 2);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async create(collection: string, id: string, documentData: string): Promise<any> {
    const data = {
      id: id,
      content:documentData,
    };
    const response = await axios({
      method: 'post',
      baseURL: this.baseURL,
      url: `/${collection}`,
      data,
    });

    if ((/20\d/).test(String(response.status))) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async update(collection: string, id: string, documentData: string): Promise<any> {
    const data = {
      id: id,
      content:documentData,
    };
    const response = await axios({
      method: 'put',
      baseURL: this.baseURL,
      url: `/${collection}/${id}`,
      data,
    });

    if ((/20\d/).test(String(response.status))) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async delete(collection: string, id: string): Promise<any> {
    const response = await axios({
      method: 'delete',
      baseURL: this.baseURL,
      url: `/${collection}/${id}`,
    });

    if ((/20\d/).test(String(response.status))) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }
}
