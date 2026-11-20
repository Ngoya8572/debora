
function openWebsite() {
    document.getElementById("welcome").classList.add("hide");

    createHearts(30);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function toggleMusic() {
    const song = document.getElementById("song");
    const btn = document.getElementById("musicBtn");

    if (song.paused) {
        song.play().then(() => {
            btn.innerHTML = "⏸ Pause Our Song 🎵";
        }).catch(() => {
            alert("Add your love-song.mp3 file inside the assets folder.");
        });
    } else {
        song.pause();
        btn.innerHTML = "▶ Play Our Song 🎵";
    }
}

function revealLove() {
    const message = document.getElementById("surpriseMessage");

    message.style.display = "block";

    createHearts(40);

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function createHearts(amount = 1) {
    const container = document.getElementById("hearts");

    const emojis = [
        "❤️", "💕", "💖", "🌹",
        "💗", "💝", "✨", "🥰"
    ];

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("span");

        heart.className = "heart";

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 8500);
    }
}

setInterval(() => {
    createHearts();
}, 1200);
