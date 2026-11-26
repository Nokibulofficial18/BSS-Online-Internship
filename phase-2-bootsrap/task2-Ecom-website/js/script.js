
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

const reviewCards = document.getElementById('review-customer-card');
const customerCards = document.getElementById('customer-cards');

const nextReviewDeck = document.getElementById('nextReviewBtn');
const prevReviewDeck = document.getElementById('prevReviewBtn');

nextReviewDeck.addEventListener('click', ()=>{
    const nextCustomerCard = customerCards.firstElementChild;
    customerCards.appendChild(nextCustomerCard);
});

prevReviewDeck.addEventListener('click',()=>{
    const prevCustomerCard = customerCards.lastElementChild;
    customerCards.prepend(prevCustomerCard);
});


document.addEventListener('DOMContentLoaded', userScroll);