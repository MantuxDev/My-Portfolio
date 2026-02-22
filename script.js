const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.link');
            const navbar = document.querySelector('.nav');

            // Cambia stile alla navbar quando si scende con lo scroll
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        
            // Toggle menu quando clicchi sull'hamburger
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        
           // 1. Seleziona tutti i link all'interno della navbar
            const linkItems = document.querySelectorAll('.nav-link'); 

            // 2. Cicla su ogni link e aggiungi l'evento click
            linkItems.forEach(link => {
                link.addEventListener('click', () => {
                    // Rimuove la classe active per chiudere il menu
                    navLinks.classList.remove('active');
                });
            });

            const track = document.querySelector(".track");
            const cards = Array.from(document.querySelectorAll(".card"));

            let index = 0;
            const cardWidth = cards[0].offsetWidth + 25;

            // evidenziazione card
            function updateCardsState() {
                cards.forEach((c, i) => {
                    c.classList.remove("active", "near");
                    if (i === index) c.classList.add("active");
                    if (i === index - 1 || i === index + 1) c.classList.add("near");
                });
            }

            // movimento
            function goTo(i) {
                index = Math.max(0, Math.min(i, cards.length - 1));
                track.style.transform = `translateX(-${index * cardWidth}px)`;
                updateCardsState();
                updateButtons();
            }

            // bottoni
            const prevBtn = document.getElementById("prevBtn");
            const nextBtn = document.getElementById("nextBtn");

            function updateButtons() {
                prevBtn.disabled = index === 0;
                nextBtn.disabled = index === cards.length - 1;
            }

            prevBtn.addEventListener("click", () => goTo(index - 1));
            nextBtn.addEventListener("click", () => goTo(index + 1));

            // inizializzazione
            updateCardsState();
            updateButtons();

            // Carousel Designer
            const trackDesigner = document.querySelector("#Graphic .track");
            const cardsDesigner = Array.from(trackDesigner.querySelectorAll(".cardDesign"));

            let indexDesigner = 0;
            const cardWidthDesigner = cardsDesigner[0].offsetWidth + 25;

            function updateCardsStateDesigner() {
                cardsDesigner.forEach((c, i) => {
                    c.classList.remove("active", "near");
                    if (i === indexDesigner) c.classList.add("active");
                    if (i === indexDesigner - 1 || i === indexDesigner + 1) c.classList.add("near");
                });
            }

            function goToDesigner(i) {
                indexDesigner = Math.max(0, Math.min(i, cardsDesigner.length - 1));
                trackDesigner.style.transform = `translateX(-${indexDesigner * cardWidthDesigner}px)`;
                updateCardsStateDesigner();
                updateButtonsDesigner();
            }

            const prevBtnDesigner = document.getElementById("prevBtnDesigner");
            const nextBtnDesigner = document.getElementById("nextBtnDesigner");

            function updateButtonsDesigner() {
                prevBtnDesigner.disabled = indexDesigner === 0;
                nextBtnDesigner.disabled = indexDesigner === cardsDesigner.length - 1;
            }

            prevBtnDesigner.addEventListener("click", () => goToDesigner(indexDesigner - 1));
            nextBtnDesigner.addEventListener("click", () => goToDesigner(indexDesigner + 1));

            updateCardsStateDesigner();
            updateButtonsDesigner();