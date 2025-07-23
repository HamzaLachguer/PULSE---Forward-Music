// Add a proxy prefix to your API URL
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://saavn.me/search/songs?query=latest';

async function fetchMusic() {
    try {
        const response = await fetch(PROXY_URL + API_URL, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching music:", error);
        return [];
    }
}

console.log(fetchMusic())