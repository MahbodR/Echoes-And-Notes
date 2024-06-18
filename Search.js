document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const reviews = document.querySelectorAll('.review');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        reviews.forEach(review => {
            const artist = review.getAttribute('data-artist').toLowerCase();
            const title = review.getAttribute('data-title').toLowerCase();
            if (artist.includes(query) || title.includes(query)) {
                review.style.display = 'block';
            } else {
                review.style.display = 'none';
            }
        });
    });

    // Optionally, add a search trigger for pressing "Enter"
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
