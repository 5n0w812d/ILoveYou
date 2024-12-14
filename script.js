document.addEventListener('DOMContentLoaded', function () {
    const loveNoteButton = document.getElementById('loveNoteButton');
    const loveNote = document.getElementById('loveNote');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicToggleButton = document.getElementById('musicToggleButton');
    
    // The surprise love note
    const noteMessage = "To my dearest Filipe, every day with you feels like a Christmas miracle. I'm so grateful for your love and everything we've built together. ❤️🎄 You are my favorite person in the world, and I can't wait to create many more beautiful memories with you. Merry Christmas, my love! 💌";

    loveNoteButton.addEventListener('click', function () {
        loveNote.textContent = noteMessage;
    });

    musicToggleButton.addEventListener('click', function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggleButton.textContent = "Pause Music 🎶";
            triggerConfetti(); // Trigger confetti animation
        } else {
            backgroundMusic.pause();
            musicToggleButton.textContent = "Play Music 🎶";
        }
    });

    // Confetti logic
    function triggerConfetti() {
        var confettiCount = 50;  // Number of confetti particles
        for (let i = 0; i < confettiCount; i++) {
            var confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random duration for falling speed
            document.body.appendChild(confetti);

            // Remove confetti after animation ends
            setTimeout(function() {
                confetti.remove();
            }, 3000);  // Duration of animation
        }
    }
});
