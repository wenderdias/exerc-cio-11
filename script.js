const lamp = document.getElementById('lamp');
const toggleButton = document.getElementById('toggleButton');
const lampContainer = document.getElementById('lamp-container');

let isLampOn = false;

toggleButton.addEventListener('click', () => {
  isLampOn = !isLampOn;
  updateLamp();
});

function updateLamp() {
  if (isLampOn) {
    lamp.src = 'lamp-on.png';
    toggleButton.textContent = 'Apagar';
    lampContainer.style.backgroundColor = '#FFD700'; 
  } else {
    lamp.src = 'lamp-off.png';
    toggleButton.textContent = 'Acender';
    lampContainer.style.backgroundColor = '#333'; 
  }
}
