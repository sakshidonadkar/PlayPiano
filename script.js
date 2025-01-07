let pianoContainer = document.getElementsByClassName("piano-container");
const base = "./audio/";
const keyBindings = [
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'b', 
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
  'z', 'x', 'c', 'v'
];

window.onload = () => {
  for (let index = 1; index <= 24; index++) {
    let div = document.createElement("div");
    div.classList.add("key", index <= 10 ? "black-key" : "white-key", keyBindings[index - 1]);
    const number = index <= 9 ? "0" + index : index;
    div.addEventListener("click", () => {
      new Audio(`${base}key${number}.mp3`).play();
    });
    pianoContainer[0].appendChild(div);
  }
};

document.addEventListener('keypress', (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  const keyIndex = keyBindings.indexOf(key);
  if (keyIndex !== -1) {
    const number = keyIndex + 1 <= 9 ? "0" + (keyIndex + 1) : keyIndex + 1;
    new Audio(`${base}key${number}.mp3`).play();
  }
}

function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey);
  console.log(`Active button: ${activeButton}`); // Debugging line
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  } else {
    console.log(`No element found for key: ${currentKey}`); // Debugging line
  }
}