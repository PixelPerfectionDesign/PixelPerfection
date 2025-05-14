document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Redirecting to our services page!");
    });
});
document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.querySelectorAll("#contact, .contact-info, form").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

window.addEventListener("scroll", () => {
    document.querySelectorAll("#contact, .contact-info, form").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});