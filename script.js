const animeList = [
    { id: 1, title: 'Anime 1', img: 'https://via.placeholder.com/150x225.png?text=Anime+1' },
    { id: 2, title: 'Anime 2', img: 'https://via.placeholder.com/150x225.png?text=Anime+2' },
    { id: 3, title: 'Anime 3', img: 'https://via.placeholder.com/150x225.png?text=Anime+3' },
    { id: 4, title: 'Anime 4', img: 'https://via.placeholder.com/150x225.png?text=Anime+4' },
    { id: 5, title: 'Anime 5', img: 'https://via.placeholder.com/150x225.png?text=Anime+5' },
    { id: 6, title: 'Anime 6', img: 'https://via.placeholder.com/150x225.png?text=Anime+6' },
    { id: 7, title: 'Anime 7', img: 'https://via.placeholder.com/150x225.png?text=Anime+7' },
    { id: 8, title: 'Anime 8', img: 'https://via.placeholder.com/150x225.png?text=Anime+8' },
];

function displayAnime() {
    const container = document.getElementById('animeList').querySelector('.episodes-container');
    container.innerHTML = ''; // Clear existing content
    animeList.forEach(anime => {
        const animeLink = document.createElement('a');
        animeLink.href = `episode.html?anime=${anime.id}`; // Link to episode page
        animeLink.className = 'episode-thumbnail';
        animeLink.innerHTML = `
            <img src="${anime.img}" alt="${anime.title}">
            <span>${anime.title}</span>
        `;
        container.appendChild(animeLink);
    });
}

function filterAnime() {
    const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
    const filteredList = animeList.filter(anime => anime.title.toLowerCase().includes(searchTerm));
    const container = document.getElementById('animeList').querySelector('.episodes-container');
    container.innerHTML = ''; // Clear existing content
    filteredList.forEach(anime => {
        const animeLink = document.createElement('a');
        animeLink.href = `episode.html?anime=${anime.id}`; // Link to episode page
        animeLink.className = 'episode-thumbnail';
        animeLink.innerHTML = `
            <img src="${anime.img}" alt="${anime.title}">
            <span>${anime.title}</span>
        `;
        container.appendChild(animeLink);
    });
}

// Load anime on page load
window.onload = displayAnime;
