
const cards = document.querySelectorAll('.card');
const totalPriceContainer = document.getElementById('total-price');


let totalPrice = 0;

function updateTotalPrice() {
  totalPrice = 0;
  cards.forEach((card) => {
    const quantity = parseInt(card.querySelector('.qute').textContent);
    const unitPrice = parseInt(card.querySelector('.unitt-price').textContent);
    totalPrice += quantity * unitPrice;
  });
  totalPriceContainer.textContent = totalPrice;
}
cards.forEach((card) => {
  const plusButton = card.querySelector('.fa-plus-circle');
  const minusButton = card.querySelector('.fa-minus-circle');
  const quantitySpan = card.querySelector('.qute');

  plusButton.addEventListener('click', () => {
    const currentQuantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = currentQuantity + 1;
    updateTotalPrice();
  });

  minusButton.addEventListener('click', () => {
    const currentQuantity = parseInt(quantitySpan.textContent);
    if (currentQuantity > 0) {
      quantitySpan.textContent = currentQuantity - 1;
      updateTotalPrice();
    }
  });
});
cards.forEach((card) => {
  const trashButton = card.querySelector('.fa-trash-alt');
  trashButton.addEventListener('click', () => {
    card.remove();
    updateTotalPrice();
  });
});

cards.forEach((card) => {
  const heartButton = card.querySelector('.fa-heart');
  heartButton.addEventListener('click', () => {
    heartButton.classList.toggle('liked');
  });
});
updateTotalPrice();