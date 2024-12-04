let apiKey = 'live_ILw9oMrNp0U6JfUESLlfhhS4jWE1OUZUy4NYSvr06XobBvPN94Uz2cWfyxLZWEuc'; 
let apiUrl = 'https://api.thecatapi.com/v1/images/search';

let fetchCatButton = document.getElementById('fetch-cat');
let catContainer = document.getElementById('cat-container');

fetchCatButton.addEventListener('click', async () => {
try {
    let response = await fetch(apiUrl, {
    headers: {
        'x-api-key': apiKey, 
    },
    });
    let data = await response.json();
    let catImage = document.createElement('img');
    catImage.src = data[0].url;
    catImage.alt = 'A cute cat';
    catImage.style.width = '300px';
    catContainer.innerHTML = ''; 
    catContainer.appendChild(catImage);
} catch (error) {
    console.error('Error fetching the cat image:', error);
}
});
