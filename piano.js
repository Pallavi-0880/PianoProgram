const pianokeys = document.querySelectorAll(".piano-key .key") 
// let keycheckbox = document.querySelector(".key-checkbox input")
let volumeSlider = document.querySelector(".volume-slider input")

// console.log(pianokeys)
let allkeys = [];
 audio = new Audio ("tunes/a.wav");
 const playTune = (key) =>{
    audio.src = `tunes/tunes/${key}.wav`
    audio.play();
    // console.log(keys);
    const clickedkey = document.querySelector(`[data-key = "${key}"]`);
    clickedkey.classList.add("active");
}

pianokeys.forEach(key =>{
    allkeys.push(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key));
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
}
volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
    pianokeys.forEach(key => {
        // console.log(key);
        key.classList.toggle("hide")
    })
}
keycheckbox.addEventListener("click", showHideKeys);

const pressedkey = (e) => {
    // console.log(e)
    if (allkeys.includes(e.key))
        playTune(e.key)
}


document.addEventListener("keydown", pressedkey);