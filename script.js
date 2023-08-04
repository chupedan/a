document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchBox = document.getElementById('search-input');
    const searchResult = document.getElementById('search-results');
    const APIkey = "394ec966f2bf2ca9cb84170fdc29f99b";

    async function searchCity() {
        keyword = searchBox.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?id=${keyword}&appid=${APIkey}`;

        const response = await fetch(url);
        const data = await response.json();

        const results = data.weather;
        results.map((results) => {
            const main = document.createElement("h3");
            main.innerText = results.main;

            const des = document.createElement("div");
            des.innerText = results.description;

            // const country = document.createElement("div");
            // country.innerText = results.sys.country;

            // const nameCity = document.createElement("div");
            // nameCity.innerText = results.name;

            searchResult.appendChild(main);
            searchResult.appendChild(des);
            // searchResult.appendChild(country);
            // searchResult.appendChild(nameCity);

            // searchResult.appendChild(des);
        })
    };

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        searchCity();
    });
});