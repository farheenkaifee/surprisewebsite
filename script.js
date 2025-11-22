// function showMessage() {
//     document.getElementById("hiddenMessage").style.display = "block";
// }


// Typewriter Effect
// const text = "Wishing you a day full of happiness, love, and unforgettable moments! 🎉";
// let index = 0;

// function typeWriter() {
//     if (index < text.length) {
//         document.getElementById("typewriter").innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, 50);
//     }
// }
// window.onload = typeWriter;

// // Surprise Message
// function showMessage() {
//     document.getElementById("hiddenMessage").style.display = "block";
// }

// // Confetti Effect
// const canvas = document.getElementById("confetti");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let confettiPieces = [];

// function ConfettiPiece() {
//     this.x = Math.random() * canvas.width;
//     this.y = Math.random() * canvas.height - canvas.height;
//     this.size = Math.random() * 8 + 3;
//     this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     this.speed = Math.random() * 3 + 1;

//     this.update = function () {
//         this.y += this.speed;
//         if (this.y > canvas.height) this.y = -10;
//     };

//     this.draw = function () {
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x, this.y, this.size, this.size);
//     };
// }

// for (let i = 0; i < 150; i++) confettiPieces.push(new ConfettiPiece());

// function animateConfetti() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     confettiPieces.forEach(p => { p.update(); p.draw(); });
//     requestAnimationFrame(animateConfetti);
// }
// animateConfetti();


let currentPage = 1;

function nextPage() {
    const pages = document.querySelectorAll(".page");

    pages[currentPage - 1].classList.remove("active");
    currentPage++;

    if (currentPage > pages.length) currentPage = pages.length;

    pages[currentPage - 1].classList.add("active");
}
