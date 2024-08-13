document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li a");
    let current = "";
    const items = document.querySelectorAll('.timeline-item');

    // Detecta la sección activa basada en el scroll
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    // Actualiza la clase activa en la navegación
    navLi.forEach(li => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });

    // Configura el observer para los elementos de la línea de tiempo
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: [0.25, 0.5, 0.75] // Cuánto del item debe estar visible para activarse
    });

    // Observa cada item de la línea de tiempo
    items.forEach(item => {
        observer.observe(item);
    });
});
