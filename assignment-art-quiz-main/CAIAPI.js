const body = document.getElementById('body');
const btn = document.getElementById('btn');
const prompt = document.getElementById('prompt');
const header = document.getElementById('header');
const imgCont = document.getElementById('imgCont');
const imgParent1 = document.getElementById('imgParent1');
const imgParent2 = document.getElementById('imgParent2');
const btnParent = document.getElementById('btnParent');

imgArray = [];
artistArray = [];
currentPg = [];

const getImgInfoFunc = async (dataUrl) => {
  //fetch request function 
  const response = await fetch(dataUrl);
  //converting into json
  const data = await response.json();
  //separating each imgs info
  return data;
}

const extractData = async (data) => {
  data.forEach(artwork => {
    const {imgData, iiif_url} = artwork;
    prepImgData(imgData, iiif_url);
    // extractArtistFunc(imgData);
  })
};

const prepImgData = (imgData, iiif_url) => {
  imgData.forEach(_imgData => {
      if(_imgData.image_id) {
        qInfoFunc(_imgData.image_id, iiif_url, _imgData.artist_title);
    }
  })
}

const qInfoFunc = async (imgURL, iiif, artistData) => {
    //using temporal literate syntax to build url from necessary components.
    const img = document.createElement('img');
    img.src = `${iiif}/${imgURL}/full/843,/0/default.jpg`;
    img.setAttribute('data-artist', `${artistData}`);
    imgArray.push(img);
    shuffleArray(imgArray);
    // console.log(imgArray);
}

const handleClick = async () => {
  const apiUrls = [];
  for (let i = 1; i < 5; i++) {
    let dataUrl = `https://api.artic.edu/api/v1/artworks?is_public_domain=true&page=${i}&limit=11&fields=image_id,artist_title,id,iiif_url`;
    const url = await getImgInfoFunc(dataUrl);
    const imgData = {
      iiif_url: url.config.iiif_url,
      imgData: url.data
    };
    apiUrls.push(imgData);
  }
  // console.log(apiUrls);
  extractData(apiUrls);
  qAggInfo(imgArray);
  qBuildFunc(currentPg);
  btn.className = 'hidden';
}

const qAggInfo = (imgArray) => {
  currentPg = [];
  for (let i = 0; i < 4; i++){
    // imgArray[Math.floor(Math.random() * imgArray.length)];
    // console.log(imgArray);
    const imgPick = imgArray.pop();
    if (i < 2){
      imgParent1.append(imgPick);
    } else {
      imgParent2.append(imgPick);
    }
    currentPg.push(imgPick);
  }
  console.log(currentPg);
  return currentPg;
}

const setBtnLink = (currentPg) => {
  const elements = body.querySelectorAll('button');
  for (let i = 0; i < 4; i++){
    const artistGrab = currentPg.shift();
    console.log(artistGrab);
    const artist = artistGrab.getAttribute('data-artist');
    elements[i].setAttribute('data-artist', `${artist}`);
  }

}

/**
 * It takes an array as an argument, and then it shuffles the array
 * @param currentPg - the current page of the array of images
 */
function shuffleArray(currentPg) {
 /* Taking the array and shuffling it. */
  for (let i = currentPg.length - 1; i > 0; i--) {
     /* Taking the array and shuffling it. */
      const j = Math.floor(Math.random() * (i + 1));
      /* Swapping the values of the array. */
      [currentPg[i], currentPg[j]] = [currentPg[j], currentPg[i]];
  }
}

const qBuildFunc = (currentPg) => {
  setBtnLink(currentPg);
  shuffleArray(currentPg);
  // console.log(currentPg);
  const randomPick = currentPg.pop();
  const scrapeArtist = randomPick.getAttribute("data-artist");
  const question = `Which artwork was created by ${scrapeArtist}`;
  prompt.innerText = question;
  return scrapeArtist;
}


const onClick = (scrapeArtist) => {
  const btnArray = btnCollector();
  for (let i = 0; i <= 3; i++){
    button = btnArray.pop();
    buttonId = button.getAttribute('data-artist');
    if (buttonId === scrapeArtist) {
      console.log(correct);
    }
  }
}

const btnCollector = () => {
  btnArray = [];
  const buttons = body.querySelectorAll('button');
  btnArray.push(buttons);
  return btnArray;
}

//to total the number of points create a final string interp saying take sum of total points and add a zero to it (e.g. `your score is ${sum}0`)

btn.addEventListener('click', handleClick);
btnParent.addEventListener('click', onClick);
// const iiif = data.config.iiif_url

// "https://api.artic.edu/api/v1/artworks?page=1&page=100"