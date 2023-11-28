const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")

const apiKey = "N29hsafb26eHEkQlpCOJpg==9E3jvue32J8xhEZv";

const options = {
    method: "GET", 
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    jokeEl.innerText = " updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    try {
        const response = await fetch(apiURL, options);
        const data = await response.json();

        jokeEl.innerText = data[0].joke;

        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Jock...";
    
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
btnEl.addEventListener("click", getJoke);
