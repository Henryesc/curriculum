url = "https://api.artic.edu/api/v1/artworks";
const startQuiz = document.getElementById("start-quiz");
const output = document.getElementById('output');
startQuiz.addEventListener('click', getArt)


/* This is an async function that is fetching the data from the API. */
async function getArt() {
    const request = await fetch('https://api.artic.edu/api/v1/artworks');
    const response = await request.json();
    const dataArray = response.data
    dataArray.forEach(element => {
        let title = element.title
        let id = element.id
        let div = document.createElement("div")
        let newdiv = document.getElementById("title")
        // console.log(title, " ; ",id)
        div.innerHTML= `
        <h3>${title}</h3>`
        newdiv.appendChild(div)
    });
    const url = response.message;
    // console.log(request, 'test');
    // return data;
}

getArt()



// const body = document.getElementById('body');
// const btn = document.getElementById('btn');

// const getImgInfoFunc = async () => {
//   //fetch request function 
//   const response = await fetch('https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id');
//   //converting into json
//   const data = await response.json();
//   //gathering iiif http link
//   const iiif = data.config.iiif_url;
//   //getting img id
//   const imageId = data.data.image_id;
//   //cacheing both
//   return {iiif, imageId};
//   // use this format to build img urls
//   // https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
// }

// const buildImgUrlFunc = async () => {
//   //gathering both necessary components from prior function. 
//   //this needs to be async to allow time for the first function to gather info.
//   const {iiif, imageId} = await getImgInfoFunc();
//   let img = document.createElement('img');
//   //using temporal literate syntax to build url from necessary components.
//   img.src = `${iiif}/${imageId}/full/843,/0/default.jpg`;
//   console.log(img.src)
//   body.append(img);
// }



// async function gatherId() {
    
// }



// // "https://api.artic.edu/api/v1/artworks?page=1"

// //to total the number of points create a final string interp saying take sum of total points and add a zero to it (e.g. `your score is ${sum}0`)

// btn.addEventListener('click', buildImgUrlFunc);
// // const iiif = data.config.iiif_url
