const list = document.getElementById("list");
const description = document.getElementById("description");

const api = "https://pokeapi.co/api/v2/pokemon?limit=150";

/**
 * Try to parse a response as JSON data
 */
function transformToJson(response) {
    if (response.ok) {
        return response.json();
    }

    throw Error("Content not loaded");
}

/**
 * Clear the list of all its items
 */
function emptyList() {
    list.innerhtml = "";
}

/**
 * Create an item, fetch its data and setup event listener
 */
function createItem(pokemon) {
    // Create a li tag
    const item = document.createElement("li");
    const image = document.createElement("img");
    const weight = document.createElement("p");

    fetch(pokemon.url).then(transformToJson).then((data) => {
        // ...
        console.log(data);

        item.innerHTML = data.name;
        list.appendChild(item);
        item.appendChild(image);
        item.appendChild(weight);

        image.setAttribute("src",data.sprites.front_default);

        console.log(data);
    });
}

/**
 * fill the item list with values
 */
function fillList(json) {
    emptyList();
    json.results.forEach(createItem);
}

/**
 * Fill and display the description
 */
function showDescription(data) {
    description.classList.add("show");

    const fields = description.querySelectorAll("dd");
    fields.forEach((dd) => {
        // ...
    });
}

/**
 * Hide the description
 */
function hideDescription() {
    description.classList.remove("show");
}

// Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);
