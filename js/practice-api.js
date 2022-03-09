function userLoad() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayData(data));
}
function displayData(data) {
    const ol = document.getElementById("users-details");
    for (const users of data) {
        const li = document.createElement("li");
        li.innerText = `Name: ${users.name}, 
        E-mail: ${users.email}, 
        Address: ${users.address}`;
        ol.appendChild(li);
    }
}
// post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "POST",
    body: JSON.stringify({
        title: "Mt New Post",
        body: "This is my posts",
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(res => res.json())
    .then(data => console.log(data))