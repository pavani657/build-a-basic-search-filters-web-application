const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Kiwi',
    'Lemon',
    'Mango',
    'Orange',
    'Peach',
    'Pear',
    'Pineapple',
    'Strawberry',
    'Watermelon'
];


function renderFruitList(filteredFruits) {
    const fruitList = document.getElementById('fruitList');
    fruitList.innerHTML = '';
    filteredFruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}


document.getElementById('searchBar').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(searchTerm));
    renderFruitList(filteredFruits);
});


renderFruitList(fruits);
