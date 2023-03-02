const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const output = document.querySelector('.output')
let position = 1


//# for a id and . for a class

function renderNumber(number) {
    output.innerText = number;
}

renderNumber(position)


button.addEventListener('click', clickoutcome)

function clickoutcome () {
    position -=1;
    renderNumber(position)
}


button2.addEventListener('click', clickoutcome2)

function clickoutcome2 () {
    position +=1;
    renderNumber(position)
}
