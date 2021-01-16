import Database from './Database';

const main = document.querySelector('.main');

// const input0 = document.createElement('input');
// input0.type = 'text';
// input0.size = '45';
// input0.style.display = 'inline';

const output = document.createElement('textarea');
output.cols = '78';
output.rows = '35';
output.readOnly = 'true';
output.style.resize = 'none';
output.style.outline = 'none';
output.style.display = 'block';

const input1 = document.createElement('input');
input1.type = 'text';
input1.size = '50';
input1.style.display = 'inline';

const input2 = document.createElement('input');
input2.type = 'text';
input2.size = '21';
input2.style.display = 'inline';

const input3 = document.createElement('input');
input3.type = 'text';
input3.size = '76';
input3.style.display = 'block';

const getListButton = document.createElement('button');
const getButton = document.createElement('button');
const postButton = document.createElement('button');
const updateButton = document.createElement('button');
const deleteButton = document.createElement('button');

getListButton.innerText = 'Get list';
getButton.innerText = 'Get document';
postButton.innerText = 'Add document';
updateButton.innerText = 'Update document';
deleteButton.innerText = 'Delete document';

main.append(
  output,
  // input0,
  input1,
  input2,
  input3,
  getListButton,
  getButton,
  postButton,
  updateButton,
  deleteButton,
);

// input0.value = 'https://levendor-tav25-rsclone.herokuapp.com/';
input1.value = 'maps';
input2.value = '4';
input3.value = 'test message';

const database = new Database();

getListButton.addEventListener('click', async () => {
  output.value = await database.getAll(input1.value);
});

getButton.addEventListener('click', async () => {
  output.value = await database.getOne(input1.value, input2.value);
});

postButton.addEventListener('click', async () => {
  output.value = await database.create(input1.value, input2.value, input3.value);
});

updateButton.addEventListener('click', async () => {
  output.value = await database.update(input1.value, input2.value, input3.value);
});

deleteButton.addEventListener('click', async () => {
  output.value = await database.delete(input1.value, input2.value);
});
