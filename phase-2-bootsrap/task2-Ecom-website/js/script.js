
function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white');
        } else {
            navbar.classList.remove('bg-white');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);