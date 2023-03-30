let quote = document.getElementById('quote')
let showQuote = document.getElementById('show-quote')

showQuote.addEventListener('click', handleCLick)
// showQuote.addEventListener('click', getShowQuotes)

let animeArray = []
console.log(animeArray)
let displayQuote = []
let displayAuthor = []
let showArray = []
console.log(showArray)


async function handleCLick() {
    const anime = await getAnimeQuotes()
    const show = await getShowQuotes()
    
}


async function getAnimeQuotes() {
    // const request = await fetch('https://animechan.vercel.app/api/random')
    const request = await fetch ('https://animechan.vercel.app/api/quotes')
    const quote = await request.json() 
    console.log(quote)
    quote.forEach(element => {
        let anime = element.anime
        let character = element.character
        let quote = element.quote
        displayQuote.push(quote)
        displayAuthor.push(character)
        // console.log(displayQuote)
        if (displayQuote.length === 10) {
            displayQuote.forEach(e => {
                console.log(e)
                let div = document.createElement("div")
                let animediv = document.getElementById("anime")
                div.innerHTML= 
                `<button id=${character}>${e}</button>`
                animediv.appendChild(div)
                animeArray.push(quote)
                console.log(animeArray)
                // quote.forEach(e => {
                //     let character = e.character
                    // div.setAttribute("id",`${character}` )
                // }) 
            })

        }
    });
    }
    
    async function getShowQuotes () {
        const request = await fetch ("https://web-series-quotes-api.deta.dev/quote/?count=40")
        const response = await request.json()
        console.log(response)
        response.forEach(element => {
            let showQuotes = element.quote
            let author = element.author
            let series = element.series
            displayQuote.push(showQuotes)
            displayAuthor.push(author)
        });
        console.log(displayAuthor)
        displayAuthor.forEach(e => {
            let show = document.getElementById('show')
            console.log(e)
            let div = document.createElement("button")
            div.innerHTML = 
            `<h3>${e}</h3>`
            // // showArray.push()
            show.appendChild(div)
        })
    }
    const characterValue = document.getElementById(`${displayAuthor[0]}`)

//  characterValue.addEventListener('click', )