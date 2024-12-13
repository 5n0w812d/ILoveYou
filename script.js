// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const loveNoteButton = document.getElementById('loveNoteButton');
    const loveNote = document.getElementById('loveNote');

    // The surprise love note
    const noteMessage = "To my dearest Filipe, every day with you feels like a Christmas miracle. I'm so grateful for your love and everything we've built together. ❤️🎄 You are my favorite person in the world, and I can't wait to create many more beautiful memories with you. Merry Christmas, my love! 💌";

    // Add event listener to love note button
    loveNoteButton.addEventListener('click', function () {
        // Display the love note
        loveNote.textContent = noteMessage;
    });

    // Control background music
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicToggleButton = document.getElementById('musicToggleButton');
    
    // Play or pause music when the toggle button is clicked
    musicToggleButton.addEventListener('click', function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggleButton.textContent = "Pause Music 🎶";
        } else {
            backgroundMusic.pause();
            musicToggleButton.textContent = "Play Music 🎶";
        }
    });
});
