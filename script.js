fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(product => {
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      `;
      list.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Error loading products:', error);
  });

const list = document.getElementById('product-list');
products.forEach(product => {
  const item = document.createElement('div');
  item.className = 'product';
  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  `;
  list.appendChild(item);
});
