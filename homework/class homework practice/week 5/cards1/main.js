
const ul = document.getElementById('app');
const output = document.getElementById('output');



const handleClick = e => {
    const val = e.target.getAttribute('data-value');
        if (val) {
            const message = `You have clicked on ${val.toUpperCase()}`;
            output.innerText = message;
         } else {
            output.innerText = 'please click on a red box.';
         }
        };     
    
ul.addEventListener('click', handleClick);
