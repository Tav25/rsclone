import axios from 'axios';

export default class DatabaseInterface {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://levendor-tav25-rsclone.herokuapp.com/';
  }

  async getAll(collection: string): Promise<any> {
    const response = await axios({
      baseURL: this.baseURL,
      url: collection,
    });

    if ((/20\d/).test(String(response.status))) {
      return response.data;
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async getList(collection: string, id: string): Promise<any> {
    const response = await axios({
      baseURL: this.baseURL,
      url: `${collection}/${id}`,
    });

    if ((/20\d/).test(String(response.status))) {
      return response.data;
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async getOne(collection: string, id: string): Promise<any> {
    const response = await axios({
      baseURL: this.baseURL,
      url: `${collection}/${id}`,
    });

    if ((/20\d/).test(String(response.status))) {
      return response.data[0];
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async create(collection: string, id: string, documentData: any): Promise<any> {
    const gameSet= {
      id: id,
      content: documentData,
    };
    const response = await axios({
      method: 'post',
      baseURL: this.baseURL,
      url: `/${collection}`,
      data: gameSet,
    });

    if ((/20\d/).test(String(response.status))) {
      return this.getAll(collection);
    }
    return `Ошибка HTTP: ${response.status}`;
  }

  async update(collection: string, id: string, documentData: any): Promise<any> {
    const gameSet= {
      id: id,
      content:documentData,
    };
    const response = await axios({
      method: 'put',
      baseURL: this.baseURL,
      url: `/${collection}/${id}`,
      data: gameSet,
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
