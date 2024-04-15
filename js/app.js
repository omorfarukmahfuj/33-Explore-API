function loadData2() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))
}

function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(displayUsers(data)))
}

function displayUsers(data) {
  console.log(data);
}