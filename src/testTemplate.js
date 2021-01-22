import Database from './Model/Database.ts';
import Model from './Model/Model.ts';

const container = document.querySelector('#testContainer');

const output = document.createElement('textarea');
output.cols = '78';
output.rows = '35';
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
input2.size = '17';
input2.style.display = 'inline';

const input3 = document.createElement('input');
input3.type = 'text';
input3.size = '69';
input3.style.display = 'inline';

const getListButton = document.createElement('button');
const getButton = document.createElement('button');
const postButton = document.createElement('button');
const updateButton = document.createElement('button');
const deleteButton = document.createElement('button');
const testButton = document.createElement('button');

getListButton.innerText = 'Get list';
getButton.innerText = 'Get document';
postButton.innerText = 'Add document';
updateButton.innerText = 'Update document';
deleteButton.innerText = 'Delete document';
testButton.innerText = 'test';

const collectionElem = document.createElement('span');
collectionElem.textContent = 'Collection: ';
const idElem = document.createElement('span');
idElem.textContent = ' id: ';
const messageElem = document.createElement('span');
messageElem.textContent = 'Message: ';
const br = document.createElement('br');
const br1 = document.createElement('br');

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
  getListButton,
  getButton,
  postButton,
  updateButton,
  deleteButton,
  testButton,
);

input1.value = 'userProfiles';
input2.value = '1';
input3.value = 'test message';

const database = new Database();

getListButton.addEventListener('click', async () => {
  const response = await database.getAll(input1.value);
  output.value = JSON.stringify(response, null, 2);
});

getButton.addEventListener('click', async () => {
  const response = await database.getOne(input1.value, input2.value);
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

// testButton.addEventListener('click', async () => {
//   const response = await user.getUserList();
//   output.value = JSON.stringify(response, null, 2);
// });
