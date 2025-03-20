document.addEventListener("DOMContentLoaded", function () {
    let img = document.querySelector("#imageContainer img");

    if (!img) {
        console.error("Image not found!");
        return;
    }

    img.style.opacity = "0";
    img.style.transform = "translateY(80%) scale(0.1)";
    img.style.transition = "transform 1.5s ease-out";
    img.offsetHeight;
    setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "translateY(0) scale(1)";
    }, 100);
});


document.addEventListener("DOMContentLoaded", function () {
    let contentDiv = document.querySelector("#contentDiv"); 
    if (!contentDiv) {
        console.error("Content div not found!");
        return;
    }
    contentDiv.style.opacity = "0";
    contentDiv.style.transform = "scale(0.6)";
    contentDiv.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-in";

    setTimeout(() => {
        contentDiv.style.opacity = "1";
        contentDiv.style.transform = "scale(1)";
    }, 100);
});




window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    if (window.scrollY > window.innerHeight - 50) {
        header.classList.remove("transparent");
        header.classList.add("solid");
    } else {
        header.classList.remove("solid");
        header.classList.add("transparent");
    }
});