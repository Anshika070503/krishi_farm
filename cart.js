function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(productItem);
    });
  }
  
  // Function to add product to cart
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      const cartItemsContainer = document.getElementById('cart-items');
      const cartItem = document.createElement('li');
      cartItem.textContent = `${selectedProduct.name} - $${selectedProduct.price}`;
      cartItemsContainer.appendChild(cartItem);
  
      updateCartTotal(selectedProduct.price);
    }
  }
  
  // Function to update cart total
  function updateCartTotal(price) {
    const cartTotalElement = document.getElementById('cart-total');
    const currentTotal = parseFloat(cartTotalElement.textContent.replace('$', ''));
    const newTotal = currentTotal + price;
    cartTotalElement.textContent = `$${newTotal.toFixed(2)}`;
  }
  
  // Initialize
  displayProducts();