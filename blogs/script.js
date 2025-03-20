    const text = " My First Solo Trip";
    const speed = 100; // Typing speed in milliseconds
    let index = 0;
    const delayBeforeRestart = 1000

    function typeText() {
        if (index < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        } else {
            setTimeout(() => {
                index = 0;
                document.getElementById("typing-text").textContent = ""; // Clear text
                typeText(); // Restart animation
            }, delayBeforeRestart);
        }
    }
    window.onload = typeText; // Start animation when page loads
    window.addEventListener("scroll", function() {
        var menu = document.getElementById("menu");
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        }
    });

    function toggleMenu() {
        var menu = document.getElementById("menu");
        console.log('hello');
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    }