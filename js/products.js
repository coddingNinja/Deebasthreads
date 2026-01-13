// Products data array for Deeba's Thread - Handmade Bags
const products = [
    {
        id: 1,
        name: "Classic Handmade Tote Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Tote Bags",
        description: "A beautifully crafted handmade tote bag perfect for everyday use. Made with premium materials and attention to detail. Spacious interior with sturdy handles, ideal for shopping, work, or casual outings.",
        inStock: true
    },
    {
        id: 2,
        name: "Elegant Handmade Crossbody Bag",
        price: 5000,
        image: "images/product__2.png",
        category: "Crossbody Bags",
        description: "A stylish handmade crossbody bag featuring elegant design and craftsmanship. Perfect for hands-free convenience with adjustable strap. Compact yet spacious enough for essentials.",
        inStock: true
    },
    {
        id: 3,
        name: "Premium Handmade Shoulder Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Shoulder Bags",
        description: "A sophisticated handmade shoulder bag with timeless appeal. Crafted with care and precision, featuring multiple compartments and comfortable shoulder strap. Perfect for work or special occasions.",
        inStock: true
    },
    {
        id: 4,
        name: "Artisan Handmade Clutch Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Clutch Bags",
        description: "An elegant handmade clutch bag showcasing fine craftsmanship. Sleek design perfect for evening events, parties, or formal occasions. Features secure closure and premium finish.",
        inStock: true
    },
    {
        id: 5,
        name: "Handmade Messenger Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Messenger Bags",
        description: "A practical and stylish handmade messenger bag. Features multiple pockets, adjustable strap, and durable construction. Ideal for students, professionals, or daily commutes.",
        inStock: true
    },
    {
        id: 6,
        name: "Designer Handmade Hobo Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Hobo Bags",
        description: "A chic handmade hobo bag with a relaxed, slouchy silhouette. Crafted with premium materials and attention to detail. Comfortable shoulder strap and spacious interior.",
        inStock: true
    },
    {
        id: 7,
        name: "Handmade Satchel Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Satchel Bags",
        description: "A classic handmade satchel bag with structured design. Features top handle and optional shoulder strap. Multiple compartments for organization. Perfect for work or travel.",
        inStock: true
    },
    {
        id: 8,
        name: "Elegant Handmade Evening Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Evening Bags",
        description: "A sophisticated handmade evening bag for special occasions. Elegant design with premium finish. Compact size perfect for formal events, dinners, or parties.",
        inStock: true
    },
    {
        id: 9,
        name: "Handmade Backpack Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Backpacks",
        description: "A stylish handmade backpack combining fashion and function. Comfortable padded straps, multiple compartments, and durable construction. Perfect for daily use or travel.",
        inStock: true
    },
    {
        id: 10,
        name: "Classic Handmade Bucket Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Bucket Bags",
        description: "A trendy handmade bucket bag with modern appeal. Drawstring closure and adjustable strap. Spacious interior with stylish design. Perfect for casual and semi-formal occasions.",
        inStock: true
    },
    {
        id: 11,
        name: "Premium Handmade Duffle Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Duffle Bags",
        description: "A spacious handmade duffle bag perfect for travel or gym. Features sturdy handles and optional shoulder strap. Large capacity with durable construction and premium finish.",
        inStock: true
    },
    {
        id: 12,
        name: "Artisan Handmade Saddle Bag",
        price: 5000,
        image: "images/product__1.png",
        category: "Saddle Bags",
        description: "A unique handmade saddle bag with distinctive curved design. Features adjustable strap and secure closure. Compact yet functional, perfect for everyday essentials.",
        inStock: true
    }
];

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
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
