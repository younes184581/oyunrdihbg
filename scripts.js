document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // Redirect to the onion search results page (replace with actual functionality)
        window.location.href = `http://onionsearchservice.onion/search?q=${encodeURIComponent(query)}`;
    }
});



// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const warningMessage = document.getElementById('warning-message');

    searchInput.addEventListener('focus', () => {
        warningMessage.style.display = 'block';
    });

    // Hide the warning message when the input loses focus
    searchInput.addEventListener('blur', () => {
        warningMessage.style.display = 'none';
    });
});
