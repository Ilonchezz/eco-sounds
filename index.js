const button = document.getElementById('play-button');
const forest = document.getElementById('forest');
const drozd = document.getElementById('drozd');
const javoronok = document.getElementById('javoronok');
const slavka = document.getElementById('slavka');
const solovey = document.getElementById('solovey');
const zarynka = document.getElementById('zarynka');
const main = document.getElementById('main');

const audio = new Audio('./assets/audio/forest.mp3');
let isPlaying = false;

button.onclick = function() {
    if (button.src.endsWith('/assets/svg/play.svg')) {
        play();
    } else {
        button.src = './assets/svg/play.svg';
        audio.pause();
        isPlaying = false;
    }
};

drozd.onclick = onButtonClicked;
forest.onclick = onButtonClicked;
javoronok.onclick = onButtonClicked;
slavka.onclick = onButtonClicked;
solovey.onclick = onButtonClicked;
zarynka.onclick = onButtonClicked;

function onButtonClicked(e) {
    audio.src = `./assets/audio/${e.target.id}.mp3`;
    audio.load();
    play();
    main.style.backgroundImage = `url(./assets/img/${e.target.id}.jpg)`;
}

function play() {
    button.src = './assets/svg/pause.svg';
    audio.play();
    isPlaying = true;
}