// Clothing Products Data
const clothingProducts = [
    {
        id: 1,
        name: "Printed Cotton Shirt",
        price: "₹2,999",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsfP2VsUNTkBSrUpRVI3p8d9e0NKM0svL-AgOxFLwQ9uZaQlW0C4Eo9YhyP1IhkoyuS_z3hfXpGv0TtREPtUFUYXiZoyRAfis8p195MgsIS8z-giRhQuTTvho&usqp=CAc",
        category: "shirts"
    },
    {
        id: 2,
        name: "Floral Summer Dress",
        price: "₹4,999",
        image: "https://uptownie.com/cdn/shop/files/3_b867e3cb-7323-4666-a345-c700026a4b4f_540x.png?v=1703580187",
        category: "dresses"
    },
    {
        id: 3,
        name: "Linen Casual Shirt",
        price: "₹3,499",
        image: "https://poe.net.in/cdn/shop/files/053A3620_3000x.jpg?v=1727342261",
        category: "shirts"
    },
    {
        id: 4,
        name: "Designer Anarkali Suit",
        price: "₹8,999",
        image: "https://www.aachho.com/cdn/shop/products/14_d1dc6190-bafc-4ef5-b032-254782583c94_1800x1800.jpg?v=1684510735",
        category: "ethnic"
    },
    {
        id: 5,
        name: "Classic White Shirt",
        price: "₹2,499",
        image: "https://dukaan.b-cdn.net/700x700/webp/media/7131134e-e4f4-4fc8-bbd5-3a00d438f0d9.png",
        category: "shirts"
    },
    {
        id: 6,
        name: "Palazzo Pants",
        price: "₹3,999",
        image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwef5ae7b7/images/ss24/btmwear20145ss24nvy_1.jpg?sw=242&sh=363",
        category: "pants"
    },
    {
        id: 7,
        name: "Embroidered Kurti",
        price: "₹4,499",
        image: "https://assets.ajio.com/medias/sys_master/root/20241122/tXhW/674013d9c148fa1b30de9789/-473Wx593H-700782895-yellow-MODEL.jpg",
        category: "ethnic"
    },
    {
        id: 8,
        name: "Maxi Dress",
        price: "₹5,999",
        image: "https://www.femmella.com/cdn/shop/files/Femella01171_7a5efb63-f4c6-4db4-b1d7-2363ca3e429b_800x.jpg?v=1726053700",
        category: "dresses"
    }
];

// Initialize variables
let currentProducts = [...clothingProducts];
let currentPage = 1;
const productsPerPage = 8;

// Render products function
function renderProducts(products, page = 1) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);
    
    const productGrid = document.querySelector('.clothing-grid');
    if (page === 1) {
        productGrid.innerHTML = '';
    }
    
    paginatedProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                        <a href="product-details.html?id=${product.id}" class="view-details">View Details</a>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });

    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (end >= products.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Filter products
function filterProducts() {
    const filterSelect = document.querySelectorAll('.filter-select');
    const categoryFilter = filterSelect[1].value;
    const sortBy = filterSelect[0].value;

    // Filter by category
    let filteredProducts = categoryFilter 
        ? clothingProducts.filter(product => product.category === categoryFilter)
        : [...clothingProducts];

    // Sort products
    switch(sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => 
                parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')));
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => 
                parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')));
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
    }

    currentProducts = filteredProducts;
    currentPage = 1;
    renderProducts(filteredProducts);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initial render
    renderProducts(clothingProducts);

    // Filter change event
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', filterProducts);
    });

    // Load more button click event
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderProducts(currentProducts, currentPage);
    });
});

// Add to cart function
function addToCart(productId) {
    const product = clothingProducts.find(p => p.id === productId);
    console.log('Added to cart:', product);
}
