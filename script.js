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