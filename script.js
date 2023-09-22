const input = document.querySelector('input');
const btnAdd = document.querySelector('button');
const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  if (e.target.nodeName === 'INPUT') {
    e.target.nextSibling.classList.toggle('done');
  }

  if (e.target.id === 'delete') {
    e.target.parentElement.remove();
  }
});

input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (input.value === '') {
      alert('Text field is empty!');
      return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const task = document.createTextNode(input.value);
    const textDelete = document.createTextNode('delete');

    span.append(task);
    button.append(textDelete);
    button.setAttribute('id', 'delete');
    li.append(span);
    li.append(' - ');
    li.append(button);
    ul.append(li);
    e.target.value = '';
  }
});

btnAdd.addEventListener('click', () => {
  const input = document.querySelector('input');
  if (input.value === '') {
    alert('Text field is empty!');
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  const check = document.createElement('input');
  const button = document.createElement('button');
  const task = document.createTextNode(input.value);
  const textDelete = document.createTextNode('delete');

  span.append(task);
  check.setAttribute('type', 'checkbox');
  button.append(textDelete);
  button.setAttribute('id', 'delete');
  li.append(check);
  li.append(span);
  li.append(' - ');
  li.append(button);
  ul.append(li);
  input.value = '';
});
