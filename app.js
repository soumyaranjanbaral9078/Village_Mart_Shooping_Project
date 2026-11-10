
"use strict";

// =====================================
// 1. PRODUCT DATA
// =====================================

const products = [

    {
        id: 1,
        name: "Smartphone 5G",
        category: "Electronics",
        price: 14999,
        oldPrice: 18999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },

    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1299,
        oldPrice: 1999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },

    {
        id: 3,
        name: "Smart Watch",
        category: "Electronics",
        price: 1999,
        oldPrice: 2999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },

    {
        id: 4,
        name: "Men Casual T-Shirt",
        category: "Fashion",
        price: 499,
        oldPrice: 799,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },

    {
        id: 5,
        name: "Ladies Handbag",
        category: "Fashion",
        price: 899,
        oldPrice: 1499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    },

    {
        id: 6,
        name: "Running Shoes",
        category: "Fashion",
        price: 1499,
        oldPrice: 2199,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },

    {
        id: 7,
        name: "Fresh Vegetables",
        category: "Grocery",
        price: 120,
        oldPrice: 160,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500"
    },

    {
        id: 8,
        name: "Fresh Fruits",
        category: "Grocery",
        price: 180,
        oldPrice: 220,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500"
    },

    {
        id: 9,
        name: "Organic Rice 5KG",
        category: "Grocery",
        price: 350,
        oldPrice: 420,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"
    },

    {
        id: 10,
        name: "Modern Table Lamp",
        category: "Home",
        price: 799,
        oldPrice: 1199,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
    },

    {
        id: 11,
        name: "Coffee Mug Set",
        category: "Home",
        price: 399,
        oldPrice: 599,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500"
    },

    {
        id: 12,
        name: "Home Sofa",
        category: "Home",
        price: 8999,
        oldPrice: 11999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
    },
    {
    id: 13,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1299,
    oldPrice: 1799,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
},
{
    id: 14,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 499,
    oldPrice: 799,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
},
{
    id: 15,
    name: "Digital Camera",
    category: "Electronics",
    price: 15999,
    oldPrice: 18999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
},
{
    id: 16,
    name: "Power Bank",
    category: "Electronics",
    price: 899,
    oldPrice: 1299,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1609592806596-b43bada4f6c4?w=500"
},
{
    id: 17,
    name: "Men's Casual Shirt",
    category: "Fashion",
    price: 699,
    oldPrice: 999,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
},
{
    id: 18,
    name: "Women's Summer Dress",
    category: "Fashion",
    price: 899,
    oldPrice: 1399,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
},
{
    id: 19,
    name: "Men's Sneakers",
    category: "Fashion",
    price: 1499,
    oldPrice: 1999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},
{
    id: 20,
    name: "Women's Handbag",
    category: "Fashion",
    price: 1199,
    oldPrice: 1599,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
},
{
    id: 21,
    name: "Men's Wrist Watch",
    category: "Fashion",
    price: 999,
    oldPrice: 1499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},
{
    id: 22,
    name: "Women's Sunglasses",
    category: "Fashion",
    price: 499,
    oldPrice: 799,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
},
{
    id: 23,
    name: "Organic Almonds 500g",
    category: "Grocery",
    price: 399,
    oldPrice: 499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500"
},
{
    id: 24,
    name: "Fresh Strawberries",
    category: "Grocery",
    price: 199,
    oldPrice: 249,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500"
},
{
    id: 25,
    name: "Orange Juice",
    category: "Grocery",
    price: 120,
    oldPrice: 150,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500"
},
{
    id: 26,
    name: "Cashew Nuts 500g",
    category: "Grocery",
    price: 449,
    oldPrice: 549,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?w=500"
},
{
    id: 27,
    name: "Modern Sofa Chair",
    category: "Home",
    price: 5999,
    oldPrice: 7499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500"
},
{
    id: 28,
    name: "Decorative Table Lamp",
    category: "Home",
    price: 899,
    oldPrice: 1199,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
},
{
    id: 29,
    name: "Wall Clock",
    category: "Home",
    price: 599,
    oldPrice: 899,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500"
},
{
    id: 30,
    name: "Modern Coffee Table",
    category: "Home",
    price: 2499,
    oldPrice: 3299,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500"
},
{
    id: 31,
    name: "Ceramic Flower Vase",
    category: "Home",
    price: 399,
    oldPrice: 599,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500"
},
{
    id: 32,
    name: "Decorative Cushion Set",
    category: "Home",
    price: 699,
    oldPrice: 999,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500"
},
{
    id: 33, name: "Smart LED TV", category: "Electronics",
    price: 18999, oldPrice: 22999, rating: 4.5,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500"
},
{
    id: 34, name: "Wireless Headphones", category: "Electronics",
    price: 1499, oldPrice: 1999, rating: 4.4,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},
{
    id: 35, name: "Gaming Keyboard", category: "Electronics",
    price: 1999, oldPrice: 2499, rating: 4.6,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
},
{
    id: 36, name: "Smart Watch", category: "Electronics",
    price: 2499, oldPrice: 3299, rating: 4.5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},
{
    id: 37, name: "Laptop Backpack", category: "Electronics",
    price: 999, oldPrice: 1499, rating: 4.3,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
},
{
    id: 38, name: "DSLR Camera Lens", category: "Electronics",
    price: 5999, oldPrice: 7499, rating: 4.6,
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500"
},
{
    id: 39, name: "Gaming Controller", category: "Electronics",
    price: 1799, oldPrice: 2299, rating: 4.4,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500"
},
{
    id: 40, name: "Tablet", category: "Electronics",
    price: 12999, oldPrice: 15999, rating: 4.5,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
},
{
    id: 41, name: "Portable Projector", category: "Electronics",
    price: 6999, oldPrice: 8999, rating: 4.3,
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500"
},
{
    id: 42, name: "Computer Monitor", category: "Electronics",
    price: 8999, oldPrice: 10999, rating: 4.6,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
},
{
    id: 43, name: "Wireless Earbuds", category: "Electronics",
    price: 1199, oldPrice: 1699, rating: 4.3,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500"
},
{
    id: 44, name: "Electric Kettle", category: "Electronics",
    price: 899, oldPrice: 1299, rating: 4.2,
    image: "https://images.unsplash.com/photo-1594213114663-d94db9b17123?w=500"
},
{
    id: 45, name: "Desk Microphone", category: "Electronics",
    price: 1599, oldPrice: 1999, rating: 4.4,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500"
},
{
    id: 46, name: "Smartphone", category: "Electronics",
    price: 14999, oldPrice: 17999, rating: 4.5,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},
{
    id: 47, name: "Bluetooth Keyboard", category: "Electronics",
    price: 899, oldPrice: 1299, rating: 4.2,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
},
{
    id: 48, name: "Action Camera", category: "Electronics",
    price: 7999, oldPrice: 9999, rating: 4.5,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500"
},
{
    id: 49, name: "Laptop Stand", category: "Electronics",
    price: 699, oldPrice: 999, rating: 4.3,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
},
{
    id: 50, name: "Men's Denim Jacket", category: "Fashion",
    price: 1499, oldPrice: 1999, rating: 4.4,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
},
{
    id: 51, name: "Women's Handbag", category: "Fashion",
    price: 1299, oldPrice: 1799, rating: 4.5,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
},
{
    id: 52, name: "Men's Running Shoes", category: "Fashion",
    price: 1799, oldPrice: 2299, rating: 4.5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},
{
    id: 53, name: "Women's Heels", category: "Fashion",
    price: 999, oldPrice: 1399, rating: 4.2,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
},
{
    id: 54, name: "Men's T-Shirt", category: "Fashion",
    price: 499, oldPrice: 799, rating: 4.3,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},
{
    id: 55, name: "Women's Kurti", category: "Fashion",
    price: 799, oldPrice: 1199, rating: 4.4,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=500"
},
{
    id: 56, name: "Men's Formal Shoes", category: "Fashion",
    price: 1599, oldPrice: 1999, rating: 4.4,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500"
},
{
    id: 57, name: "Women's Denim Jeans", category: "Fashion",
    price: 999, oldPrice: 1499, rating: 4.3,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
},
{
    id: 58, name: "Men's Sunglasses", category: "Fashion",
    price: 599, oldPrice: 899, rating: 4.2,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
},
{
    id: 59, name: "Women's Scarf", category: "Fashion",
    price: 399, oldPrice: 599, rating: 4.1,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500"
},
{
    id: 60, name: "Men's Hoodie", category: "Fashion",
    price: 1199, oldPrice: 1599, rating: 4.5,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
},
{
    id: 61, name: "Women's Sneakers", category: "Fashion",
    price: 1399, oldPrice: 1899, rating: 4.4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},
{
    id: 62, name: "Leather Wallet", category: "Fashion",
    price: 499, oldPrice: 699, rating: 4.2,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500"
},
{
    id: 63, name: "Women's Watch", category: "Fashion",
    price: 1299, oldPrice: 1799, rating: 4.4,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500"
},
{
    id: 64, name: "Men's Cotton Trousers", category: "Fashion",
    price: 899, oldPrice: 1199, rating: 4.3,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500"
},
{
    id: 65, name: "Women's Top", category: "Fashion",
    price: 599, oldPrice: 899, rating: 4.2,
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=500"
},
{
    id: 66, name: "Travel Backpack", category: "Fashion",
    price: 1199, oldPrice: 1599, rating: 4.5,
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500"
},
{
    id: 67, name: "Basmati Rice 5kg", category: "Grocery",
    price: 499, oldPrice: 599, rating: 4.5,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"
},
{
    id: 68, name: "Fresh Apples 1kg", category: "Grocery",
    price: 149, oldPrice: 199, rating: 4.4,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"
},
{
    id: 69, name: "Fresh Bananas", category: "Grocery",
    price: 60, oldPrice: 80, rating: 4.3,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500"
},
{
    id: 70, name: "Organic Honey", category: "Grocery",
    price: 249, oldPrice: 299, rating: 4.6,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500"
},
{
    id: 71, name: "Peanut Butter", category: "Grocery",
    price: 199, oldPrice: 249, rating: 4.4,
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500"
},
{
    id: 72, name: "Breakfast Cereal", category: "Grocery",
    price: 179, oldPrice: 229, rating: 4.2,
    image: "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=500"
},
{
    id: 73, name: "Fresh Tomatoes 1kg", category: "Grocery",
    price: 40, oldPrice: 60, rating: 4.1,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500"
},
{
    id: 74, name: "Green Broccoli", category: "Grocery",
    price: 80, oldPrice: 110, rating: 4.3,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500"
},
{
    id: 75, name: "Fresh Milk 1L", category: "Grocery",
    price: 65, oldPrice: 75, rating: 4.5,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500"
},
{
    id: 76, name: "Cheese Pack", category: "Grocery",
    price: 149, oldPrice: 189, rating: 4.3,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500"
},
{
    id: 77, name: "Green Tea", category: "Grocery",
    price: 199, oldPrice: 249, rating: 4.4,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500"
},
{
    id: 78, name: "Cooking Oil 1L", category: "Grocery",
    price: 149, oldPrice: 179, rating: 4.2,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500"
},
{
    id: 79, name: "Red Grapes", category: "Grocery",
    price: 120, oldPrice: 160, rating: 4.4,
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500"
},
{
    id: 80, name: "Potato Chips", category: "Grocery",
    price: 30, oldPrice: 40, rating: 4.1,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500"
},
{
    id: 81, name: "Dark Chocolate", category: "Grocery",
    price: 99, oldPrice: 129, rating: 4.5,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500"
},
{
    id: 82, name: "Mixed Dry Fruits", category: "Grocery",
    price: 349, oldPrice: 449, rating: 4.6,
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500"
},
{
    id: 83, name: "Fresh Carrots 1kg", category: "Grocery",
    price: 50, oldPrice: 70, rating: 4.2,
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500"
},
{
    id: 84, name: "Dining Table Set", category: "Home",
    price: 8999, oldPrice: 10999, rating: 4.5,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500"
},
{
    id: 85, name: "Comfortable Bed", category: "Home",
    price: 12999, oldPrice: 15999, rating: 4.6,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
},
{
    id: 86, name: "Modern Bookshelf", category: "Home",
    price: 3499, oldPrice: 4299, rating: 4.4,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500"
},
{
    id: 87, name: "Wall Art Frame", category: "Home",
    price: 799, oldPrice: 1099, rating: 4.3,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500"
},
{
    id: 88, name: "Kitchen Storage Set", category: "Home",
    price: 599, oldPrice: 799, rating: 4.2,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500"
},
{
    id: 89, name: "Nonstick Cookware Set", category: "Home",
    price: 1999, oldPrice: 2499, rating: 4.5,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500"
},
{
    id: 90, name: "Bedsheet Set", category: "Home",
    price: 899, oldPrice: 1199, rating: 4.4,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500"
},
{
    id: 91, name: "Floor Rug", category: "Home",
    price: 1499, oldPrice: 1899, rating: 4.3,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500"
},
{
    id: 92, name: "Decorative Mirror", category: "Home",
    price: 1299, oldPrice: 1699, rating: 4.4,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500"
},
{
    id: 93, name: "Indoor Green Plant", category: "Home",
    price: 299, oldPrice: 399, rating: 4.5,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"
},
{
    id: 94, name: "Kitchen Dining Chair", category: "Home",
    price: 1799, oldPrice: 2299, rating: 4.2,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500"
},
{
    id: 95, name: "Decorative Wall Shelf", category: "Home",
    price: 699, oldPrice: 999, rating: 4.3,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500"
},
{
    id: 96, name: "Kitchen Dinner Set", category: "Home",
    price: 1499, oldPrice: 1999, rating: 4.4,
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=500"
},
{
    id: 97, name: "Cotton Curtains", category: "Home",
    price: 799, oldPrice: 1099, rating: 4.2,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500"
},
{
    id: 98, name: "Storage Basket Set", category: "Home",
    price: 499, oldPrice: 699, rating: 4.1,
    image: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=500"
},
{
    id: 99, name: "Modern Floor Lamp", category: "Home",
    price: 1599, oldPrice: 1999, rating: 4.4,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
},
{
    id: 100, name: "Bathroom Organizer", category: "Home",
    price: 399, oldPrice: 599, rating: 4.2,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500"
}
];


// =====================================
// 2. CART DATA
// =====================================

let cart = [];

try {

    const savedCart = JSON.parse(
        localStorage.getItem("villageCart") || "[]"
    );

    if (Array.isArray(savedCart)) {

        cart = savedCart
            .filter(item =>
                products.some(p => p.id === item.id) &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0 &&
                item.quantity <= 99
            )
            .map(item => ({
                id: item.id,
                quantity: item.quantity,
                selected: item.selected === true
            }));

    }

} catch (error) {

    cart = [];

}


// =====================================
// 3. COMMON FUNCTIONS
// =====================================

function money(amount) {

    return Number(amount).toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });

}


function saveCart() {

    localStorage.setItem(
        "villageCart",
        JSON.stringify(cart)
    );

}


function getProduct(id) {

    return products.find(p => p.id === id);

}


function getSelectedProducts() {

    return cart.filter(item => item.selected);

}


// =====================================
// 4. DISPLAY PRODUCTS
// =====================================

function displayProducts(productArray) {

    const productList =
        document.getElementById("productList");

    productList.innerHTML = "";

    if (productArray.length === 0) {

        productList.innerHTML =
            '<p class="no-products">No products found!</p>';

        return;

    }

    productArray.forEach(product => {

        productList.innerHTML += `

            <div class="product-card">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>${product.name}</h3>

                <p class="rating">
                    ⭐ ${product.rating} / 5
                </p>

                <p class="price">
                    ₹${money(product.price)}

                    <span class="old-price">
                        ₹${money(product.oldPrice)}
                    </span>
                </p>

                <div class="product-buttons">

                    <button class="add-btn"
                        onclick="addToCart(${product.id})">

                        Add to Cart

                    </button>

                    <button class="buy-now-btn"
                        onclick="buyNow(${product.id})">

                        Buy Now

                    </button>

                </div>

            </div>

        `;

    });

}


// =====================================
// 5. SEARCH PRODUCTS
// =====================================

function searchProducts() {

    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    const result = products.filter(product =>

        product.name.toLowerCase().includes(searchValue) ||

        product.category.toLowerCase().includes(searchValue)

    );

    displayProducts(result);

    document.getElementById("productsSection")
        .scrollIntoView({ behavior: "smooth" });

}


document.getElementById("searchInput")
    .addEventListener("keyup", function(event) {

        if (event.key === "Enter") {

            searchProducts();

        }

    });


// =====================================
// 6. CATEGORY FILTER
// =====================================

function filterCategory(category) {

    const result = category === "All"

        ? products

        : products.filter(product =>
            product.category === category
        );

    displayProducts(result);

    document.getElementById("productsSection")
        .scrollIntoView({ behavior: "smooth" });

}


// =====================================
// 7. ADD TO CART
// =====================================

function addToCart(id) {

    const existingItem = cart.find(
        item => item.id === id
    );

    if (existingItem) {

        if (existingItem.quantity >= 99) {

            alert("Maximum quantity is 99.");

            return;

        }

        existingItem.quantity++;

        existingItem.selected = true;

    } else {

        cart.push({

            id: id,

            quantity: 1,

            selected: true

        });

    }

    saveCart();

    updateCart();

    alert("Product added successfully!");

}


// =====================================
// 8. BUY NOW
// =====================================

function buyNow(id) {

    const existingItem = cart.find(
        item => item.id === id
    );

    if (existingItem) {

        existingItem.selected = true;

    } else {

        cart.push({

            id: id,

            quantity: 1,

            selected: true

        });

    }

    saveCart();

    updateCart();

    checkout();

}


// =====================================
// 9. CALCULATE BILL
// =====================================

function calculateBill(items) {

    let subtotal = 0;

    let discount = 0;

    items.forEach(item => {

        const product = getProduct(item.id);

        if (!product) return;

        subtotal += product.price * item.quantity;

        discount +=
            (product.oldPrice - product.price) *
            item.quantity;

    });

    // Free delivery for orders above ₹499.

    const delivery = subtotal === 0 || subtotal >= 499
        ? 0
        : 40;

    const total = subtotal + delivery;

    return {

        subtotal: subtotal,

        discount: discount,

        delivery: delivery,

        total: total

    };

}


// =====================================
// 10. UPDATE CART
// =====================================

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const selectedItems = getSelectedProducts();

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const selectedQuantity = selectedItems.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const bill = calculateBill(selectedItems);

    document.getElementById("cartCount").innerText =
        totalQuantity;

    document.getElementById("selectedCount").innerText =
        selectedQuantity;

    document.getElementById("cartSubtotal").innerText =
        money(bill.subtotal);

    document.getElementById("cartDiscount").innerText =
        money(bill.discount);

    document.getElementById("cartDelivery").innerText =
        money(bill.delivery);

    document.getElementById("cartTotal").innerText =
        money(bill.total);

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your shopping cart is empty!</p>";

    }

    cart.forEach(item => {

        const product = getProduct(item.id);

        if (!product) return;

        cartItems.innerHTML += `

            <div class="cart-product">

                <input
                    type="checkbox"
                    ${item.selected ? "checked" : ""}
                    onchange="selectProduct(
                        ${item.id}, this.checked
                    )">

                <img
                    src="${product.image}"
                    alt="${product.name}">

                <div class="cart-product-info">

                    <h4>${product.name}</h4>

                    <p>₹${money(product.price)}</p>

                    <div class="quantity-box">

                        <button
                            onclick="changeQuantity(
                                ${item.id}, -1
                            )">

                            −

                        </button>

                        <span>${item.quantity}</span>

                        <button
                            onclick="changeQuantity(
                                ${item.id}, 1
                            )">

                            +

                        </button>

                    </div>

                    <button
                        class="remove-btn"
                        onclick="removeProduct(${item.id})">

                        Remove

                    </button>

                </div>

                <b>
                    ₹${money(
                        product.price * item.quantity
                    )}
                </b>

            </div>

        `;

    });

    // SELECT ALL CHECKBOX

    document.getElementById("selectAll").checked =
        cart.length > 0 &&
        cart.every(item => item.selected);

    saveCart();

}


// =====================================
// 11. SELECT ONE PRODUCT
// =====================================

function selectProduct(id, checked) {

    const item = cart.find(
        product => product.id === id
    );

    if (!item) return;

    item.selected = checked;

    updateCart();

}


// =====================================
// 12. SELECT ALL PRODUCTS
// =====================================

function selectAllProducts(checked) {

    cart.forEach(item => {

        item.selected = checked;

    });

    updateCart();

}


// =====================================
// 13. CHANGE PRODUCT QUANTITY
// =====================================

function changeQuantity(id, change) {

    const item = cart.find(
        product => product.id === id
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeProduct(id);

        return;

    }

    if (item.quantity > 99) {

        item.quantity = 99;

        alert("Maximum quantity is 99.");

    }

    updateCart();

}


// =====================================
// 14. REMOVE PRODUCT
// =====================================

function removeProduct(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    updateCart();

}


// =====================================
// 15. OPEN AND CLOSE CART
// =====================================

function openCart() {

    document.getElementById("cartPanel")
        .classList.add("active");

    document.getElementById("cartOverlay")
        .classList.add("active");

}


function closeCart() {

    document.getElementById("cartPanel")
        .classList.remove("active");

    document.getElementById("cartOverlay")
        .classList.remove("active");

}


// =====================================
// 16. CHECKOUT
// =====================================

function checkout() {

    const selectedItems = getSelectedProducts();

    if (selectedItems.length === 0) {

        alert("Please select at least one product!");

        return;

    }

    const bill = calculateBill(selectedItems);

    let summary = `
        <h3>Order Summary</h3>
    `;

    selectedItems.forEach(item => {

        const product = getProduct(item.id);

        summary += `

            <p>
                ${product.name}
                × ${item.quantity}
                = ₹${money(product.price * item.quantity)}
            </p>

        `;

    });

    summary += `

        <hr>

        <p>Subtotal: ₹${money(bill.subtotal)}</p>

        <p>Discount: ₹${money(bill.discount)}</p>

        <p>Delivery: ₹${money(bill.delivery)}</p>

        <h3>Grand Total: ₹${money(bill.total)}</h3>

    `;

    document.getElementById("checkoutSummary")
        .innerHTML = summary;

    document.getElementById("checkoutForm").style.display =
        "block";

    document.getElementById("invoiceSection").style.display =
        "none";

    closeCart();

    document.getElementById("checkoutModal").style.display =
        "block";

}


// =====================================
// 17. CLOSE CHECKOUT
// =====================================

function closeCheckout() {

    document.getElementById("checkoutModal")
        .style.display = "none";

}


// =====================================
// 18. SAFE HTML TEXT
// =====================================

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({

        "&": "&amp;",

        "<": "&lt;",

        ">": "&gt;",

        '"': "&quot;",

        "'": "&#39;"

    })[char]);

}


// =====================================
// 19. PLACE ORDER
// =====================================

document.getElementById("checkoutForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document
            .getElementById("customerName")
            .value.trim();

        const phone = document
            .getElementById("customerPhone")
            .value.trim();

        const address = document
            .getElementById("customerAddress")
            .value.trim();

        const payment = document
            .getElementById("paymentMethod")
            .value;

        const selectedItems = getSelectedProducts();

        if (!name || !phone || !address) {

            alert("Please enter all customer details.");

            return;

        }

        if (!/^[6-9][0-9]{9}$/.test(phone)) {

            alert("Enter a valid 10-digit Indian mobile number.");

            return;

        }

        if (selectedItems.length === 0) {

            alert("No selected products!");

            return;

        }

        // Create unique order ID.

        const orderId = "VM" + Date.now();

        const orderDate =
            new Date().toLocaleString("en-IN");

        const bill = calculateBill(selectedItems);

        // Create order details.

        const order = {

            orderId: orderId,

            orderDate: orderDate,

            name: name,

            phone: phone,

            address: address,

            payment: payment,

            items: selectedItems.map(item => ({

                id: item.id,

                quantity: item.quantity

            })),

            bill: bill

        };

        // Generate customer invoice.

        generateInvoice(order);

        // Remove only purchased products.

        const purchasedIds = selectedItems.map(
            item => item.id
        );

        cart = cart.filter(
            item => !purchasedIds.includes(item.id)
        );

        saveCart();

        updateCart();

        // Hide form and display invoice.

        document.getElementById("checkoutForm").style.display =
            "none";

        document.getElementById("invoiceSection").style.display =
            "block";

        alert(
            "Order placed successfully! Your invoice is ready."
        );

    });


// =====================================
// 20. GENERATE CUSTOMER BILL
// =====================================

function generateInvoice(order) {

    let rows = "";

    let totalItems = 0;

    order.items.forEach(item => {

        const product = getProduct(item.id);

        totalItems += item.quantity;

        rows += `

            <tr>

                <td>${escapeHTML(product.name)}</td>

                <td>${item.quantity}</td>

                <td>₹${money(product.price)}</td>

                <td>
                    ₹${money(
                        product.price * item.quantity
                    )}
                </td>

            </tr>

        `;

    });

    const invoice = `

        <div class="invoice">

            <h2>🌿 VILLAGE MART</h2>

            <p style="text-align:center">
                Your Village, Your Marketplace
            </p>

            <hr>

            <h3>ORDER INVOICE</h3>

            <p>
                <b>Order ID:</b>
                ${escapeHTML(order.orderId)}
            </p>

            <p>
                <b>Date:</b>
                ${escapeHTML(order.orderDate)}
            </p>

            <hr>

            <h3>Customer Details</h3>

            <p>
                <b>Name:</b>
                ${escapeHTML(order.name)}
            </p>

            <p>
                <b>Mobile:</b>
                ${escapeHTML(order.phone)}
            </p>

            <p>
                <b>Address:</b>
                ${escapeHTML(order.address)}
            </p>

            <p>
                <b>Payment:</b>
                ${escapeHTML(order.payment)}
            </p>

            <hr>

            <h3>Purchased Products</h3>

            <table>

                <thead>

                    <tr>

                        <th>Product</th>

                        <th>Qty</th>

                        <th>Price</th>

                        <th>Total</th>

                    </tr>

                </thead>

                <tbody>

                    ${rows}

                </tbody>

            </table>

            <p>
                <b>Total Items:</b>
                ${totalItems}
            </p>

            <div class="invoice-total">

                <p>
                    Subtotal:
                    ₹${money(order.bill.subtotal)}
                </p>

                <p>
                    Discount:
                    -₹${money(order.bill.discount)}
                </p>

                <p>
                    Delivery:
                    ₹${money(order.bill.delivery)}
                </p>

                <h3>
                    Grand Total:
                    ₹${money(order.bill.total)}
                </h3>

            </div>

            <hr>

            <h3 class="invoice-thankyou">
                Thank You For Shopping With Us!
            </h3>

            <p style="text-align:center">
                Village Mart - Happy Shopping!
            </p>

        </div>

    `;

    document.getElementById("invoiceContent")
        .innerHTML = invoice;

}


// =====================================
// 21. PRINT OR SAVE INVOICE AS PDF
// =====================================

function printInvoice() {

    window.print();

}


// =====================================
// 22. FINISH ORDER
// =====================================

function finishOrder() {

    document.getElementById("checkoutModal")
        .style.display = "none";

    document.getElementById("checkoutForm").reset();

    document.getElementById("checkoutForm").style.display =
        "block";

    document.getElementById("invoiceSection").style.display =
        "none";

    displayProducts(products);

}


// =====================================
// 23. LOGIN PLACEHOLDER
// =====================================

function showLogin() {

    alert(
        "Welcome to Village Mart! Login feature will be added later."
    );

}


// =====================================
// 24. SHOP NOW
// =====================================

function scrollToProducts() {

    document.getElementById("productsSection")
        .scrollIntoView({ behavior: "smooth" });

}

function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        document.getElementById("loginMessage").innerText =
            "Please enter email and password";
        return;
    }

    localStorage.setItem("userEmail", email);

    document.getElementById("loginMessage").innerText =
        "Login successful! Welcome to Village Mart.";
}
// =====================================
// 25. INITIALIZE WEBSITE
// =====================================

displayProducts(products);

updateCart();
