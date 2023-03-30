const form = document.getElementById('form');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const stringified = stringifyFormData(data);
    console.log(stringified)
}

// function stringifyFormData(fd) {
//     const data = {
//         name: fd.get('name'),
//         address: fd.get('address'),
//         cellPhone: fd.get('cell-phone'),
//         email: fd.get('email'),
//     };
//     return JSON.stringify(data);
// }


/**
 * It takes a FormData object and returns a JSON string
 * @param fd - The FormData object you want to convert to JSON.
 * @returns a stringified version of the form data.
 */
function stringifyFormData(fd) {
  /* Creating an empty object. */
    let data = {};
   /* Iterating over the keys of the FormData object. */
    for (let key of fd.keys()){
        console.log()
        /* Assigning the value of the key to the key. */
        data[key] = fd.get(key);
    }
    return JSON.stringify(data);
}