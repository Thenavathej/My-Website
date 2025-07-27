const musicElements = [
    document.getElementById("music1"),
    document.getElementById("music2"),
    document.getElementById("music3")
];

let currentIndex = 0;

// Function to play the current audio
function playCurrent() {
    stopAll();
    musicElements[currentIndex].play();
}

// Stop all audios
function stopAll() {
    musicElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Go to next song
function forward() {
    stopAll();
    currentIndex = (currentIndex + 1) % musicElements.length;
    playCurrent();
}

// Go to previous song
function backward() {
    stopAll();
    currentIndex = (currentIndex - 1 + musicElements.length) % musicElements.length;
    playCurrent();
}

// Pause current audio
function pause() {
    musicElements[currentIndex].pause();
}

// Clicking an individual music container to play that song
document.getElementById("play1").addEventListener("click", function () {
    stopAll();
    currentIndex = 0;
    playCurrent();
});

document.getElementById("play2").addEventListener("click", function () {
    stopAll();
    currentIndex = 1;
    playCurrent();
});

document.getElementById("play3").addEventListener("click", function () {
    stopAll();
    currentIndex = 2;
    playCurrent();
});
