let quote = document.getElementById("quote");
let showQuote = document.getElementById("startQuiz");
let ca = document.getElementById("character-author");

showQuote.addEventListener('click', cacheApi)

// const _breakingBadArray = await getBreakingBad;
// const _gameOfThronesArray = await getGameOfThrones;

breakingBadArray = []
gameOfThronesArray = []


async function cacheApi() {
    const breakingB = await getBreakingBad();
    const GoT = await getGameOfThrones();
  
}


async function getBreakingBad() {
    const request = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/25");
    const response = await request.json();
    breakingBadArray = response;
    return response
}


async function getGameOfThrones() {
    const request = await fetch("https://api.gameofthronesquotes.xyz/v1/random/25");
    const response = await request.json();
    gameOfThronesArray = response;
    return response
}

async function formatGameOfThrones () {
    const formatedGoT = gameOfThronesArray
}