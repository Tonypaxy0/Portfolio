function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    nav.style.boxShadow =
        window.scrollY > 50
            ? "0 10px 30px rgba(0,0,0,0.3)"
            : "none";
});