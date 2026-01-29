// Products data array for Deeba's Thread - Handmade Bead Bags
const products = [
    {
        id: 1,
        slug: "offwhite-bead-bag",
        name: "Offwhite bead bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Bead Bags",
        description: "An elegant handmade offwhite bead bag crafted with fine-quality beads. Perfect for casual outings and semi-formal occasions, offering a graceful and minimal look.",
        inStock: true
    },
    {
        id: 2,
        slug: "multi-bead-bag-premium",
        name: "Multi bead bag .",
        price: 6000,
        image: "images/product_2.png",
        category: "Bead Bags",
        description: "A vibrant handmade multi bead bag designed with colorful beads. Stylish and eye-catching, ideal for adding a bold statement to your outfit.",
        inStock: true
    },
    {
        id: 3,
        slug: "black-potli-bag-with-extra-cross-body-strap",
        name: "Black potli bag with extra cross body strap",
        price: 10000,
        image: "images/product_3.jpeg",
        category: "Bead Bags",
        description: "A luxurious handmade black potli bead bag featuring an extra crossbody strap. Perfect for weddings, parties, and formal events with versatile styling options.",
        inStock: true
    },
    {
        id: 4,
        slug: "mehroon-circle-bead-bag",
        name: "Mehroon circle bead bag",
        price: 6000,
        image: "images/product_4.jpeg",
        category: "Bead Bags",
        description: "A beautifully handcrafted mehroon circle bead bag with a unique round shape. Ideal for festive wear and special occasions.",
        inStock: true
    },
    {
        id: 5,
        slug: "transparrent-shaded-bead-pouch-with-heart-shape-front-decoration",
        name: "Transparrent shaded bead pouch with heart shape front decoration",
        price: 4000,
        image: "images/product_5.png",
        category: "Bead Bags",
        description: "A charming transparent shaded bead pouch featuring a heart-shaped front decoration. Lightweight, stylish, and perfect for casual or party wear.",
        inStock: true
    },
    {
        id: 6,
        slug: "multi-bead-bag",
        name: "Multi bead bag",
        price: 7000,
        image: "images/product_6.png",
        category: "Bead Bags",
        description: "A premium handmade multi bead bag with intricate beadwork. Designed for those who love detailed craftsmanship and elegant fashion.",
        inStock: true
    },
    {
        id: 7,
        slug: "heart-shape-bead-bag",
        name: "Heart shape bead bag",
        price: 7000,
        image: "images/product_7.png",
        category: "Bead Bags",
        description: "A romantic handmade heart-shaped bead bag crafted with precision. Perfect for gifting or styling with festive and party outfits.",
        inStock: true
    },
    {
        id: 8,
        slug: "butterfly-bead-bag",
        name: "Butterfly bead bag",
        price: 4000,
        image: "images/product_8.jpeg",
        category: "Bead Bags",
        description: "A delicate handmade butterfly bead bag featuring artistic bead detailing. Ideal for evening events and special occasions.",
        inStock: true
    },
    {
        id: 9,
        slug: "rectangular-bead-bag",
        name: "Rectangular bead bag .",
        price: 4000,
        image: "images/product_9.png",
        category: "Bead Bags",
        description: "A sleek handmade rectangular bead bag with a modern silhouette. Perfect for both casual and formal styling.",
        inStock: true
    },
    {
        id: 10,
        slug: "mehroon-bead-bag",
        name: "Mehroon bead bag",
        price: 5000,
        image: "images/product_10.png",
        category: "Bead Bags",
        description: "A classic handmade mehroon bead bag designed for festive and traditional wear. Elegant and timeless in appearance.",
        inStock: true
    },
    {
        id: 11,
        slug: "silver-potli-crossbody-bag",
        name: "Silver potli crossbody bag",
        price: 3000,
        image: "images/product_11.png",
        category: "Bead Bags",
        description: "A graceful handmade silver potli bead bag with crossbody styling. Perfect for weddings, formal gatherings, and celebrations.",
        inStock: true
    },
    {
        id: 12,
        slug: "golden-and-black-bead-bag",
        name: "Golden and black bead bag",
        price: 4000,
        image: "images/product_12.png",
        category: "Bead Bags",
        description: "A striking handmade golden and black bead bag combining luxury and elegance. Ideal for evening wear and festive occasions.",
        inStock: true
    },
    {
        id: 13,
        slug: "heart-shape-potli-bag",
        name: " heart shape potli bag ",
        price: 3000,
        image: "images/product_13.png",
        category: "Bead Bags",
        description: "A cute handmade heart-shaped potli bead bag designed for special moments. Lightweight, stylish, and perfect for festive looks.",
        inStock: true
    }
];

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}
// Function to get product by slug
function getProductBySlug(slug) {
    return products.find(product => product.slug === slug);
}
// Function to get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Function to get all categories
function getAllCategories() {
    const categories = [...new Set(products.map(product => product.category))];
    return categories;
}
