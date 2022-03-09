function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUsers(data));
}
//using function call
function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPost(data))
}
function displayPost(data) {
    for (const titles of data) {
        console.log(titles.title);
    }
}
function displayUsers(data) {
    const ul = document.getElementById("users");
    for (const users of data) {
        console.log(users.name);
        const li = document.createElement("li");
        li.innerText = `Name: ${users.name}, 
        E-mail: ${users.email}`;
        ul.appendChild(li);

    }
}