  // Rotating text between Crackers and Pathaka
      const rotatingWord = document.getElementById("rotatingWord");
      const words = ["Crackers", "Pathaka","पटाखा"];
      let currentWordIndex = 0;

      setInterval(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        rotatingWord.textContent = words[currentWordIndex];
      }, 2000);


         const products = [
            { id: 1, name: '7G Assorted Fountain (5 Piece)', price: 150, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 2, name: 'Sparklers Gold (10 Pack)', price: 80, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 3, name: 'Flower Pots Deluxe (6 Piece)', price: 200, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 4, name: 'Rocket Collection (12 Piece)', price: 350, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 5, name: 'Chakkar Supreme (8 Piece)', price: 180, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 6, name: 'Sky Shot Magic (10 Piece)', price: 450, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 7, name: 'Colorful Bomb Set (15 Piece)', price: 280, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 8, name: 'Aerial Fantasy (20 Shots)', price: 650, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 9, name: 'Ground Spinner Combo', price: 120, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 10, name: 'Mega Celebration Pack', price: 1200, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 11, name: 'Rainbow Fountain (7 Piece)', price: 220, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' },
            { id: 12, name: 'Electric Crackers Bundle', price: 390, image: 'https://www.sonnyvinayagashop.com/wp-content/uploads/2021/09/IMG_20231002_183116__01-600x333.jpg' }
        ];

        const productsContainer = document.getElementById('productsContainer');

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <div class="thumb">
                <img src="${product.image}" alt="${product.name}" width=200 ></div>
                <div class="product-content">
                    <div class="title">${product.name}</div>
                    <div class="price">₹${product.price}</div>
                </div>
            `;
            productsContainer.appendChild(card);
        });

// ===== Carousel population & behavior =====

const customImages = [
  { image: "https://i.ibb.co/SXYNs4vv/hindi-poster-offer.png", name: "Slide 1" },
  { image: "https://i.ibb.co/yckd3NPC/hindi-poster-offer-packs.png", name: "Slide 2" },
  { image: "https://i.ibb.co/RG7QN9mw/poster-offer.png", name: "Slide 3" },
  { image: "https://i.ibb.co/yckd3NPC/hindi-poster-offer-packs.png", name: "Slide 4" },
//   { image: "images/slide5.jpg", name: "Slide 5" },



];

// Use custom images instead of products

(() => {
    const carousel = document.getElementById('heroCarousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel__track');
    const prevBtn = carousel.querySelector('.carousel__control--prev');
    const nextBtn = carousel.querySelector('.carousel__control--next');
    const nav = carousel.querySelector('.carousel__nav');

    // Use first 5 products as featured slides (or fewer if not available)
    // const slidesData = products.slice(0, Math.min(products.length, 5));
    const slidesData = customImages.slice(0, 5);

    slidesData.forEach((p, index) => {
        const li = document.createElement('li');
        li.className = 'carousel__slide';
        li.setAttribute('data-index', index);
        li.innerHTML = `<img src="${p.image}" alt="${p.name}">`;
        track.appendChild(li);

        const indicator = document.createElement('button');
        indicator.className = 'carousel__indicator';
        indicator.setAttribute('data-index', index);
        if (index === 0) indicator.setAttribute('aria-current', 'true');
        nav.appendChild(indicator);
    });

    const slides = Array.from(track.children);
    const indicators = Array.from(nav.children);
    let currentIndex = 0;
    let autoplayId = null;

    function updateCarousel(index) {
        index = (index + slides.length) % slides.length;
        const offset = index * -100;
        track.style.transform = `translateX(${offset}%)`;
        indicators.forEach(btn => btn.removeAttribute('aria-current'));
        indicators[index].setAttribute('aria-current', 'true');
        currentIndex = index;
    }

    function next() { updateCarousel(currentIndex + 1); }
    function prev() { updateCarousel(currentIndex - 1); }

    nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });
    prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });

    indicators.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.getAttribute('data-index'));
            updateCarousel(idx);
            resetAutoplay();
        });
    });

    // keyboard support
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });
    carousel.tabIndex = 0;

    // autoplay
    function startAutoplay() {
        stopAutoplay();
        autoplayId = setInterval(next, 3500);
    }
    function stopAutoplay() { if (autoplayId) { clearInterval(autoplayId); autoplayId = null; } }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // init
    updateCarousel(0);
    startAutoplay();
})();