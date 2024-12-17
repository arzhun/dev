// Minden gomb és menü elem lekérése
const openPopupBtns = document.querySelectorAll('.openPopupBtn');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Minden gombhoz eseménykezelőt adunk
openPopupBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(event) {
        // Az összes többi menüt bezárjuk
        dropdownMenus.forEach((menu, i) => {
            if (i !== index) {
                menu.classList.remove('show');
            }
        });

        // A kattintott gombhoz tartozó menüt megnyitjuk
        dropdownMenus[index].classList.toggle('show');
    });
});

// Ha a felhasználó kívül kattint a menü elrejtéséhez
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-container') && !event.target.closest('.openPopupBtn')) {
        dropdownMenus.forEach(menu => menu.classList.remove('show'));
    }
});