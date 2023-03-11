// const dogImg = fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

function get_dog(){

url = "https://dog.ceo/api/breeds/image/random";

fetch (url)
.then(function(response) {
    return response.json();
})
.then(function(data){
    display_image(data.message)
})
.catch(function(error){
    console.log("Error: + error");
    });
}

function display_image(image_url){
    document.getElementById("image").src = image_url
    
}