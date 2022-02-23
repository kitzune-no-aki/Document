const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');

for(let h1 of h1s){
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('#fbf8cc', 3000)
    .then(() =>delayedColorChange('#fde4cf',3000))
    .then(() =>delayedColorChange('#ffcfd2',3000))
    .then(() =>delayedColorChange('#f1c0e8',3000))
    .then(() =>delayedColorChange('#cfbaf0',3000))
    .then(() =>delayedColorChange('#a3c4f3',3000))
    .then(() =>delayedColorChange('#90dbf4',3000))
    .then(() =>delayedColorChange('#8eecf5',3000))
    .then(() =>delayedColorChange('#98f5e1',3000))
    .then(() =>delayedColorChange('#b9fbc0',3000))
    .then(() =>delayedColorChange('lightslategrey',3000))