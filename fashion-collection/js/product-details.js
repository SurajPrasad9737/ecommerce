// Get product data
function getProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Get products from window.products or use default data
    const products = window.products || [
       
    ];

    return products.find(p => p.id === productId) || products[0];
}

// Initialize product details page
document.addEventListener('DOMContentLoaded', function() {
    const product = getProductData();
    
    // Update product details
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.product-price').textContent = product.price;
    document.querySelector('.product-description').textContent = product.description;
    
    // Update main image
    const mainImage = document.querySelector('.main-image img');
    mainImage.src = product.image;
    mainImage.alt = product.name;
    
    // Update features list
    const featuresList = document.querySelector('.features-list');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Initialize size selection
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Initialize quantity controls
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-input');

    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });

    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value);
        if (value < 1) value = 1;
        if (value > 10) value = 10;
        quantityInput.value = value;
    });

    // Add to cart functionality
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-btn.active');
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }

        const quantity = quantityInput.value;
        const size = selectedSize.dataset.size;

        // Add success animation
        const originalText = addToCartBtn.textContent;
        addToCartBtn.textContent = '✓ Added to Cart';
        addToCartBtn.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            addToCartBtn.textContent = originalText;
            addToCartBtn.style.backgroundColor = '';
        }, 1500);

        console.log(`Added to cart: ${quantity} x ${product.name} (Size: ${size})`);
    });
});
