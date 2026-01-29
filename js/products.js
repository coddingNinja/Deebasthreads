// Products data array for Deeba's Thread - Handmade Bags
const products = [
    {
        id: 1,
        slug: "offwhite-bead-bag",
        name: "Offwhite bead bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Tote Bags",
        description: "A beautifully crafted handmade tote bag perfect for everyday use. Made with premium materials and attention to detail. Spacious interior with sturdy handles, ideal for shopping, work, or casual outings.",
        inStock: true
    },
    {
        id: 2,
        slug: "multi-bead-bag",
        name: "Multi bead bag",
        price: 6000,
        image: "images/product_2.png",
        category: "Crossbody Bags",
        description: "A stylish handmade crossbody bag featuring elegant design and craftsmanship. Perfect for hands-free convenience with adjustable strap. Compact yet spacious enough for essentials.",
        inStock: true
    },
    {
        id: 3,
        slug: "black-potli-bag-with-extra-cross-body-strap",
        name: "Black potli bag with extra cross body strap",
        price:10000,
        image: "images/product_3.jpeg",
        category: "Shoulder Bags",
        description: "A sophisticated handmade shoulder bag with timeless appeal. Crafted with care and precision, featuring multiple compartments and comfortable shoulder strap. Perfect for work or special occasions.",
        inStock: true
    },
    {
        id: 4,
        slug: "mehroon-circle-bead-bag",
        name: "Mehroon circle bead bag",
        price: 6000,
        image: "images/product_4.jpeg",
        category: "Clutch Bags",
        description: "An elegant handmade clutch bag showcasing fine craftsmanship. Sleek design perfect for evening events, parties, or formal occasions. Features secure closure and premium finish.",
        inStock: true
    },
    {
        id: 5,
        slug: "transparrent-shaded-bead-pouch-with-heart-shape-front-decoration",
        name: "Transparrent shaded bead pouch with heart shape front decoration",
        price: 4000,
        image: "images/product_5.png",
        category: "Messenger Bags",
        description: "A practical and stylish handmade messenger bag. Features multiple pockets, adjustable strap, and durable construction. Ideal for students, professionals, or daily commutes.",
        inStock: true
    },
    {
        id: 6,
        slug: "multi-bead-bag",
        name: "Multi bead bag",
        price: 7000,
        image: "images/product_6.png",
        category: "Hobo Bags",
        description: "A chic handmade hobo bag with a relaxed, slouchy silhouette. Crafted with premium materials and attention to detail. Comfortable shoulder strap and spacious interior.",
        inStock: true
    },
    {
        id: 7,
        slug: "heart-shape-bead-bag",
        name: "Heart shape bead bag .",
        price: 7000,
        image: "images/product_7.png",
        category: "Satchel Bags",
        description: "A classic handmade satchel bag with structured design. Features top handle and optional shoulder strap. Multiple compartments for organization. Perfect for work or travel.",
        inStock: true
    },
    {
        id: 8,
        slug: "butterfly-bead-bag",
        name: "Butterfly bead bag",
        price: 4000,
        image: "images/product_8.jpeg",
        category: "Evening Bags",
        description: "A sophisticated handmade evening bag for special occasions. Elegant design with premium finish. Compact size perfect for formal events, dinners, or parties.",
        inStock: true
    },
    {
        id: 9,
        slug: "rectangular-bead-bag",
        name: "Rectangular bead bag .",
        price: 4000,
        image: "images/product_9.png",
        category: "Backpacks",
        description: "A stylish handmade backpack combining fashion and function. Comfortable padded straps, multiple compartments, and durable construction. Perfect for daily use or travel.",
        inStock: true
    },
    {
        id: 10,
        slug: "mehroon-bead-bag",
        name: "Mehroon bead bag",
        price: 5000,
        image: "images/product_10.png",
        category: "Backpacks",
        description: "A stylish handmade backpack combining fashion and function. Comfortable padded straps, multiple compartments, and durable construction. Perfect for daily use or travel.",
        inStock: true
    },
    {
        id: 11,
        slug: "silver-potli-crossbody-bag",
        name: "Silver potli crossbody bag",
        price: 3000,
        image: "images/product_11.png",
        category: "Backpacks",
        description: "A stylish handmade backpack combining fashion and function. Comfortable padded straps, multiple compartments, and durable construction. Perfect for daily use or travel.",
        inStock: true
    },
    {
        id: 12,
        slug: "golden-and-black-bead-bag",
        name: "Golden and black bead bag",
        price: 4000,
        image: "images/product_12.png",
        category: "Backpacks",
        description: "A stylish handmade backpack combining fashion and function. Comfortable padded straps, multiple compartments, and durable construction. Perfect for daily use or travel.",
        inStock: true
    },
    {
        id: 13,
        slug: "heart-shape-potli-bag",
        name: " heart shape potli bag ",
        price: 3000,
        image: "images/product_13.png",
        category: "Backpacks",
        description: "A stylish handmade backpack combining fashion and function. Comfortable padded straps, multiple compartments, and durable construction. Perfect for daily use or travel.",
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
