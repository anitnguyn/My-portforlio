document.addEventListener('DOMContentLoaded', () => {
    // 1. Xử lý Menu Hamburger (Mobile)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Đóng menu khi click vào link (trên Mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Đổ dữ liệu Game yêu thích (Lab 8 - Bài 2)
    const favoriteGames = [
        { name: 'LMHT', img: 'images/lmht.jpeg' },
        { name: 'Valorant', img: 'images/valorant.jpg' },
        { name: 'PUBG', img: 'images/pubg.jpg' },
        { name: 'Dead By Daylight', img: 'images/deadbydaylight.jpg' }
    ];

    const gameContainer = document.getElementById('game-list');

    if (gameContainer) {
        favoriteGames.forEach(game => {
            // Tạo thẻ div cho mỗi game
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
            gameCard.innerHTML = `
                <div class="game-img-wrapper">
                    <img src="${game.img}" alt="${game.name}" onerror="this.src='https://via.placeholder.com/150?text=${game.name}'">
                </div>
                <h4>${game.name}</h4>
            `;
            
            // Hiệu ứng tương tác bằng JS
            gameCard.addEventListener('mouseenter', () => {
                gameCard.style.boxShadow = '0 10px 20px rgba(56, 189, 248, 0.2)';
            });
            
            gameCard.addEventListener('mouseleave', () => {
                gameCard.style.boxShadow = 'none';
            });

            gameContainer.appendChild(gameCard);
        });
    }
});