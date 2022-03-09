function loadAlbum() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(data => displayAlbums(data))
}
function displayAlbums(albums) {
    const albumsContainer = document.getElementById("albums");
    for (const album of albums) {
        const p = document.createElement("P");
        p.style.textAlign = "center";
        p.innerText = album.title;
        albumsContainer.appendChild(p);

    }
}