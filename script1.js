// Optional: Add JavaScript for advanced control (not required for basic hover)
document.querySelector(".work").addEventListener("mouseenter", () => {
    document.querySelectorAll(".work-part").forEach(part => {
        part.classList.add("hovered");
    });
});

document.querySelector(".work").addEventListener("mouseleave", () => {
    document.querySelectorAll(".work-part").forEach(part => {
        part.classList.remove("hovered");
    });
});