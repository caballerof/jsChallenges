const menu = [
  {
    name: 'Chicken parmesan',
    isVegetarian: false
  },
  {
    name: 'Stuffed shells',
    isVegetarian: true
  },
  {
    name: 'Spaghetti and meatballs',
    isVegetarian: false
  },
  {
    name: 'Tiramisu',
    isVegetarian: true
  }
];

function filterDishes(menu) {
  const menuNode = document.querySelector('#menu');
  const dishes = filterVegetarianFood(menu);
  const optionsHtml = generateVegetarianOption(dishes);

  optionsHtml.forEach(option => {
    menuNode.appendChild(option);
  });
}

function filterVegetarianFood(menu) {
  const vegetarianOptions = menu.filter(option => option.isVegetarian);

  return vegetarianOptions;
}

function generateVegetarianOption(dishes) {
  const menuElements = dishes.map( option => {
    const dish = document.createElement('li');
    dish.textContent = option.name;

    return dish;
  });

  return menuElements;
}

filterDishes(menu);
