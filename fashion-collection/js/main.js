// Product Data
const products = [
    {
        id: 1,
        name: "Printed Cotton Shirt",
        price: "₹1,499",
        image: "https://cdn.shopify.com/s/files/1/0536/3594/0515/files/TCI-1176-1_360x.jpg?v=1684484638",
        images: [],
        description: "",
        features: [],
        category: "Western Wear"
    },
    {
        id: 2,
        name: "Designer Saree",
        price: "₹15,999",
        image: "https://monikanidhii.com/cdn/shop/products/00100lrPORTRAIT_00100_BURST20200208000431842_COVER_Original_400x.jpg?v=1624966787",
        images: [],
        description: "",
        features: [],
        category: "Ethnic Wear"
    },
    {
        id: 3,
        name: "Printed Maxi Dress",
        price: "₹8,999",
        image: "https://uptownie.com/cdn/shop/files/default_2_3_b7d86a64-54e0-4533-97f2-7203323ae1c0_540x.jpg?v=1717673253",
        images: [],
        description: "",
        features: [],
        category: "Western Wear"
    },
    {
        id: 4,
        name: "Statement Necklace",
        price: "₹4,999",
        image: "https://www.amama.in/cdn/shop/files/JBRMR24NK38_1.jpg?v=1719576281&width=1000",
        images: [],
        description: "",
        features: [],
        category: "Accessories"
    }
];

// Make products available globally
window.products = products;

// Render Products
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3><a href="product-details.html?id=${product.id}">${product.name}</a></h3>
                    <p class="price">${product.price}</p>
                    
                    <div class="product-actions">
                        <button class="view-details" onclick="window.location.href='product-details.html?id=${product.id}'">View Details</button>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Add to Cart Function
function addToCart(productId) {
    // Implement cart functionality
    console.log(`Product ${productId} added to cart`);
}

// Quick View Function
function quickView(productId) {
    // Implement quick view functionality
    console.log(`Quick view for product ${productId}`);
}

// Sticky Navigation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        // Implement newsletter subscription
        console.log(`Newsletter subscription for: ${email}`);
        this.reset();
        alert('Thank you for subscribing to our newsletter!');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});
