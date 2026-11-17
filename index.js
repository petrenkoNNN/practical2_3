const prices = [100, 500, 250, 750, 300];

const listEl = document.querySelector('.price-list');
const sortAscBtnEl = document.querySelector('.sort-asc');
const sortDescBtnEl = document.querySelector('.sort-desc');

const renderPrices = () => {
  listEl.innerHTML = '';

  prices.forEach((price) => {
    const itemEl = document.createElement('li');
    itemEl.textContent = price;
    listEl.appendChild(itemEl);
  });
};

const sortAsc = () => {
  prices.sort((a, b) => a - b);
};

const sortDesc = () => {
  prices.sort((a, b) => b - a);
};

sortAscBtnEl.addEventListener('click', () => {
  sortAsc();
  renderPrices();
});

sortDescBtnEl.addEventListener('click', () => {
  sortDesc();
  renderPrices();
});

renderPrices();