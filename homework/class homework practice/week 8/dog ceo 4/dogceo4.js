// const random = document.getElementById('random-dog');
const button = document.getElementsByTagName('button')[0];
const output = document.getElementById('output');
button.addEventListener('click', handleCLick);
// output.addEventListener('click', handleSelection);
url ='https://dog.ceo/api/breeds/image/random'


function handleCLick(e) {
    addImage();
};

// function handleSelection(e) {
//     const breed = e.target.getAttribute('data-breed');
//     if (breed) {
//         console.log('hit', breed === answer);
//     }
// }

// function randomAnswer() {
//     answer = breeds[Math.floor(Math.random() * breeds.length)];
//     const prompt = document.createElement('div');
//     prompt.innerText = `Which image shows the ${answer} breed?`;
//     thePrompt.append(prompt);

// }

async function grabDog() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await request.json();
    const data = response.message;
    console.log(request, 'test');
    return data;
    // const breed = url.split('/')[4];
    // breeds.push(breed);
    // return {url, breed};
};

let breeds = [];
let answer = ''

async function addImage() {
    output.innerHTML= '';
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.className = 'nimg';
        const img = document.createElement('img');
        const url = await grabDog();
        img.src = url;
        // img.setAttribute('data-breed', breed);
        div.append(img);
        output.append(div);
    }
}

// function removeCurrentImg() {
//     output.hasChildNodes() && output.removeChild;
// }
