
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    const products = res.products;
    const box = document.getElementById('box');

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p class="description"><strong>Description:</strong> ${product.description}</p>
        <p class="price">₹${product.price}</p>
        <p><strong>Stock:</strong> ${product.stock}</p>
      `;

      // Add click event to go to details.html with selected product
      card.addEventListener('click', () => {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'details.html';
      });

      box.appendChild(card);
    }
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
    document.getElementById("box").innerHTML = "<p>Failed to load products.</p>";
  });

