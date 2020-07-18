for (let i = 0; i <= 1500; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}
const randomColorBlock = document.querySelectorAll('.box');

const addColors = () => {
    randomColorBlock.forEach(block => {
        block.style.backgroundColor = randomColor();
    })
}
const randomColor = () => {
    let chars = "1234567890abcdef";
    let colorLength = 6;
    let color = "";
    for (let i = 0; i < colorLength; i++) {
        let randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
}
addColors();