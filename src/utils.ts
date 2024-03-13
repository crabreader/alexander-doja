export function toggleMenu() {
    const x = document.querySelector<HTMLElement>(".navbar");

    if (x) {
        if (x.style.display === "block") {
        x.style.display = "none";
        } else {
            x.style.display = "block";
        }   
    }
}