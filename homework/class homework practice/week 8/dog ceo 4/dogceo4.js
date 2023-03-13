// const random = document.getElementById('random-dog');
const button = document.getElementsByTagName('button')[0];
const output = document.getElementById('output');
const thePrompt = document.getElementById('the-prompt')
button.addEventListener('click', handleCLick);
output.addEventListener('click', handleSelection);
url ='https://dog.ceo/api/breeds/image/random'


function handleCLick(e) {
    addImage();
};

function handleSelection(e) {
    const breed = e.target.getAttribute('data-breed');
    if (breed) {
        giveFeedback(breed === answer);
    }
}

function randomAnswer() {
    answer = breeds[Math.floor(Math.random() * breeds.length)];
    const prompt = document.createElement('div');
    prompt.innerText = `Which image shows the ${answer} breed?`;
    thePrompt.append(prompt);

}
function giveFeedback(isCorrect) {
    const feedback =document.createElement('div');
    const message = isCorrect ? 'Correct' : 'Inncorret';
    feedback.innerText = `That is ${message}!`;
    thePrompt.append(feedback);
}

let breeds = [];
let answer = ''

async function grabDog() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await request.json();
    const url = response.message;
    console.log(request, 'test');
    // return data;
    const breed = url.split('/')[4];
    breeds.push(breed);
    return {url, breed};
};

async function addImage() {
    output.innerHTML= '';
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.className = 'nimg';
        const img = document.createElement('img');
        const {url, breed} = await grabDog();
        img.src = url;
        img.setAttribute('data-breed', breed);
        div.append(img);
        output.append(div);
    }
    randomAnswer();
}

// function removeCurrentImg() {
//     output.hasChildNodes() && output.removeChild;
// }
