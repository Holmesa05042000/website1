let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.productName} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
        total += item.price;
    });

    totalPrice.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const orderDetails = {
        name,
        address,
        cart,
        total: cart.reduce((total, item) => total + item.price, 0)
    };

    console.log('Order submitted:', orderDetails);
    alert(`Thank you for your order, ${name}!`);
    cart = [];
    updateCartDisplay();
    document.getElementById('orderForm').reset();
}
