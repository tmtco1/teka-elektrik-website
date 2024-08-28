const words = ["Uygun Fiyat", "Hızlı Servis", "Uzman Ekip", "Uzman Çözümler"];

const textElement = document.getElementById("interactive-text");
let currentIndex = 0;

function changeText() {
  textElement.classList.remove("animate__fadeIn", "animate__fadeOut");
  textElement.classList.add("animate__animated", "animate__fadeOut");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % words.length;
    textElement.textContent = words[currentIndex];
    textElement.classList.remove("animate__fadeOut");
    textElement.classList.add("animate__fadeIn");
    setTimeout(() => {
      textElement.classList.remove("animate__fadeIn");
    }, 1000);
  }, 1000);
}

// Change text every 2 seconds
setInterval(changeText, 2500);
