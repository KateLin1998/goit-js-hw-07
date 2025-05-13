const categoriesList = document.getElementById('categories');

const categories = categoriesList.getElementsByClassName('item');

console.log(`Total categories: ${categories.length}`);

for (let category of categories) {
  const categoryTitle = category.querySelector('h2').textContent;

  const categoryItems = category.querySelectorAll('ul li');

  console.log(`Category: ${categoryTitle}`);
  
  console.log(`Elements: ${categoryItems.length}`);
}
