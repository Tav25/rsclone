export default interface IDatabase {
  baseURL: string;

  getAll(collection: string): Promise<string>;

  getOne(collection: string, id: string): Promise<string>;

  create(collection: string, id: string, documentData: any): Promise<any>;

  update(collection: string, id: string, documentData: any): Promise<any>;

  delete(collection: string, id: string): Promise<any>;
}