const form = document.getElementById('form');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const stringified = stringifyFormData(data);  
    fetchData(stringified)
}

/**
 * It takes a FormData object and returns a JSON string
 * @param fd - The FormData object you want to convert to JSON.
 * @returns a stringified version of the form data.
 */
function stringifyFormData(fd) {
  /* Creating an empty object. */
    let data = {
        query: {
            term: {
                is_public_domain: true
            }
        }
    };
   /* Iterating over the keys of the FormData object. */
    for (let key of fd.keys()){
        console.log()
        /* Assigning the value of the key to the key. */
        data[key] = fd.get(key);
    }
    return JSON.stringify(data);
}

async function fetchData(body) {
    const response= await fetch('https://api.artic.edu/api/v1/artworks/search', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    });
    const data = await response.json();
    renderSearchResults(data);
}

function renderSearchResults(data) {
    
}