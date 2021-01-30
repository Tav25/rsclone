import Database from './Model/DatabaseInterface.ts';
import Model from './Model/Model.ts';
import Controller from './Controller/Controller';

const container = document.createElement('div');
document.body.append(container);

const output = document.createElement('textarea');
output.cols = '79';
output.rows = '5';
output.readOnly = 'true';
output.style.resize = 'none';
output.style.outline = 'none';
output.style.display = 'block';

const input1 = document.createElement('input');
input1.type = 'text';
input1.size = '44';
input1.style.display = 'inline';

const input2 = document.createElement('input');
input2.type = 'text';
input2.size = '13';
input2.style.display = 'inline';

const input3 = document.createElement('input');
input3.type = 'text';
input3.size = '68';
input3.style.display = 'inline';

const getAllButton = document.createElement('button');
const getListButton = document.createElement('button');
const getButton = document.createElement('button');
const postButton = document.createElement('button');
const updateButton = document.createElement('button');
const deleteButton = document.createElement('button');
const newWorldButton = document.createElement('button');

getAllButton.innerText = 'Get all';
getListButton.innerText = 'Get list';
getButton.innerText = 'Get document';
postButton.innerText = 'Add document';
updateButton.innerText = 'Update document';
deleteButton.innerText = 'Delete document';
newWorldButton.innerText = 'New world';

const collectionElem = document.createElement('span');
collectionElem.textContent = 'Collection: ';
const idElem = document.createElement('span');
idElem.textContent = ' id: ';
idElem.style.marginLeft = '3px';
const messageElem = document.createElement('span');
messageElem.textContent = 'Message: ';
const br = document.createElement('br');
const br1 = document.createElement('br');
const br2 = document.createElement('br');

container.append(
  output,
  collectionElem,
  input1,
  idElem,
  input2,
  br,
  messageElem,
  input3,
  br1,
  getAllButton,
  getListButton,
  getButton,
  postButton,
  updateButton,
  deleteButton,
  br2,
  newWorldButton,
);

input1.value = 'maps';
input2.value = 'world1';
input3.value = 'test message';

const database = new Database();
const model = new Model(database);
const controller = new Controller(model);

getAllButton.addEventListener('click', async () => {
  const response = await database.getAll(input1.value);
  output.value = JSON.stringify(response, null, 2);
});

getListButton.addEventListener('click', async () => {
  const response = await database.getList(input1.value, input2.value);
  output.value = JSON.stringify(response, null, 2);
});

getButton.addEventListener('click', async () => {
  const response = await database.getOne(input1.value, input2.value);
  console.log(response);
  window.resp = response;
  output.value = JSON.stringify(response, null, 2);
});

postButton.addEventListener('click', async () => {
  const response = await database.create(input1.value, input2.value, input3.value);
  output.value = JSON.stringify(response, null, 2);
});

updateButton.addEventListener('click', async () => {
  const response = await database.update(input1.value, input2.value, input3.value);
  output.value = JSON.stringify(response, null, 2);
});

deleteButton.addEventListener('click', async () => {
  const response = await database.delete(input1.value, input2.value);
  output.value = JSON.stringify(response, null, 2);
});

newWorldButton.addEventListener('click', async () => {
  window.model = model;
  window.controller = controller;
  await controller.init();
  await model.newWorld();
});
