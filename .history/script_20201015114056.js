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
    list.innerHTML = "";
}

/**
 * Create an item, fetch its data and setup event listener
 */
function createItem(pokemon) {

    // Create a li tag
    const item = document.createElement("li");
    const image = document.createElement("img");
    const weight = document.createElement("p");
    const id = document.createElement("p");
    
    fetch(pokemon.url).then(transformToJson).then((data) => {
        // ...

        item.innerHTML = data.name;
        list.appendChild(item);
        item.appendChild(image);
        item.appendChild(weight);
        item.appendChild(id);
        

        image.setAttribute("src",data.sprites.front_default);
        weight.innerText = data.weight;
        id.innerText = data.id;
        item.addEventListener('click', ()=> ;
            showDescription(data);

        
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
    console.log(data);
    field.forEach(dd => {
        dd.innerHTML = "";
        const para = dd.className;
        if (para == "types"){

            dd.innerHTML = "";
            console.log(data.types)
            data.types.forEach(dd => {
                console.log(data.types.name); 
                dd.innerHTML += "<div class='type'>" + type.type.name + "</div>";
                console.log(dd);
            } ); 
        } else {
            dd.innerText = data[para];
        }
    });
}
/**
 * Hide the description
 */
function hideDescription() {
    description.classList.remove("show");
    const fields= description.querySelectorAll("dd");
    field.forEach(dd => {
        dd.innerHTML = "";
})

// Fetch the API end-point and fill the list
}
fetch(api).then(transformToJson).then(fillList);
