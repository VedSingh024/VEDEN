/* =========================================================
1. CATEGORY SYSTEM
========================================================= */

const VEDEN_CATEGORIES = [

    {
        id: "grocery",
        name: "Grocery",
        icon: "🛒",
        description: "Rice, flour, pulses, spices, oils and everyday groceries"
    },

    {
        id: "fruits-vegetables",
        name: "Fruits & Vegetables",
        icon: "🥦",
        description: "Fresh fruits and vegetables"
    },

    {
        id: "dairy-breakfast",
        name: "Dairy & Breakfast",
        icon: "🥛",
        description: "Milk, dairy, cereals and breakfast essentials"
    },

    {
        id: "snacks",
        name: "Snacks",
        icon: "🍿",
        description: "Chips, biscuits, nuts and packaged snacks"
    },

    {
        id: "beverages",
        name: "Beverages",
        icon: "🥤",
        description: "Tea, coffee, juices and refreshments"
    },

    {
        id: "bakery",
        name: "Bakery",
        icon: "🍞",
        description: "Bread, cakes, cookies and bakery products"
    },

    {
        id: "personal-care",
        name: "Personal Care",
        icon: "🧴",
        description: "Bath, hair care, oral care and hygiene"
    },

    {
        id: "beauty",
        name: "Beauty",
        icon: "✨",
        description: "Skincare, makeup and beauty essentials"
    },

    {
        id: "fashion",
        name: "Fashion",
        icon: "👕",
        description: "Clothing, apparel and everyday fashion"
    },

    {
        id: "footwear",
        name: "Footwear",
        icon: "👟",
        description: "Shoes, sandals and footwear"
    },

    {
        id: "electronics",
        name: "Electronics",
        icon: "⚡",
        description: "Everyday electronics and accessories"
    },

    {
        id: "mobiles",
        name: "Mobiles",
        icon: "📱",
        description: "Smartphones and mobile devices"
    },

    {
        id: "laptops",
        name: "Laptops",
        icon: "💻",
        description: "Laptops and computers"
    },

    {
        id: "tablets",
        name: "Tablets",
        icon: "▣",
        description: "Tablets and portable devices"
    },

    {
        id: "tv",
        name: "TV & Entertainment",
        icon: "📺",
        description: "Smart TVs and home entertainment"
    },

    {
        id: "audio",
        name: "Audio",
        icon: "🎧",
        description: "Headphones, earbuds and speakers"
    },

    {
        id: "cameras",
        name: "Cameras",
        icon: "📷",
        description: "Cameras, lenses and accessories"
    },

    {
        id: "home-appliances",
        name: "Home Appliances",
        icon: "🏠",
        description: "Appliances for modern homes"
    },

    {
        id: "kitchen",
        name: "Kitchen",
        icon: "🍳",
        description: "Cookware and kitchen appliances"
    },

    {
        id: "home-living",
        name: "Home & Living",
        icon: "🛋️",
        description: "Home decor and lifestyle essentials"
    },

    {
        id: "furniture",
        name: "Furniture",
        icon: "🪑",
        description: "Tables, chairs, storage and furniture"
    },

    {
        id: "cleaning",
        name: "Cleaning",
        icon: "🧹",
        description: "Home cleaning and laundry essentials"
    },

    {
        id: "stationery",
        name: "Stationery",
        icon: "✏️",
        description: "School and office stationery"
    },

    {
        id: "books",
        name: "Books",
        icon: "📚",
        description: "Books and reading"
    },

    {
        id: "toys",
        name: "Toys",
        icon: "🧸",
        description: "Toys, games and educational products"
    },

    {
        id: "baby-care",
        name: "Baby Care",
        icon: "🍼",
        description: "Baby hygiene, feeding and care"
    },

    {
        id: "pet-supplies",
        name: "Pet Supplies",
        icon: "🐾",
        description: "Food, toys and accessories for pets"
    },

    {
        id: "sports",
        name: "Sports",
        icon: "🏋️",
        description: "Sports equipment and fitness products"
    },

    {
        id: "automotive",
        name: "Automotive",
        icon: "🚗",
        description: "Car and bike accessories"
    },

    {
        id: "travel",
        name: "Travel",
        icon: "🧳",
        description: "Luggage and travel accessories"
    },

    {
        id: "tools",
        name: "Tools & Hardware",
        icon: "🔧",
        description: "Hand tools and hardware"
    }

];


/* =========================================================
2. EXISTING IMAGE FOLDER SYSTEM

IMPORTANT:
Only .jpg is used.

Folder names correspond to the existing F:\STORE
category folders.

If a product has an explicit entry in
VEDEN_PRODUCT_IMAGE_MAP, that path wins.

Otherwise the existing imagesN.jpg convention is used.
========================================================= */

const VEDEN_IMAGE_FOLDERS = {

    grocery:
        "Grocery",

    "fruits-vegetables":
        "Fruits & Vegetables",

    "dairy-breakfast":
        "Dairy & Breakfast",

    snacks:
        "Snacks",

    beverages:
        "Beverages",

    bakery:
        "Bakery",

    "personal-care":
        "Personal Care",

    beauty:
        "Beauty",

    fashion:
        "Fashion",

    footwear:
        "Footwear",

    electronics:
        "Electronics",

    mobiles:
        "Mobiles",

    laptops:
        "Laptops",

    tablets:
        "Tablets",

    tv:
        "TV",

    audio:
        "Audio",

    cameras:
        "Cameras",

    "home-appliances":
        "Home Appliances",

    kitchen:
        "Kitchen",

    "home-living":
        "Home & Living",

    furniture:
        "Furniture",

    cleaning:
        "Cleaning",

    stationery:
        "Stationery",

    books:
        "Books",

    toys:
        "Toys",

    "baby-care":
        "Baby Care",

    "pet-supplies":
        "Pet Supplies",

    sports:
        "Sports",

    automotive:
        "Automotive",

    travel:
        "Travel",

    tools:
        "Tools"

};


/*
    Explicit image mapping.

    Existing exact mappings can be placed here later without
    changing PRODUCT_LIBRARY.

    Example:

    "grocery-1":
        "Grocery/images1.jpg",

    "grocery-2":
        "Grocery/images2.jpg"

    Only .jpg files are allowed.
*/

const VEDEN_PRODUCT_IMAGE_MAP = {};


/* =========================================================
IMAGE PATH HELPERS
========================================================= */

function getPageBasePath() {

    const path =
        window.location.pathname
            .replace(/\\/g, "/");

    const normalized =
        path.toLowerCase();

    if (
        normalized.includes("/pages/")
    ) {

        return "../";

    }

    return "";

}


function normalizeImagePath(path) {

    if (!path) {
        return "";
    }

    let value =
        String(path)
            .replace(/\\/g, "/")
            .trim();

    if (!value) {
        return "";
    }

    /*
        Preserve absolute/external paths only if they already
        existed in the data. No external image is generated.
    */

    if (
        /^https?:\/\//i.test(value) ||
        value.startsWith("data:") ||
        value.startsWith("/")
    ) {

        return value;

    }

    /*
        If path already contains assets/, preserve it.
    */

    if (
        value.startsWith("assets/")
    ) {

        return value;

    }

    return value;
}


function getProductImagePath(
    categoryId,
    index,
    productId = ""
) {

    /*
        Explicit product mapping has highest priority.
    */

    if (
        productId &&
        VEDEN_PRODUCT_IMAGE_MAP[productId]
    ) {

        const mapped =
            normalizeImagePath(
                VEDEN_PRODUCT_IMAGE_MAP[productId]
            );

        if (
            /\.jpg$/i.test(mapped)
        ) {

            return mapped;

        }

    }

    const folder =
        VEDEN_IMAGE_FOLDERS[
            categoryId
        ];

    if (!folder) {
        return "";
    }

    /*
        Existing project convention:
        category folder / imagesN.jpg

        Product index starts at 1.
    */

    const imageNumber =
        Number(index) + 1;

    return `${folder}/images${imageNumber}.jpg`;
}


/* =========================================================
3. PRODUCT LIBRARY
EXISTING PRODUCT DATA — PRESERVED
========================================================= */

const PRODUCT_LIBRARY = {

    grocery: [

        ["Daawat Rozana Basmati Rice 5 kg", "Daawat", 649],
        ["India Gate Classic Basmati Rice 5 kg", "India Gate", 799],
        ["Aashirvaad Shudh Chakki Atta 5 kg", "Aashirvaad", 299],
        ["Fortune Chakki Fresh Atta 5 kg", "Fortune", 285],
        ["Tata Sampann Toor Dal 1 kg", "Tata Sampann", 189],
        ["Tata Sampann Moong Dal 1 kg", "Tata Sampann", 169],
        ["Tata Sampann Chana Dal 1 kg", "Tata Sampann", 139],
        ["Fortune Soya Health Refined Soyabean Oil 1 L", "Fortune", 135],
        ["Fortune Sunlite Refined Sunflower Oil 1 L", "Fortune", 145],
        ["Tata Salt 1 kg", "Tata", 28],
        ["Tata Rock Salt 1 kg", "Tata", 55],
        ["Everest Turmeric Powder 100 g", "Everest", 42],
        ["Everest Coriander Powder 100 g", "Everest", 40],
        ["Everest Garam Masala 100 g", "Everest", 95],
        ["Catch Black Pepper Powder 100 g", "Catch", 115],
        ["India Gate Quinoa 500 g", "India Gate", 249],
        ["Kohinoor Charminar Basmati Rice 5 kg", "Kohinoor", 699],
        ["Tata Sampann Rajma 500 g", "Tata Sampann", 119],
        ["Fortune Besan 500 g", "Fortune", 69],
        ["Aashirvaad Multigrain Atta 5 kg", "Aashirvaad", 399]

    ],

    "fruits-vegetables": [

        ["Red Delicious Apple 1 kg", "Fresh Farm", 179],
        ["Royal Gala Apple 1 kg", "Fresh Farm", 219],
        ["Robusta Banana 1 dozen", "Fresh Farm", 69],
        ["Cavendish Banana 1 dozen", "Fresh Farm", 79],
        ["Alphonso Mango 1 kg", "Fresh Farm", 249],
        ["Kesar Mango 1 kg", "Fresh Farm", 199],
        ["Nagpur Orange 1 kg", "Fresh Farm", 119],
        ["Green Grapes 500 g", "Fresh Farm", 89],
        ["Black Grapes 500 g", "Fresh Farm", 119],
        ["Tomato 1 kg", "Fresh Farm", 49],
        ["Potato 1 kg", "Fresh Farm", 39],
        ["Onion 1 kg", "Fresh Farm", 45],
        ["Carrot 500 g", "Fresh Farm", 49],
        ["Green Capsicum 500 g", "Fresh Farm", 69],
        ["Broccoli 500 g", "Fresh Farm", 99],
        ["Spinach 1 bunch", "Fresh Farm", 35],
        ["Cauliflower 1 piece", "Fresh Farm", 59],
        ["Cucumber 1 kg", "Fresh Farm", 49],
        ["Pomegranate 1 kg", "Fresh Farm", 199],
        ["Papaya 1 kg", "Fresh Farm", 69]

    ],

    "dairy-breakfast": [

        ["Amul Taaza Toned Milk 1 L", "Amul", 58],
        ["Amul Gold Full Cream Milk 1 L", "Amul", 68],
        ["Amul Butter 500 g", "Amul", 295],
        ["Amul Cheese Slices 200 g", "Amul", 145],
        ["Amul Paneer 200 g", "Amul", 95],
        ["Mother Dairy Paneer 200 g", "Mother Dairy", 99],
        ["Epigamia Greek Yogurt 90 g", "Epigamia", 55],
        ["Nestle a+ Nourish Dahi 400 g", "Nestle", 75],
        ["Kellogg's Corn Flakes 500 g", "Kellogg's", 245],
        ["Saffola Oats 1 kg", "Saffola", 189],
        ["Quaker Oats 1 kg", "Quaker", 199],
        ["Dabur Honey 500 g", "Dabur", 225],
        ["Pintola All Natural Peanut Butter 1 kg", "Pintola", 399],
        ["Kissan Mixed Fruit Jam 500 g", "Kissan", 165],
        ["Kissan Strawberry Jam 500 g", "Kissan", 175],
        ["Bagrry's Crunchy Muesli 700 g", "Bagrry's", 399],
        ["Yoga Bar Muesli 700 g", "Yoga Bar", 399],
        ["Nestle Milo 400 g", "Nestle", 225]

    ],

    snacks: [

        ["Lay's India's Magic Masala 52 g", "Lay's", 20],
        ["Lay's American Style Cream & Onion 52 g", "Lay's", 20],
        ["Kurkure Masala Munch 90 g", "Kurkure", 30],
        ["Bingo Mad Angles 90 g", "Bingo", 30],
        ["Haldiram's Aloo Bhujia 200 g", "Haldiram's", 75],
        ["Haldiram's Moong Dal 200 g", "Haldiram's", 85],
        ["Too Yumm! Multigrain Chips 60 g", "Too Yumm!", 40],
        ["Parle-G Biscuits 800 g", "Parle", 80],
        ["Britannia Good Day Cashew 200 g", "Britannia", 60],
        ["Oreo Original 300 g", "Oreo", 100],
        ["Sunfeast Dark Fantasy Choco Fills 300 g", "Sunfeast", 160],
        ["Cadbury Dairy Milk 110 g", "Cadbury", 100],
        ["Nestle KitKat 4 Finger 37 g", "KitKat", 45],
        ["Kissan Peanut Butter Creamy 400 g", "Kissan", 210],
        ["Nutraj Premium Almonds 500 g", "Nutraj", 449],
        ["Farmley Premium Trail Mix 200 g", "Farmley", 249],
        ["Yoga Bar 20g Protein Bar 50 g", "Yoga Bar", 100],
        ["Cornitos Nacho Crisps 150 g", "Cornitos", 99]

    ],

    beverages: [

        ["Coca-Cola Original Taste 750 ml", "Coca-Cola", 45],
        ["Pepsi 750 ml", "Pepsi", 45],
        ["Sprite 750 ml", "Sprite", 45],
        ["Fanta Orange 750 ml", "Fanta", 45],
        ["Real Fruit Power Orange 1 L", "Real", 120],
        ["Real Fruit Power Mixed Fruit 1 L", "Real", 130],
        ["Tropicana Mixed Fruit 1 L", "Tropicana", 125],
        ["Paper Boat Aamras 600 ml", "Paper Boat", 60],
        ["Tata Tea Premium 500 g", "Tata Tea", 275],
        ["Brooke Bond Red Label 500 g", "Red Label", 270],
        ["Tetley Green Tea 100 Bags", "Tetley", 299],
        ["Nescafe Classic Coffee 100 g", "Nescafe", 299],
        ["Bru Instant Coffee 100 g", "Bru", 275],
        ["Starbucks Premium Instant Coffee 100 g", "Starbucks", 699],
        ["Bisleri Mineral Water 1 L", "Bisleri", 20],
        ["Kinley Soda 750 ml", "Kinley", 25]

    ],

    bakery: [

        ["Modern White Bread 400 g", "Modern", 45],
        ["Britannia Brown Bread 400 g", "Britannia", 50],
        ["Harvest Gold Multigrain Bread 400 g", "Harvest Gold", 60],
        ["Britannia Bourbon 150 g", "Britannia", 40],
        ["Sunfeast Marie Light 250 g", "Sunfeast", 40],
        ["Britannia NutriChoice Digestive 250 g", "Britannia", 65],
        ["London Dairy Chocolate Muffin 2 Pieces", "London Dairy", 99],
        ["Monginis Chocolate Cake 500 g", "Monginis", 399],
        ["Monginis Black Forest Cake 500 g", "Monginis", 449],
        ["Theobroma Brownie 1 Piece", "Theobroma", 149],
        ["Britannia Fruit Cake 250 g", "Britannia", 120],
        ["Harvest Gold Garlic Bread 200 g", "Harvest Gold", 75]

    ],

    "personal-care": [

        ["Dove Daily Shine Shampoo 340 ml", "Dove", 299],
        ["Head & Shoulders Cool Menthol Shampoo 340 ml", "Head & Shoulders", 349],
        ["L'Oreal Paris Total Repair 5 Shampoo 360 ml", "L'Oreal Paris", 399],
        ["Pantene Advanced Hairfall Solution Shampoo 650 ml", "Pantene", 549],
        ["Dove Intense Repair Conditioner 175 ml", "Dove", 249],
        ["Nivea Creme Soft Soap 4 x 75 g", "Nivea", 199],
        ["Dove Beauty Bar 3 x 100 g", "Dove", 180],
        ["Nivea Men Deep Impact Body Wash 250 ml", "Nivea Men", 249],
        ["Himalaya Neem Face Wash 150 ml", "Himalaya", 170],
        ["Colgate Strong Teeth Toothpaste 200 g", "Colgate", 110],
        ["Sensodyne Fresh Gel 80 g", "Sensodyne", 160],
        ["Oral-B Cross Action Toothbrush", "Oral-B", 120],
        ["Nivea Body Lotion 400 ml", "Nivea", 399],
        ["Vaseline Intensive Care Lotion 400 ml", "Vaseline", 299],
        ["Park Avenue Deodorant 150 ml", "Park Avenue", 199],
        ["Gillette Mach3 Razor", "Gillette", 299]

    ],

    beauty: [

        ["Lakme Absolute Skin Natural Mousse 25 g", "Lakme", 825],
        ["Maybelline Fit Me Foundation 30 ml", "Maybelline", 649],
        ["Maybelline Colossal Kajal 0.35 g", "Maybelline", 199],
        ["Lakme Eyeconic Kajal 0.35 g", "Lakme", 210],
        ["Maybelline Lash Sensational Mascara 9.5 ml", "Maybelline", 599],
        ["L'Oreal Paris Revitalift Serum 30 ml", "L'Oreal Paris", 799],
        ["Minimalist 10% Niacinamide Serum 30 ml", "Minimalist", 599],
        ["The Derma Co 10% Vitamin C Serum 30 ml", "The Derma Co", 599],
        ["Neutrogena Hydro Boost Water Gel 50 g", "Neutrogena", 950],
        ["Cetaphil Gentle Skin Cleanser 125 ml", "Cetaphil", 399],
        ["Nivea Original Care Lip Balm 4.8 g", "Nivea", 175],
        ["Maybelline SuperStay Matte Ink 5 ml", "Maybelline", 699],
        ["Mamaearth Ubtan Face Mask 100 g", "Mamaearth", 499],
        ["Plum Green Tea Face Wash 75 ml", "Plum", 345]

    ],

    fashion: [

        ["Men's Solid Cotton T-Shirt", "Levi's", 999],
        ["Men's Regular Fit T-Shirt", "H&M", 799],
        ["Men's Slim Fit Polo Shirt", "U.S. Polo Assn.", 1499],
        ["Men's 511 Slim Fit Jeans", "Levi's", 2999],
        ["Men's Straight Fit Jeans", "Jack & Jones", 2499],
        ["Men's Casual Shirt", "Allen Solly", 1599],
        ["Men's Full Sleeve Shirt", "Peter England", 1799],
        ["Men's Cotton Hoodie", "H&M", 1999],
        ["Men's Cotton Joggers", "Puma", 1799],
        ["Men's Track Pants", "Adidas", 1999],
        ["Women's Slim Fit Jeans", "Levi's", 2999],
        ["Women's Casual Top", "H&M", 999],
        ["Women's Kurta", "Biba", 1599],
        ["Women's Anarkali Kurta", "W", 2499],
        ["Women's Puffer Jacket", "Zara", 3999],
        ["Men's Formal Trousers", "Van Heusen", 2199],
        ["Men's Winter Jacket", "Jack & Jones", 3999]

    ],

    footwear: [

        ["Revolution 7 Running Shoes", "Nike", 4995],
        ["Grand Court 2.0 Shoes", "Adidas", 4999],
        ["RS-X Sneakers", "Puma", 8999],
        ["574 Core Sneakers", "New Balance", 7999],
        ["Chuck Taylor All Star", "Converse", 4999],
        ["Old Skool Shoes", "Vans", 5999],
        ["Bradley Mid Sneakers", "Skechers", 5999],
        ["Men's Formal Lace-Up Shoes", "Clarks", 6999],
        ["Men's Leather Loafers", "Hush Puppies", 4999],
        ["Women's Running Shoes", "Asics", 6999],
        ["Women's Walking Shoes", "Skechers", 5999],
        ["Adilette Aqua Slides", "Adidas", 1999],
        ["Benassi Slides", "Nike", 1995],
        ["Crocs Classic Clog", "Crocs", 3495],
        ["Men's Outdoor Sandals", "Woodland", 2999]

    ],

    electronics: [

        ["MX Keys Mini Wireless Keyboard", "Logitech", 9495],
        ["M185 Wireless Mouse", "Logitech", 895],
        ["K2 Mechanical Keyboard", "Keychron", 8999],
        ["Razer DeathAdder Essential Mouse", "Razer", 2499],
        ["WD My Passport 1TB External HDD", "WD", 5999],
        ["Samsung T7 1TB Portable SSD", "Samsung", 8999],
        ["SanDisk Ultra 128GB USB Drive", "SanDisk", 999],
        ["Anker 20W USB-C Charger", "Anker", 1499],
        ["Belkin 65W GaN Charger", "Belkin", 4499],
        ["TP-Link Archer C6 Router", "TP-Link", 2999],
        ["Amazon Basics HDMI Cable 2 m", "Amazon Basics", 499],
        ["Mi 20000mAh Power Bank", "Xiaomi", 2199],
        ["Apple 20W USB-C Power Adapter", "Apple", 1699],
        ["Logitech C920 HD Pro Webcam", "Logitech", 7995]

    ],

    mobiles: [

        ["iPhone 16 128GB", "Apple", 79900],
        ["iPhone 16 Plus 128GB", "Apple", 89900],
        ["iPhone 16 Pro 128GB", "Apple", 109900],
        ["Samsung Galaxy S25 256GB", "Samsung", 80999],
        ["Samsung Galaxy S25 Ultra 256GB", "Samsung", 129999],
        ["Samsung Galaxy A56 5G 128GB", "Samsung", 41999],
        ["OnePlus 13 256GB", "OnePlus", 69999],
        ["OnePlus Nord 4 128GB", "OnePlus", 29999],
        ["Google Pixel 9 256GB", "Google", 79999],
        ["Google Pixel 9 Pro 256GB", "Google", 109999],
        ["Xiaomi 14 Civi 256GB", "Xiaomi", 42999],
        ["Nothing Phone 3a 128GB", "Nothing", 24999],
        ["Motorola Edge 60 Fusion 256GB", "Motorola", 24999],
        ["Realme GT 7 256GB", "Realme", 39999],
        ["Vivo V50 128GB", "Vivo", 34999],
        ["OPPO Reno 13 128GB", "OPPO", 37999]

    ],

    laptops: [

        ["MacBook Air M4 13-inch 256GB", "Apple", 99900],
        ["MacBook Air M4 15-inch 256GB", "Apple", 119900],
        ["MacBook Pro M4 14-inch", "Apple", 169900],
        ["Dell Inspiron 14", "Dell", 64990],
        ["Dell XPS 13", "Dell", 139990],
        ["HP Pavilion 14", "HP", 67990],
        ["HP Envy x360", "HP", 99990],
        ["Lenovo IdeaPad Slim 5", "Lenovo", 64990],
        ["Lenovo LOQ Gaming Laptop", "Lenovo", 89990],
        ["ASUS Vivobook 15", "ASUS", 59990],
        ["ASUS ROG Strix G16", "ASUS", 129990],
        ["Acer Aspire 5", "Acer", 54990],
        ["Acer Nitro V Gaming", "Acer", 79990],
        ["MSI Modern 14", "MSI", 64990]

    ],

    tablets: [

        ["iPad 11th Gen 128GB", "Apple", 34900],
        ["iPad Air M3 128GB", "Apple", 59900],
        ["iPad Pro M4 256GB", "Apple", 99900],
        ["Samsung Galaxy Tab S10 FE", "Samsung", 49999],
        ["Samsung Galaxy Tab S10 Ultra", "Samsung", 108999],
        ["OnePlus Pad 2", "OnePlus", 39999],
        ["Xiaomi Pad 7", "Xiaomi", 27999],
        ["Lenovo Tab P12", "Lenovo", 29999],
        ["Redmi Pad Pro", "Redmi", 24999],
        ["realme Pad 2", "Realme", 19999],
        ["OPPO Pad 3", "OPPO", 39999],
        ["Microsoft Surface Pro", "Microsoft", 109999]

    ],

    tv: [

        ["43-inch 4K LED Smart TV", "Sony", 44990],
        ["55-inch Bravia 4K Smart TV", "Sony", 69990],
        ["65-inch Bravia 4K OLED TV", "Sony", 149990],
        ["43-inch Crystal 4K Vivid", "Samsung", 39990],
        ["55-inch Crystal 4K UHD", "Samsung", 54990],
        ["65-inch Neo QLED 4K", "Samsung", 129990],
        ["43-inch 4K QLED TV", "TCL", 39990],
        ["55-inch QLED Smart TV", "TCL", 49990],
        ["55-inch 4K OLED TV", "LG", 109990],
        ["65-inch 4K OLED TV", "LG", 149990],
        ["43-inch 4K Google TV", "Xiaomi", 29999],
        ["55-inch 4K Google TV", "OnePlus", 44999],
        ["50-inch 4K Smart TV", "Hisense", 39990]

    ],

    audio: [

        ["AirPods 4", "Apple", 12900],
        ["AirPods Pro 2", "Apple", 24900],
        ["Galaxy Buds3", "Samsung", 14999],
        ["Galaxy Buds3 Pro", "Samsung", 19999],
        ["OnePlus Buds Pro 3", "OnePlus", 11999],
        ["Nothing Ear", "Nothing", 8999],
        ["Sony WH-1000XM5 Headphones", "Sony", 29990],
        ["Sony WF-1000XM5 Earbuds", "Sony", 24990],
        ["JBL Tune 770NC", "JBL", 6999],
        ["JBL Charge 5 Speaker", "JBL", 14999],
        ["Bose QuietComfort Headphones", "Bose", 29900],
        ["Marshall Emberton III", "Marshall", 17999],
        ["Boat Rockerz 450", "boAt", 1499],
        ["Boat Airdopes 141", "boAt", 1299]

    ],

    cameras: [

        ["EOS R50 Mirrorless Camera", "Canon", 74995],
        ["EOS R10 Mirrorless Camera", "Canon", 84995],
        ["Alpha ZV-E10 II", "Sony", 99990],
        ["Alpha 6400", "Sony", 79990],
        ["Alpha 7 IV", "Sony", 199990],
        ["Nikon Z50 II", "Nikon", 99995],
        ["Nikon Z6 III", "Nikon", 219995],
        ["Fujifilm X-S20", "Fujifilm", 119999],
        ["GoPro HERO13 Black", "GoPro", 44990],
        ["DJI Osmo Action 5 Pro", "DJI", 44990],
        ["DJI Osmo Pocket 3", "DJI", 54999],
        ["Manfrotto Compact Tripod", "Manfrotto", 4999],
        ["SanDisk Extreme Pro 128GB SD Card", "SanDisk", 1899]

    ],

    "home-appliances": [

        ["1.5 Ton 5 Star Split AC", "LG", 49990],
        ["1.5 Ton 5 Star Split AC", "Daikin", 52990],
        ["1.5 Ton 5 Star Split AC", "Voltas", 44990],
        ["Double Door Refrigerator 350 L", "Samsung", 54990],
        ["Double Door Refrigerator 340 L", "Whirlpool", 52990],
        ["7 kg Fully Automatic Washing Machine", "LG", 32990],
        ["8 kg Front Load Washing Machine", "Samsung", 44990],
        ["6.5 kg Fully Automatic Washing Machine", "IFB", 29990],
        ["1.5 L Air Fryer", "Philips", 4999],
        ["4.2 L Air Fryer", "Philips", 7999],
        ["Air Purifier 300 Series", "Philips", 12999],
        ["Robot Vacuum Cleaner", "Ecovacs", 29999],
        ["Tower Fan", "Bajaj", 4999],
        ["Water Purifier RO+UV", "Kent", 14999],
        ["Dishwasher 13 Place", "Bosch", 49990]

    ],

    kitchen: [

        ["Hard Anodised Kadai 2.5 L", "Prestige", 1499],
        ["Non-Stick Fry Pan 26 cm", "Hawkins", 1299],
        ["Pressure Cooker 3 L", "Prestige", 1999],
        ["Pressure Cooker 5 L", "Prestige", 2499],
        ["Mixer Grinder 750W", "Bajaj", 3499],
        ["Mixer Grinder 750W", "Philips", 3999],
        ["Electric Kettle 1.5 L", "Philips", 1299],
        ["Electric Kettle 1.7 L", "Philips", 1699],
        ["Pop-Up Toaster", "Philips", 2499],
        ["Sandwich Maker", "Philips", 1999],
        ["Induction Cooktop", "Philips", 2499],
        ["Air Fryer 4.1 L", "AGARO", 6999],
        ["Stainless Steel Dinner Set", "Milton", 2499],
        ["Glass Storage Container Set", "Borosil", 1299],
        ["Knife Set", "Victorinox", 4999]

    ],

    "home-living": [

        ["LED Table Lamp", "Philips", 1299],
        ["Smart LED Bulb 9W", "Philips", 499],
        ["Smart LED Bulb 12W", "Wipro", 699],
        ["Wall Clock", "Ajanta", 599],
        ["Cotton Double Bedsheet", "Spaces", 1499],
        ["Premium Double Bedsheet", "Bombay Dyeing", 1999],
        ["Cotton Bath Towel", "Spaces", 799],
        ["Premium Cushion Set", "Wakefit", 999],
        ["Memory Foam Pillow", "Wakefit", 1299],
        ["Scented Candle", "Bath & Body Works", 2499],
        ["Decorative Vase", "Home Centre", 999],
        ["Floor Rug 5 x 7 ft", "Home Centre", 2999],
        ["Decorative Mirror", "Home Centre", 3499],
        ["Curtain Set", "Spaces", 1999]

    ],

    furniture: [

        ["Study Table", "IKEA", 6999],
        ["Office Chair", "IKEA", 9999],
        ["MARKUS Office Chair", "IKEA", 16999],
        ["Computer Desk", "Wakefit", 8999],
        ["Bookshelf", "IKEA", 7999],
        ["Coffee Table", "IKEA", 4999],
        ["Bedside Table", "IKEA", 2999],
        ["Sofa 3 Seater", "Wakefit", 24999],
        ["L-Shaped Sofa", "Wakefit", 34999],
        ["Queen Size Bed", "Wakefit", 29999],
        ["Dining Table 4 Seater", "IKEA", 19999],
        ["Dining Chair", "IKEA", 3999],
        ["TV Unit", "Urban Ladder", 14999],
        ["Storage Cabinet", "IKEA", 7999]

    ],

    cleaning: [

        ["Harpic Power Plus Toilet Cleaner 1 L", "Harpic", 220],
        ["Domex Disinfectant Toilet Cleaner 1 L", "Domex", 210],
        ["Vim Dishwash Liquid 750 ml", "Vim", 199],
        ["Pril Dishwash Liquid 750 ml", "Pril", 180],
        ["Surf Excel Matic Liquid 2 L", "Surf Excel", 399],
        ["Ariel Matic Liquid 2 L", "Ariel", 449],
        ["Comfort Fabric Conditioner 860 ml", "Comfort", 249],
        ["Colin Glass Cleaner 500 ml", "Colin", 115],
        ["Lizol Floor Cleaner 2 L", "Lizol", 299],
        ["Dettol Disinfectant Liquid 1 L", "Dettol", 299],
        ["Scotch-Brite Floor Wiper", "Scotch-Brite", 399],
        ["Scotch-Brite Microfiber Cloth Set", "Scotch-Brite", 199],
        ["Gala Spin Mop", "Gala", 999],
        ["Milton Dustbin 10 L", "Milton", 599]

    ],

    stationery: [

        ["Classmate Pulse Notebook 6 Subject", "Classmate", 199],
        ["Classmate Long Notebook 172 Pages", "Classmate", 80],
        ["Navneet Youva Notebook", "Navneet", 75],
        ["Reynolds Trimax Pen", "Reynolds", 60],
        ["Cello Butterflow Pen Pack", "Cello", 100],
        ["Faber-Castell Pencil Set", "Faber-Castell", 80],
        ["Camlin Exam Kit", "Camlin", 149],
        ["Faber-Castell Highlighter Set", "Faber-Castell", 199],
        ["Kangaro Stapler", "Kangaro", 149],
        ["Kangaro Stapler Pins", "Kangaro", 50],
        ["Fevicol MR 100 g", "Fevicol", 50],
        ["Post-it Notes 3 x 3", "Post-it", 199],
        ["Classmate Drawing Book", "Classmate", 70],
        ["Camlin Sketch Pens", "Camlin", 120],
        ["Pilot V5 Pen", "Pilot", 70]

    ],

    books: [

        ["Atomic Habits", "James Clear", 599],
        ["The Psychology of Money", "Morgan Housel", 399],
        ["Rich Dad Poor Dad", "Robert Kiyosaki", 399],
        ["Ikigai", "Hector Garcia", 399],
        ["Deep Work", "Cal Newport", 499],
        ["The Alchemist", "Paulo Coelho", 299],
        ["Think and Grow Rich", "Napoleon Hill", 199],
        ["1984", "George Orwell", 299],
        ["The Great Gatsby", "F. Scott Fitzgerald", 199],
        ["Python Crash Course", "Eric Matthes", 899],
        ["Head First Java", "Kathy Sierra", 999],
        ["Clean Code", "Robert C. Martin", 799],
        ["The Complete Guide to HTML and CSS", "Thomas Powell", 999],
        ["A Brief History of Time", "Stephen Hawking", 399],
        ["Sapiens", "Yuval Noah Harari", 599]

    ],

    toys: [

        ["LEGO Classic Medium Creative Brick Box", "LEGO", 2499],
        ["LEGO City Police Car", "LEGO", 999],
        ["Hot Wheels 5 Car Pack", "Hot Wheels", 499],
        ["Barbie Doll", "Barbie", 999],
        ["Barbie Dreamhouse", "Barbie", 8999],
        ["Remote Control Car", "Funskool", 1499],
        ["Scrabble Board Game", "Mattel", 999],
        ["UNO Card Game", "Mattel", 199],
        ["Monopoly Classic", "Hasbro", 999],
        ["Rubik's Cube 3x3", "Rubik's", 399],
        ["Nerf Elite Blaster", "Nerf", 1999],
        ["Funskool Building Blocks", "Funskool", 799],
        ["Scientific Experiment Kit", "Smartivity", 1499],
        ["Plush Teddy Bear 2 ft", "Hamleys", 999]

    ],

    "baby-care": [

        ["Johnson's Baby Shampoo 500 ml", "Johnson's Baby", 399],
        ["Johnson's Baby Top-to-Toe Wash 500 ml", "Johnson's Baby", 399],
        ["Himalaya Baby Lotion 400 ml", "Himalaya", 349],
        ["Mamaearth Milky Soft Baby Body Lotion 400 ml", "Mamaearth", 449],
        ["Pampers Active Baby Diapers Medium 64 Count", "Pampers", 999],
        ["Huggies Wonder Pants Large 44 Count", "Huggies", 899],
        ["MamyPoko Pants Large 44 Count", "MamyPoko", 899],
        ["Johnson's Baby Wipes 80 Count", "Johnson's Baby", 249],
        ["Mee Mee Feeding Bottle 250 ml", "Mee Mee", 299],
        ["Philips Avent Feeding Bottle 260 ml", "Philips Avent", 799],
        ["Himalaya Baby Powder 400 g", "Himalaya", 249],
        ["Mothercare Baby Bath Towel", "Mothercare", 699],
        ["R for Rabbit Baby Care Kit", "R for Rabbit", 999]

    ],

    sports: [

        ["Yoga Mat 6 mm", "Boldfit", 699],
        ["Premium Yoga Mat", "Decathlon", 999],
        ["Adjustable Dumbbell Set 20 kg", "Kore", 3999],
        ["Resistance Band Set", "Decathlon", 699],
        ["Gym Gloves", "Nike", 999],
        ["Cricket Bat English Willow", "SG", 5999],
        ["Cricket Bat Kashmir Willow", "SS", 2999],
        ["FIFA Quality Football", "Adidas", 1999],
        ["Basketball", "Spalding", 2499],
        ["Badminton Racket", "Yonex", 2499],
        ["Tennis Racket", "Wilson", 6999],
        ["Cycling Helmet", "Decathlon", 1999],
        ["Fitness Tracker", "Fitbit", 7999],
        ["Running Shoes", "Asics", 6999],
        ["Treadmill", "Lifelong", 29999]

    ],

    automotive: [

        ["Magnetic Car Phone Holder", "Portronics", 699],
        ["Car Air Freshener", "Godrej Aer", 199],
        ["Car Cleaning Kit", "3M", 999],
        ["Car Vacuum Cleaner", "AGARO", 2499],
        ["70mai Dash Cam", "70mai", 6999],
        ["Tyre Inflator", "Michelin", 4999],
        ["Car Cover", "Kozdiko", 999],
        ["Bike Cover", "Kozdiko", 699],
        ["Riding Gloves", "Probiker", 1299],
        ["Car Seat Cushion", "Autofurnish", 999],
        ["Emergency Car Kit", "Amazon Basics", 1499],
        ["Portable Jump Starter", "Portronics", 3999],
        ["Bosch Car Wiper Blade", "Bosch", 799],
        ["3M Car Polish", "3M", 499]

    ],

    travel: [

        ["American Tourister Backpack 32 L", "American Tourister", 2499],
        ["Skybags Casual Backpack 30 L", "Skybags", 1999],
        ["Safari Hard Luggage 55 cm", "Safari", 2999],
        ["American Tourister Cabin Trolley", "American Tourister", 4999],
        ["Samsonite Large Suitcase", "Samsonite", 12999],
        ["Travel Organizer", "Safari", 599],
        ["Passport Holder", "DailyObjects", 999],
        ["Neck Travel Pillow", "Cabeau", 2499],
        ["Universal Travel Adapter", "Portronics", 999],
        ["Packing Cube Set", "Amazon Basics", 899],
        ["Travel Toiletry Bag", "Wildcraft", 799],
        ["Milton Travel Water Bottle 1 L", "Milton", 499],
        ["Digital Luggage Scale", "Dr Trust", 699],
        ["Travel Blanket", "Amazon Basics", 999]

    ],

    tools: [

        ["Bosch Screwdriver Set", "Bosch", 999],
        ["Stanley Screwdriver Set", "Stanley", 1299],
        ["Taparia Hammer", "Taparia", 499],
        ["Bosch Cordless Drill", "Bosch", 6999],
        ["Black+Decker Power Drill", "Black+Decker", 4999],
        ["Stanley Adjustable Wrench", "Stanley", 799],
        ["Stanley Measuring Tape 5 m", "Stanley", 399],
        ["Taparia Tool Box", "Taparia", 1499],
        ["Taparia Allen Key Set", "Taparia", 299],
        ["Stanley Pliers Set", "Stanley", 999],
        ["Bosch Hand Saw", "Bosch", 899],
        ["Black+Decker Multi Tool Kit", "Black+Decker", 2499],
        ["Fluke Digital Multimeter", "Fluke", 4999],
        ["Dewalt Utility Knife", "DeWalt", 999]

    ]

};


/* =========================================================
4. PRODUCT SPECIFICATION ENGINE
No product names/categories are invented.
Information is derived from the existing product.
========================================================= */

function getProductType(categoryId) {

    const types = {

        grocery: "Grocery",
        "fruits-vegetables": "Fruits & Vegetables",
        "dairy-breakfast": "Dairy & Breakfast",
        snacks: "Snacks",
        beverages: "Beverage",
        bakery: "Bakery",
        "personal-care": "Personal Care",
        beauty: "Beauty",
        fashion: "Fashion",
        footwear: "Footwear",
        electronics: "Electronics",
        mobiles: "Mobiles",
        laptops: "Laptops",
        tablets: "Tablets",
        tv: "Television",
        audio: "Audio",
        cameras: "Camera & Accessory",
        "home-appliances": "Home Appliance",
        kitchen: "Kitchen",
        "home-living": "Home & Living",
        furniture: "Furniture",
        cleaning: "Cleaning",
        stationery: "Stationery",
        books: "Book",
        toys: "Toy & Game",
        "baby-care": "Baby Care",
        "pet-supplies": "Pet Supplies",
        sports: "Sports & Fitness",
        automotive: "Automotive",
        travel: "Travel",
        tools: "Tools & Hardware"

    };

    return (
        types[categoryId] ||
        "Product"
    );
}


function extractPackSize(name) {

    const match =
        String(name).match(
            /(\d+(?:\.\d+)?)\s*(kg|g|mg|ml|l|L|GB|TB|W|mm|cm|inch|ft|count|piece|pieces|dozen|pages|bags|place|seater|year|years)\b/i
        );

    return match
        ? match[0]
        : "";
}


function resolveProductInput(productOrId) {

    if (!productOrId) {
        return null;
    }

    if (
        typeof productOrId ===
        "object"
    ) {
        return productOrId;
    }

    return getProductById(
        productOrId
    ) || null;

}


function getProductSpecifications(
    productOrId
) {

    const product =
        resolveProductInput(
            productOrId
        );

if (!product) {
        return [];
    }

    const name =
        product.name;

    const category =
        product.category;

    const specifications = [];

    specifications.push({
        label: "Brand",
        value: product.brand
    });

    specifications.push({
        label: "Category",
        value: product.categoryName
    });

    specifications.push({
        label: "Product Type",
        value: getProductType(category)
    });

    const packSize =
        extractPackSize(name);

    if (packSize) {

        specifications.push({
            label:
                category === "fashion"
                    ? "Product Details"
                    : (
                        ["mobiles", "laptops", "tablets"].includes(category)
                            ? "Storage"
                            : "Pack / Size"
                    ),
            value: packSize
        });

    }

    switch (category) {

        case "grocery":
        case "dairy-breakfast":
        case "snacks":
        case "beverages":
        case "bakery":
        case "cleaning":
        case "personal-care":
        case "beauty":
        case "baby-care":
        case "pet-supplies":

            specifications.push({
                label: "Usage",
                value: "As indicated on the product packaging"
            });

            specifications.push({
                label: "Packaging",
                value: "Retail packaged product"
            });

            break;


        case "fruits-vegetables":

            specifications.push({
                label: "Product Condition",
                value: "Fresh produce"
            });

            specifications.push({
                label: "Handling",
                value: "Handle and store appropriately after delivery"
            });

            break;


        case "fashion":

            specifications.push({
                label: "Product Type",
                value: name
            });

            specifications.push({
                label: "Size",
                value: "S / M / L / XL / XXL"
            });

            break;





        case "mobiles":
        case "tablets":
        case "laptops":
        case "electronics":
        case "audio":
        case "cameras":
        case "tv":

            specifications.push({
                label: "Product",
                value: name
            });

            specifications.push({
                label: "Category",
                value: product.categoryName
            });

            specifications.push({
                label: "Brand",
                value: product.brand
            });

            break;





        case "kitchen":

            specifications.push({
                label: "Kitchen Product",
                value: name
            });

            break;














        case "sports":

            specifications.push({
                label: "Sports Product",
                value: name
            });

            break;





        case "travel":

            specifications.push({
                label: "Travel Product",
                value: name
            });

            break;




    }

    return specifications;
}


function getProductDescription(
    productOrId
) {

    const product =
        resolveProductInput(
            productOrId
        );

    if (!product) {
        return "";
    }

const name =
        product.name;

    const brand =
        product.brand;

    const category =
        product.categoryName;

    switch (product.category) {

        case "grocery":

            return `${name} from ${brand}, available in the ${category} collection. A packaged everyday grocery product presented with its listed pack size and current VEDEN pricing.`;

        case "fruits-vegetables":

            return `${name} from ${brand}, available in the ${category} collection. This fresh produce item is presented according to the existing product listing and pack quantity.`;

        case "dairy-breakfast":

            return `${name} from ${brand}, an everyday ${category} product listed on VEDEN with its existing pack size, brand and current price.`;

        case "snacks":

            return `${name} from ${brand}, a packaged snack listed in the ${category} collection. The product is presented with its existing size, pricing and product information.`;

        case "beverages":

            return `${name} from ${brand}, listed under ${category}. The product details retain the existing product name, brand, pack size and VEDEN pricing.`;

        case "bakery":

            return `${name} from ${brand}, a bakery product listed on VEDEN. The existing product name and listed quantity are retained for the product detail experience.`;

        case "personal-care":

            return `${name} from ${brand}, listed under ${category}. Product information is presented according to its existing name, brand and listed size.`;

        case "beauty":

            return `${name} from ${brand}, listed under ${category}. The product detail page presents the existing product identity, size, pricing, rating and availability information.`;

        case "fashion":

            return `${name} from ${brand}, listed in the ${category} collection. The product page presents the existing fashion item with its brand, pricing, rating, availability and product information.`;

        case "footwear":

            return `${name} from ${brand}, listed in the ${category} collection. The product page preserves the existing product identity and presents its available product information, pricing and ratings.`;

        case "electronics":
        case "mobiles":
        case "laptops":
        case "tablets":
        case "tv":
        case "audio":
        case "cameras":

            return `${name} from ${brand}, listed under ${category}. The product page presents the existing device or accessory with its listed identity, pricing, rating, availability and category-specific information.`;

        case "home-appliances":

            return `${name} from ${brand}, listed under ${category}. The product detail page presents the appliance with its existing product identity, pricing, availability and relevant product information.`;

        case "kitchen":

            return `${name} from ${brand}, listed in the ${category} collection. The product page presents its existing product identity, listed size where available, pricing and availability.`;

        case "home-living":
        case "furniture":

            return `${name} from ${brand}, listed under ${category}. The product page presents the existing home product with its brand, pricing, availability and relevant product information.`;

        case "cleaning":

            return `${name} from ${brand}, listed in the ${category} collection. The existing product name, brand, pack size, pricing and availability are preserved.`;

        case "stationery":

            return `${name} from ${brand}, listed under ${category}. The product page presents the existing stationery item with its brand, listed details, pricing and availability.`;

        case "books":

            return `${name}, listed under ${category}. The existing author, title and price are preserved and presented together with ratings, reviews and availability.`;

        case "toys":

            return `${name} from ${brand}, listed under ${category}. The product page presents the existing toy or game with its product identity, pricing, ratings and availability.`;

        case "baby-care":

            return `${name} from ${brand}, listed under ${category}. The product page preserves the existing product identity, listed size or count, pricing and availability.`;

        case "pet-supplies":

            return `${name} from ${brand}, listed under ${category}. The product page presents the existing pet product with its listed size, pricing, rating and availability.`;

        case "sports":

            return `${name} from ${brand}, listed under ${category}. The product page presents the existing sports or fitness product with its product identity, pricing, ratings and availability.`;

        case "automotive":

            return `${name} from ${brand}, listed under ${category}. The existing product identity, brand, price, rating and availability are presented on its dedicated detail page.`;

        case "travel":

            return `${name} from ${brand}, listed under ${category}. The product page presents the existing travel accessory or luggage item with its available product information and pricing.`;

        case "tools":

            return `${name} from ${brand}, listed under ${category}. The product page presents the existing tool with its brand, product identity, pricing, rating and availability.`;

        default:

            return `${name} from ${brand}, listed on VEDEN with its existing product information, pricing, rating, availability and related products.`;

    }
}


/* =========================================================
5. PRODUCT GENERATOR
NO FAKE ROUND × 10 DUPLICATES
========================================================= */

function createProductCatalog() {

    const products = [];

    Object.keys(PRODUCT_LIBRARY).forEach(

        categoryId => {

            const categoryProducts =
                PRODUCT_LIBRARY[categoryId];

            const category =
                VEDEN_CATEGORIES.find(
                    item =>
                        item.id === categoryId
                );

            if (!category) {
                return;
            }

            categoryProducts.forEach(

                (item, index) => {

                    const [
                        name,
                        brand,
                        price
                    ] = item;

                    const safeId =
                        `${categoryId}-${index + 1}`
                            .toLowerCase()
                            .replace(
                                /[^a-z0-9-]+/g,
                                "-"
                            );

                    const discount =
                        [5, 10, 15, 20, 25][
                            index % 5
                        ];

                    const oldPrice =
                        Math.round(
                            price /
                            (
                                1 -
                                discount / 100
                            )
                        );

                    const rating =
                        Number(
                            (
                                4.0 +
                                (
                                    index % 10
                                ) * 0.1
                            ).toFixed(1)
                        );

                    const reviewCount =
                        25 +
                        (
                            index * 137
                        ) % 4800;

                    const image =
                        getProductImagePath(
                            categoryId,
                            index,
                            safeId
                        );

                    const product = {

                        id:
                            safeId,

                        name:
                            name,

                        brand:
                            brand,

                        category:
                            categoryId,

                        categoryName:
                            category.name,

                        price:
                            price,

                        oldPrice:
                            oldPrice,

                        discount:
                            discount,

                        rating:
                            rating,

                        reviewCount:
                            reviewCount,

                        image:
                            image,

                        description:
                            "",

                        stock:
                            5 +
                            (
                                index % 50
                            ),

                        featured:
                            index % 4 === 0,

                        newest:
                            Date.now() -
                            (
                                index * 86400000
                            )

                    };

                    product.description =
                        getProductDescription(
                            product
                        );

                    product.specifications =
                        getProductSpecifications(
                            product
                        );

                    product.productType =
                        getProductType(
                            categoryId
                        );

                    product.availability =
                        product.stock > 0
                            ? "In Stock"
                            : "Out of Stock";

                    products.push(
                        product
                    );

                }

            );

        }

    );

    return products;
}


const VEDEN_PRODUCTS =
    createProductCatalog();


/* =========================================================
6. PRODUCT ACCESS
========================================================= */

function getAllProducts() {

    return VEDEN_PRODUCTS;

}


function getProductById(id) {

    if (!id) {
        return undefined;
    }

    return VEDEN_PRODUCTS.find(

        product =>
            product.id ===
            String(id).trim()

    );

}


function getProductsByCategory(categoryId) {

    return VEDEN_PRODUCTS.filter(

        product =>
            product.category === categoryId

    );

}


/* =========================================================
7. SEARCH
========================================================= */

function searchProducts(query) {

    if (!query) {
        return [];
    }

    const searchTerm =
        String(query)
            .toLowerCase()
            .trim();

    if (!searchTerm) {
        return [];
    }

    return VEDEN_PRODUCTS.filter(

        product => {

            const searchableText = [

                product.name,
                product.brand,
                product.categoryName,
                product.category,
                product.description

            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(
                searchTerm
            );

        }

    );

}


/* =========================================================
8. SORTING
========================================================= */

function sortProducts(
    products,
    sortType
) {

    const sorted =
        Array.isArray(products)
            ? [...products]
            : [];

    switch (sortType) {

        case "price-low":

            return sorted.sort(
                (a, b) =>
                    a.price - b.price
            );

        case "price-high":

            return sorted.sort(
                (a, b) =>
                    b.price - a.price
            );

        case "rating":

            return sorted.sort(
                (a, b) =>
                    b.rating - a.rating
            );

        case "reviews":

            return sorted.sort(
                (a, b) =>
                    b.reviewCount -
                    a.reviewCount
            );

        case "newest":

            return sorted.sort(
                (a, b) =>
                    b.newest - a.newest
            );

        case "discount":

            return sorted.sort(
                (a, b) =>
                    b.discount - a.discount
            );

        default:

            return sorted;

    }

}


/* =========================================================
9. RELATED PRODUCTS
========================================================= */

function getRelatedProducts(
    productId,
    limit = 8
) {

    const product =
        getProductById(
            productId
        );

    if (!product) {
        return [];
    }

    return VEDEN_PRODUCTS

        .filter(

            item =>

                item.id !== product.id &&
                item.category ===
                    product.category

        )

        .slice(
            0,
            Number(limit) || 8
        );

}


/* =========================================================
10. FEATURED PRODUCTS
========================================================= */

function getFeaturedProducts(
    limit = 12
) {

    return VEDEN_PRODUCTS

        .filter(
            product =>
                product.featured
        )

        .slice(
            0,
            Number(limit) || 12
        );

}


/* =========================================================
11. NEWEST PRODUCTS
========================================================= */

function getNewestProducts(
    limit = 12
) {

    return sortProducts(
        VEDEN_PRODUCTS,
        "newest"
    ).slice(
        0,
        Number(limit) || 12
    );

}


/* =========================================================
VEDEN — DARK KNIGHT DESIGN SYSTEM
========================================================= */

const VEDEN_THEME = {

    name:
        "VEDEN",

    mode:
        "dark",

    atmosphere:
        "gotham",

    primary:
        "#050505",

    secondary:
        "#0D0D0F",

    surface:
        "#141416",

    surfaceElevated:
        "#1A1A1D",

    text:
        "#F5F5F5",

    mutedText:
        "#96969B",

    accent:
        "#F2C94C",

    accentSoft:
        "#C9A63A",

    border:
        "rgba(255,255,255,0.08)",

    danger:
        "#B3261E",

    success:
        "#D6B84C"

};


/* =========================================================
VEDEN — DARK KNIGHT UI COPY
========================================================= */

const VEDEN_UI = {

    search:
        "Search the Night",

    cart:
        "Vault",

    wishlist:
        "Shadow List",

    checkout:
        "Secure Order",

    order:
        "Mission Secured",

    account:
        "Identity",

    login:
        "Enter the Night",

    logout:
        "Exit the Night",

    emptyCart:
        "Your Vault is empty.",

    addToCart:
        "Secure in Vault",

    addedToCart:
        "Secured",

    buyNow:
        "Acquire Now",

    continueShopping:
        "Continue the Mission",

    featured:
        "Featured in the Night",

    newest:
        "New in Gotham",

    deals:
        "Night Deals"

};


/* =========================================================
VEDEN — ORIGINAL BAT-INSPIRED EMBLEM IDENTITY
========================================================= */

const VEDEN_EMBLEM = {

    name:
        "VEDEN NIGHT EMBLEM",

    style:
        "angular-wing",

    color:
        VEDEN_THEME.accent,

    glow:
        "rgba(242,201,76,0.28)"

};

/* =========================================================
12. CART SYSTEM
========================================================= */

function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "vedenCart"
            )
        ) || [];

    } catch {

        return [];

    }

}


function saveCart(cart) {

    localStorage.setItem(
        "vedenCart",
        JSON.stringify(
            cart
        )
    );

    updateCartBadges();

    updateCartUI();

}


function addToCart(
    productId,
    quantity = 1
) {

    const product =
        getProductById(
            productId
        );

    if (!product) {
        return false;
    }

    if (
        Number(product.stock) <= 0
    ) {
        return false;
    }

    let requestedQuantity =
        Math.max(
            1,
            Math.floor(
                Number(quantity) || 1
            )
        );

    const cart =
        getCart();

    const existing =
        cart.find(
            item =>
                item.id ===
                product.id
        );

    const existingQuantity =
        existing
            ? Math.max(
                0,
                Number(existing.quantity) || 0
            )
            : 0;

    if (existing) {

        existing.quantity =
            existingQuantity +
            requestedQuantity;

    } else {

        cart.push({

            id:
                product.id,

            name:
                product.name,

            brand:
                product.brand,

            price:
                product.price,

            oldPrice:
                product.oldPrice,

            discount:
                product.discount,

            image:
                product.image,

            quantity:
                requestedQuantity

        });

    }

    saveCart(
        cart
    );

    return true;

}


function buyNow(
    productId,
    quantity = 1
) {

    const added =
        addToCart(
            productId,
            quantity
        );

    if (!added) {
        return false;
    }

    /*
        Preserve the existing static architecture.
        Checkout page is used instead of introducing backend logic.
    */

    window.location.href =
        getPageBasePath() +
        "pages/checkout.html";

    return true;

}


function removeFromCart(
    productId
) {

    const cart =
        getCart().filter(
            item =>
                item.id !==
                productId
        );

    saveCart(
        cart
    );

}


function updateCartQuantity(
    productId,
    quantity
) {

    const cart =
        getCart();

    const item =
        cart.find(
            product =>
                product.id ===
                productId
        );

    if (!item) {
        return;
    }

    const nextQuantity =
        Number(quantity);

    if (
        !Number.isFinite(
            nextQuantity
        ) ||
        nextQuantity <= 0
    ) {

        removeFromCart(
            productId
        );

        return;

    }

    item.quantity =
        Math.floor(nextQuantity);

    saveCart(
        cart
    );

}


function clearCart() {

    localStorage.removeItem(
        "vedenCart"
    );

    updateCartBadges();

    updateCartUI();

}


function getCartCount() {

    return getCart().reduce(

        (
            total,
            item
        ) =>

            total +
            Number(
                item.quantity
            ),

        0

    );

}


function getCartTotal() {

    return getCart().reduce(

        (
            total,
            item
        ) =>

            total +
            (
                Number(
                    item.price
                ) *
                Number(
                    item.quantity
                )
            ),

        0

    );

}


/* =========================================================
13. CART BADGES
========================================================= */

function updateCartBadges() {

    const count =
        getCartCount();

    document
        .querySelectorAll(
            "[data-cart-count], .cart-badge"
        )
        .forEach(
            badge => {

                badge.textContent =
                    count;

            }
        );

}


/* =========================================================
14. USER SYSTEM
========================================================= */

function getCurrentUser() {

    /*
        VEDEN uses two session-key spellings in older versions.
        Read the primary key first, then fall back to the legacy
        key so existing logged-in users are not lost.
    */

    const keys = [
        "vedenCurrentUser",
        "veden_current_user"
    ];

    for (const key of keys) {

        try {

            const value =
                JSON.parse(
                    localStorage.getItem(key) || "null"
                );

            if (
                value &&
                value.loggedIn === true
            ) {

                return value;

            }

        } catch (error) {

            /* Ignore malformed session data and try the next key. */

        }

    }

    return null;

}


function logoutUser() {

    /*
        Clear both current-session keys so the user is logged out
        everywhere in this VEDEN project.
    */

    localStorage.removeItem("vedenCurrentUser");
    localStorage.removeItem("veden_current_user");
    localStorage.removeItem("vedenRemember");

    /*
        Return to the correct project root regardless of which page
        the user is currently viewing.
    */

    window.location.href =
        getPageBasePath() +
        "index.html";

}


function isUserLoggedIn() {

    return Boolean(
        getCurrentUser()
    );

}


/* =========================================================
15. PRODUCT URL
========================================================= */

function openProduct(
    productId
) {

    const product =
        getProductById(
            productId
        );

    if (!product) {
        return;
    }

    window.location.href =
        getPageBasePath() +
        `pages/product.html?id=${encodeURIComponent(
            product.id
        )}`;

}


/* =========================================================
16. CATEGORY URL
========================================================= */

function openCategory(
    categoryId
) {

    const category =
        getCategory(
            categoryId
        );

    if (!category) {
        return;
    }

    window.location.href =
        getPageBasePath() +
        `pages/products.html?category=${encodeURIComponent(
            category.id
        )}`;

}


/* =========================================================
17. SEARCH URL
========================================================= */

function openSearch(
    query
) {

    const value =
        String(
            query
        ).trim();

    if (!value) {
        return;
    }

    window.location.href =
        getPageBasePath() +
        `pages/products.html?search=${encodeURIComponent(
            value
        )}`;

}


/* =========================================================
18. PRICE FORMATTER
========================================================= */

function formatPrice(
    price
) {

    return (
        "₹" +
        Number(
            price
        ).toLocaleString(
            "en-IN"
        )
    );

}


/* =========================================================
19. STAR RATING
========================================================= */

function renderStars(
    rating
) {

    const rounded =
        Math.max(
            0,
            Math.min(
                5,
                Math.round(
                    Number(
                        rating
                    )
                )
            )
        );

    return (
        "★".repeat(
            rounded
        ) +
        "☆".repeat(
            5 - rounded
        )
    );

}


/* =========================================================
20. CATEGORY LOOKUP
========================================================= */

function getCategory(
    categoryId
) {

    return VEDEN_CATEGORIES.find(

        category =>
            category.id ===
            categoryId

    );

}


/* =========================================================
21. CATEGORY PRODUCT COUNT
========================================================= */

function getCategoryCount(
    categoryId
) {

    return VEDEN_PRODUCTS.filter(

        product =>
            product.category ===
            categoryId

    ).length;

}


/* =========================================================
22. PRODUCT REVIEWS
Product-specific deterministic reviews.
========================================================= */

const REVIEW_PROFILES = [

    {
        name: "Aarav",
        texts: [
            "The product matched the listing and arrived in good condition.",
            "Good overall experience and the product quality was satisfactory.",
            "Everything was as expected from the product listing."
        ]
    },

    {
        name: "Meera",
        texts: [
            "The product was packed properly and arrived safely.",
            "Good purchase overall. The product information was clear.",
            "I am happy with the quality and the overall experience."
        ]
    },

    {
        name: "Rohan",
        texts: [
            "The product feels well made and matches the description.",
            "Good value for the listed price and a smooth delivery experience.",
            "The item arrived safely and worked well for my requirement."
        ]
    },

    {
        name: "Ananya",
        texts: [
            "The product looks and feels as expected from the listing.",
            "Overall a good purchase with neat packaging.",
            "The quality was good and the product arrived on time."
        ]
    },

    {
        name: "Vihaan",
        texts: [
            "Good product and the listed details were useful before ordering.",
            "The item arrived in good condition and matched the listing.",
            "A satisfactory purchase with good overall quality."
        ]
    },

    {
        name: "Ishita",
        texts: [
            "Really happy with the purchase. The product was as described.",
            "The packaging was neat and the product arrived safely.",
            "Good experience overall and the product met my expectations."
        ]
    },

    {
        name: "Aditya",
        texts: [
            "The product quality is good for the listed price.",
            "Received the correct product in good condition.",
            "Everything matched the product information shown on VEDEN."
        ]
    },

    {
        name: "Kavya",
        texts: [
            "The product was exactly what I expected from the listing.",
            "Good quality and a smooth shopping experience.",
            "The product arrived safely and looked as expected."
        ]
    },

    {
        name: "Arjun",
        texts: [
            "Good purchase. The product details were accurate.",
            "The item arrived properly packed and in good condition.",
            "Overall quality was good and the product met my needs."
        ]
    },

    {
        name: "Aanya",
        texts: [
            "Nice product and the listing information was helpful.",
            "Good quality for the price and delivered safely.",
            "The product matched what was shown on the page."
        ]
    },

    {
        name: "Rahul",
        texts: [
            "The product arrived safely and matched the order.",
            "Good overall quality and a straightforward purchase.",
            "Satisfied with the product and its condition on arrival."
        ]
    },

    {
        name: "Diya",
        texts: [
            "The product matched the description and was properly packed.",
            "Good experience with the item and its overall quality.",
            "Happy with the purchase and the product presentation."
        ]
    }

];


function getProductReviews(
    productOrId
) {

    const product =
        resolveProductInput(
            productOrId
        );

    if (!product) {
        return [];
    }

const reviews = [];

    /*
        VEDEN review requirement:
        Every product review view must contain at least
        10 product-specific reviews while remaining
        deterministic for the same product.
    */

    const count =
        Math.min(
            12,
            Math.max(
                10,
                Math.floor(
                    product.reviewCount /
                    150
                )
            )
        );

    const seed =
        product.id
            .split("-")
            .reduce(
                (
                    total,
                    part
                ) =>
                    total +
                    part.length,
                0
            );

    for (
        let i = 0;
        i < count;
        i++
    ) {

        const profileIndex =
            (
                seed +
                i * 3
            ) %
            REVIEW_PROFILES.length;

        const profile =
            REVIEW_PROFILES[
                profileIndex
            ];

        const textIndex =
            (
                seed +
                i
            ) %
            profile.texts.length;

        const ratingDrop =
            (
                (
                    seed +
                    i
                ) % 3
            ) * 0.2;

        reviews.push({

            name:
                profile.name,

            rating:
                Math.max(
                    3,
                    Math.min(
                        5,
                        Math.round(
                            product.rating -
                            ratingDrop
                        )
                    )
                ),

            text:
                profile.texts[
                    textIndex
                ],

            date:
                `${i + 1} ${
                    i === 0
                        ? "day"
                        : "days"
                } ago`

        });

    }

    return reviews;

}


/* =========================================================
23. GLOBAL EVENT HANDLER
========================================================= */

window.addEventListener(
    "resize",
    () => {

        const panel =
            document.getElementById(
                "vedenProfilePanel"
            );

        if (!panel || panel.hidden) return;

        const trigger =
            document.querySelector(
                ".header-profile-trigger:not([hidden])"
            );

        if (trigger) {
            positionVedenProfilePanel(trigger);
        }

    }
);


window.addEventListener(
    "scroll",
    () => {

        const panel =
            document.getElementById(
                "vedenProfilePanel"
            );

        if (!panel || panel.hidden) return;

        const trigger =
            document.querySelector(
                ".header-profile-trigger:not([hidden])"
            );

        if (trigger) {
            positionVedenProfilePanel(trigger);
        }

    },
    { passive: true }
);


document.addEventListener(
    "click",
    event => {

        const productButton =
            event.target.closest(
                "[data-product-id]"
            );

        if (
            productButton &&
            productButton.dataset.action ===
                "add-cart"
        ) {

            event.preventDefault();

            event.stopPropagation();

            const id =
                productButton.dataset.productId;

            const quantity =
                Number(
                    productButton.dataset.quantity
                ) || 1;

            const added =
                addToCart(
                    id,
                    quantity
                );

            if (!added) {
                return;
            }

            productButton.classList.add(
                "added"
            );

            const originalText =
                productButton.textContent;

            productButton.textContent =
                "Added";

            setTimeout(
                () => {

                    productButton.textContent =
                        originalText;

                    productButton.classList.remove(
                        "added"
                    );

                },
                1000
            );

        }

    }
);


/* =========================================================
24. GLOBAL SEARCH
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Enter"
        ) {
            return;
        }

        const active =
            document.activeElement;

        if (
            !active ||
            !active.matches(
                "input[type='search'], .search-input"
            )
        ) {
            return;
        }

        const query =
            active.value.trim();

        if (query) {

            openSearch(
                query
            );

        }

    }
);


/* =========================================================
GLOBAL SEARCH PLACEHOLDER
Keep every VEDEN search bar completely blank.
========================================================= */

function removeSearchPlaceholders() {

    document
        .querySelectorAll(
            "input[type='search'], .search-input"
        )
        .forEach(
            input => {
                input.removeAttribute(
                    "placeholder"
                );
            }
        );

}

/* =========================================================
25. INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        removeSearchPlaceholders();

        updateCartBadges();

        updateCartUI();

        document
            .querySelectorAll(
                "[data-category-id]"
            )
            .forEach(
                element => {

                    const category =
                        getCategory(
                            element.dataset.categoryId
                        );

                    if (!category) {
                        return;
                    }

                    const nameElement =
                        element.querySelector(
                            "[data-category-name]"
                        );

                    if (nameElement) {

                        nameElement.textContent =
                            category.name;

                    }

                    element.addEventListener(
                        "click",
                        () => {

                            openCategory(
                                category.id
                            );

                        }
                    );

                }
            );

    }
);


/* =========================================================
26. GLOBAL EXPORT
========================================================= */

window.VEDEN = {

    categories:
        VEDEN_CATEGORIES,

    products:
        VEDEN_PRODUCTS,

    categoriesImages:
        VEDEN_IMAGE_FOLDERS,

    productImageMap:
        VEDEN_PRODUCT_IMAGE_MAP,

    theme:
        VEDEN_THEME,

    ui:
        VEDEN_UI,

    getAllProducts,

    getProductById,

    getProductsByCategory,

    searchProducts,

    sortProducts,

    getRelatedProducts,

    getFeaturedProducts,

    getNewestProducts,

    addToCart,

    buyNow,

    removeFromCart,

    updateCartQuantity,

    clearCart,

    getCart,

    getCartCount,

    getCartTotal,

    updateCartBadges,

    getCurrentUser,

    logoutUser,

    isUserLoggedIn,

    getCategory,

    getCategoryCount,

    getProductReviews,

    getProductSpecifications,

    getProductDescription,

    getProductImagePath,

    formatPrice,

    renderStars,

    openProduct,

    openCategory,

    openSearch

};

/* =========================================================
27. BATMAN THEME STATE
========================================================= */

const VEDEN_BATMAN_THEME = {

    name:
        "Batman",

    enabled:
        true,

    storageKey:
        "vedenBatmanTheme",

    symbols: {

        bat:
            "🦇",

        search:
            "⌕",

        cart:
            "🛒",

        user:
            "◉",

        arrow:
            "→"

    }

};


/* =========================================================
28. THEME STORAGE
========================================================= */

function getBatmanThemeState() {

    try {

        const stored =
            localStorage.getItem(
                VEDEN_BATMAN_THEME.storageKey
            );

        if (
            stored === null
        ) {

            return true;

        }

        return (
            stored ===
            "true"
        );

    } catch {

        return true;

    }

}


function setBatmanThemeState(
    enabled
) {

    VEDEN_BATMAN_THEME.enabled =
        Boolean(
            enabled
        );

    localStorage.setItem(

        VEDEN_BATMAN_THEME.storageKey,

        String(
            VEDEN_BATMAN_THEME.enabled
        )

    );

}


/* =========================================================
29. BATMAN THEME CLASS
========================================================= */

function applyBatmanTheme() {

    const enabled =
        getBatmanThemeState();

    VEDEN_BATMAN_THEME.enabled =
        enabled;

    document.documentElement.classList.toggle(
        "batman-theme",
        enabled
    );

    if (document.body) {

        document.body.classList.toggle(
            "batman-theme",
            enabled
        );

    }

}


/* =========================================================
30. BATMAN THEME TOGGLE
========================================================= */

function toggleBatmanTheme() {

    const nextState =
        !getBatmanThemeState();

    setBatmanThemeState(
        nextState
    );

    applyBatmanTheme();

    return nextState;

}


/* =========================================================
31. BATMAN LOGO / BRAND HELPERS
========================================================= */

function createBatmanMark() {

    const mark =
        document.createElement(
            "span"
        );

    mark.className =
        "veden-batman-mark";

    mark.setAttribute(
        "aria-hidden",
        "true"
    );

    mark.textContent =
        "🦇";

    return mark;

}


function applyBatmanBranding() {

    document
        .querySelectorAll(
            "[data-veden-brand]"
        )
        .forEach(
            element => {

                if (
                    element.dataset.vedenBrandApplied
                ) {
                    return;
                }

                element.dataset.vedenBrandApplied =
                    "true";

                const mark =
                    createBatmanMark();

                element.prepend(
                    mark
                );

            }
        );

}


/* =========================================================
32. PAGE TITLE
========================================================= */

function updateBatmanDocumentTitle() {

    const currentTitle =
        document.title ||
        "VEDEN";

    if (
        currentTitle.includes(
            "VEDEN"
        ) &&
        !currentTitle.includes(
            "BATMAN"
        )
    ) {

        document.title =
            `${currentTitle} — Batman Edition`;

    }

}


/* =========================================================
33. PRODUCT CARD HELPERS
========================================================= */

function getProductDiscountLabel(
    product
) {

    if (
        !product ||
        !product.discount
    ) {

        return "";

    }

    return `${product.discount}% OFF`;

}


function getProductPriceHTML(
    product
) {

    if (!product) {
        return "";
    }

    const price =
        formatPrice(
            product.price
        );

    const oldPrice =
        formatPrice(
            product.oldPrice
        );

    return `

        <div class="veden-price-wrap">

            <span class="veden-price">
                ${price}
            </span>

            <span class="veden-old-price">
                ${oldPrice}
            </span>

            <span class="veden-discount">
                ${getProductDiscountLabel(product)}
            </span>

        </div>

    `;

}


/* =========================================================
34. SAFE HTML HELPER
========================================================= */

function escapeHTML(
    value
) {

    return String(
        value ?? ""
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
35. PRODUCT CARD GENERATOR
========================================================= */

function createProductCard(
    product
) {

    if (!product) {
        return "";
    }

    const card =
        document.createElement(
            "article"
        );

    card.className =
        "veden-product-card";

    card.dataset.productId =
        product.id;

    card.setAttribute(
        "role",
        "button"
    );

    card.setAttribute(
        "tabindex",
        "0"
    );

    const image =
        product.image;

    card.innerHTML = `

        <div class="veden-product-image">

            <img
                src="${escapeHTML(image)}"
                alt="${escapeHTML(product.name)}"
                loading="lazy"
                decoding="async"
                onerror="this.classList.add('image-error')"
            >

            <span class="veden-product-badge">
                ${escapeHTML(
                    getProductDiscountLabel(
                        product
                    )
                )}
            </span>

            <button
                type="button"
                class="veden-quick-cart"
                data-product-id="${escapeHTML(product.id)}"
                data-action="add-cart"
                data-quantity="1"
                aria-label="Add ${escapeHTML(product.name)} to cart"
            >
                Add
            </button>

        </div>

        <div class="veden-product-content">

            <div class="veden-product-brand">
                ${escapeHTML(product.brand)}
            </div>

            <h3 class="veden-product-name">
                ${escapeHTML(product.name)}
            </h3>

            <div class="veden-product-rating">

                <span class="veden-stars">
                    ${renderStars(product.rating)}
                </span>

                <span class="veden-review-count">
                    (${product.reviewCount})
                </span>

            </div>

            ${getProductPriceHTML(product)}

        </div>

    `;


    function openCardProduct() {

        openProduct(
            product.id
        );

    }


    card.addEventListener(
        "click",
        event => {

            if (
                event.target.closest(
                    "[data-action='add-cart']"
                )
            ) {

                return;

            }

            openCardProduct();

        }
    );


    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                    "Enter" ||
                event.key ===
                    " "
            ) {

                if (
                    event.target.closest(
                        "[data-action='add-cart']"
                    )
                ) {

                    return;

                }

                event.preventDefault();

                openCardProduct();

            }

        }
    );


    return card;

}


/* =========================================================
36. RENDER PRODUCTS
========================================================= */

function renderProducts(
    products,
    container
) {

    if (!container) {
        return;
    }

    container.innerHTML =
        "";

    if (
        !Array.isArray(
            products
        ) ||
        products.length === 0
    ) {

        container.innerHTML = `

            <div class="veden-empty-state">

                <div class="veden-empty-icon">
                    🦇
                </div>

                <h3>
                    No products found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }

    const fragment =
        document.createDocumentFragment();

    products.forEach(
        product => {

            const card =
                createProductCard(
                    product
                );

            if (card) {

                fragment.appendChild(
                    card
                );

            }

        }
    );

    container.appendChild(
        fragment
    );

}


/* =========================================================
37. URL HELPERS
========================================================= */

function getSearchQueryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return (
        params.get(
            "search"
        ) ||
        ""
    ).trim();

}


function getCategoryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return (
        params.get(
            "category"
        ) ||
        ""
    ).trim();

}


function getProductIdFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return (
        params.get(
            "id"
        ) ||
        ""
    ).trim();

}


/* =========================================================
38. SEARCH PAGE INITIALIZER
========================================================= */

function initializeSearchPage() {

    const container =
        document.querySelector(
            "[data-products-container]"
        );

    if (!container) {
        return;
    }

    const searchQuery =
        getSearchQueryFromURL();

    const categoryId =
        getCategoryFromURL();

    let products =
        VEDEN_PRODUCTS;

    if (searchQuery) {

        products =
            searchProducts(
                searchQuery
            );

    } else if (categoryId) {

        products =
            getProductsByCategory(
                categoryId
            );

    }

    renderProducts(
        products,
        container
    );

}


/* =========================================================
39. PRODUCT PAGE — COMPLETE DATA RENDERING
========================================================= */

function setTextForSelector(
    selector,
    value
) {

    document
        .querySelectorAll(
            selector
        )
        .forEach(
            element => {

                element.textContent =
                    value;

            }
        );

}


function setHTMLForSelector(
    selector,
    value
) {

    document
        .querySelectorAll(
            selector
        )
        .forEach(
            element => {

                element.innerHTML =
                    value;

            }
        );

}


function setHiddenForSelector(
    selector,
    hidden
) {

    document
        .querySelectorAll(
            selector
        )
        .forEach(
            element => {

                element.hidden =
                    Boolean(
                        hidden
                    );

            }
        );

}


function renderProductSpecifications(
    product
) {

    const containers =
        document.querySelectorAll(
            "[data-product-specifications]"
        );

    if (!containers.length) {
        return;
    }

    const specifications =
        Array.isArray(
            product.specifications
        )
            ? product.specifications
            : getProductSpecifications(
                product
            );

    const html =
        specifications
            .map(
                specification => `

                    <div class="veden-spec-row">

                        <span class="veden-spec-label">
                            ${escapeHTML(
                                specification.label
                            )}
                        </span>

                        <span class="veden-spec-value">
                            ${escapeHTML(
                                specification.value
                            )}
                        </span>

                    </div>

                `
            )
            .join("");


    containers.forEach(
        container => {

            container.innerHTML =
                html;

        }
    );

}


function renderProductReviews(
    product
) {

    const containers =
        document.querySelectorAll(
            "[data-product-reviews]"
        );

    if (!containers.length) {
        return;
    }

    const reviews =
        getProductReviews(
            product
        );

    const html =
        reviews
            .map(
                review => `

                    <article class="veden-review">

                        <div class="veden-review-header">

                            <strong>
                                ${escapeHTML(
                                    review.name
                                )}
                            </strong>

                            <span>
                                ${escapeHTML(
                                    review.date
                                )}
                            </span>

                        </div>

                        <div class="veden-review-rating">

                            <span>
                                ${renderStars(
                                    review.rating
                                )}
                            </span>

                        </div>

                        <p>
                            ${escapeHTML(
                                review.text
                            )}
                        </p>

                    </article>

                `
            )
            .join("");


    containers.forEach(
        container => {

            container.innerHTML =
                html;

        }
    );

}


function renderProductDiscount(
    product
) {

    document
        .querySelectorAll(
            "[data-product-discount]"
        )
        .forEach(
            element => {

                element.textContent =
                    getProductDiscountLabel(
                        product
                    );

            }
        );

}


function renderProductReviewCount(
    product
) {

    document
        .querySelectorAll(
            "[data-product-review-count]"
        )
        .forEach(
            element => {

                element.textContent =
                    product.reviewCount;

            }
        );

}


function renderProductStock(
    product
) {

    const stock =
        Number(
            product.stock
        );

    document
        .querySelectorAll(
            "[data-product-stock]"
        )
        .forEach(
            element => {

                element.textContent =
                    stock > 0
                        ? `${stock} available`
                        : "Out of stock";

            }
        );

    document
        .querySelectorAll(
            "[data-product-availability]"
        )
        .forEach(
            element => {

                element.textContent =
                    stock > 0
                        ? "In Stock"
                        : "Out of Stock";

                element.dataset.stockState =
                    stock > 0
                        ? "in-stock"
                        : "out-of-stock";

            }
        );

    document
        .querySelectorAll(
            "[data-action='add-product-cart'], [data-action='buy-now']"
        )
        .forEach(
            button => {

                button.disabled =
                    stock <= 0;

            }
        );

}


function initializeProductActions(
    product
) {

    document
        .querySelectorAll(
            "[data-product-action]"
        )
        .forEach(
            button => {

                if (
                    button.dataset.productActionBound
                ) {
                    return;
                }

                button.dataset.productActionBound =
                    "true";

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        const action =
                            button.dataset.productAction;

                        const quantityInput =
                            document.querySelector(
                                "[data-product-quantity]"
                            );

                        const quantity =
                            Math.max(
                                1,
                                Number(
                                    quantityInput?.value
                                ) || 1
                            );

                        if (
                            action ===
                            "add-cart"
                        ) {

                            const added =
                                addToCart(
                                    product.id,
                                    quantity
                                );

                            if (added) {

                                showCartFeedback(
                                    `${product.name} added to cart`
                                );

                            }

                        }

                        if (
                            action ===
                            "buy-now"
                        ) {

                            buyNow(
                                product.id,
                                quantity
                            );

                        }

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-action='add-product-cart']"
        )
        .forEach(
            button => {

                if (
                    button.dataset.productActionBound
                ) {
                    return;
                }

                button.dataset.productActionBound =
                    "true";

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        const input =
                            document.querySelector(
                                "[data-product-quantity]"
                            );

                        const quantity =
                            Math.max(
                                1,
                                Number(
                                    input?.value
                                ) || 1
                            );

                        if (
                            addToCart(
                                product.id,
                                quantity
                            )
                        ) {

                            showCartFeedback(
                                `${product.name} added to cart`
                            );

                        }

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-action='buy-now']"
        )
        .forEach(
            button => {

                if (
                    button.dataset.productActionBound
                ) {
                    return;
                }

                button.dataset.productActionBound =
                    "true";

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        const input =
                            document.querySelector(
                                "[data-product-quantity]"
                            );

                        const quantity =
                            Math.max(
                                1,
                                Number(
                                    input?.value
                                ) || 1
                            );

                        buyNow(
                            product.id,
                            quantity
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-product-quantity-increase]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const input =
                            document.querySelector(
                                "[data-product-quantity]"
                            );

                        if (!input) {
                            return;
                        }

                        const current =
                            Number(
                                input.value
                            ) || 1;

                        input.value =
                            current + 1;

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-product-quantity-decrease]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const input =
                            document.querySelector(
                                "[data-product-quantity]"
                            );

                        if (!input) {
                            return;
                        }

                        const current =
                            Number(
                                input.value
                            ) || 1;

                        input.value =
                            Math.max(
                                1,
                                current - 1
                            );

                    }
                );

            }
        );

}


function initializeProductPage() {

    const productId =
        getProductIdFromURL();

    if (!productId) {
        return;
    }

    const product =
        getProductById(
            productId
        );

    if (!product) {

        setTextForSelector(
            "[data-product-name]",
            "Product not found"
        );

        setHiddenForSelector(
            "[data-product-details]",
            true
        );

        return;

    }


    /*
        EXACT PRODUCT ID IS THE SINGLE SOURCE FOR THIS PAGE.
    */

    document
        .querySelectorAll(
            "[data-product-name]"
        )
        .forEach(
            element => {

                element.textContent =
                    product.name;

            }
        );


    document
        .querySelectorAll(
            "[data-product-brand]"
        )
        .forEach(
            element => {

                element.textContent =
                    product.brand;

            }
        );


    document
        .querySelectorAll(
            "[data-product-price]"
        )
        .forEach(
            element => {

                element.textContent =
                    formatPrice(
                        product.price
                    );

            }
        );


    document
        .querySelectorAll(
            "[data-product-old-price]"
        )
        .forEach(
            element => {

                element.textContent =
                    formatPrice(
                        product.oldPrice
                    );

            }
        );


    document
        .querySelectorAll(
            "[data-product-discount]"
        )
        .forEach(
            element => {

                element.textContent =
                    getProductDiscountLabel(
                        product
                    );

            }
        );


    document
        .querySelectorAll(
            "[data-product-rating]"
        )
        .forEach(
            element => {

                element.textContent =
                    renderStars(
                        product.rating
                    );

            }
        );


    document
        .querySelectorAll(
            "[data-product-review-count]"
        )
        .forEach(
            element => {

                element.textContent =
                    product.reviewCount;

            }
        );


    document
        .querySelectorAll(
            "[data-product-description]"
        )
        .forEach(
            element => {

                element.textContent =
                    product.description;

            }
        );


    document
        .querySelectorAll(
            "[data-product-category]"
        )
        .forEach(
            element => {

                element.textContent =
                    product.categoryName;

            }
        );


    document
        .querySelectorAll(
            "[data-product-type]"
        )
        .forEach(
            element => {

                element.textContent =
                    product.productType;

            }
        );


    document
        .querySelectorAll(
            "[data-product-stock]"
        )
        .forEach(
            element => {

                element.textContent =
                    `${product.stock} available`;

            }
        );


    document
        .querySelectorAll(
            "[data-product-availability]"
        )
        .forEach(
            element => {

                element.textContent =
                    product.stock > 0
                        ? "In Stock"
                        : "Out of Stock";

            }
        );


    document
        .querySelectorAll(
            "[data-product-image]"
        )
        .forEach(
            element => {

                element.src =
                    product.image;

                element.alt =
                    product.name;

                element.loading =
                    "eager";

                element.decoding =
                    "async";

                element.onerror =
                    function () {

                        this.classList.add(
                            "image-error"
                        );

                    };

            }
        );


    document
        .querySelectorAll(
            "[data-product-quantity]"
        )
        .forEach(
            element => {

                element.min =
                    "1";

                element.value =
                    "1";

            }
        );


    renderProductDiscount(
        product
    );

    renderProductReviewCount(
        product
    );

    renderProductStock(
        product
    );

    renderProductSpecifications(
        product
    );

    renderProductReviews(
        product
    );

    initializeProductActions(
        product
    );

}


/* =========================================================
40. RELATED PRODUCTS INITIALIZER
========================================================= */

function initializeRelatedProducts() {

    const containers =
        document.querySelectorAll(
            "[data-related-products]"
        );

    if (!containers.length) {
        return;
    }

    const productId =
        getProductIdFromURL();

    if (!productId) {
        return;
    }

    const related =
        getRelatedProducts(
            productId,
            8
        );

    containers.forEach(
        container => {

            renderProducts(
                related,
                container
            );

        }
    );

}


/* =========================================================
41. FEATURED PRODUCTS INITIALIZER
========================================================= */

function initializeFeaturedProducts() {

    document
        .querySelectorAll(
            "[data-featured-products]"
        )
        .forEach(
            container => {

                const limit =
                    Number(
                        container.dataset.limit
                    ) || 12;

                const products =
                    getFeaturedProducts(
                        limit
                    );

                renderProducts(
                    products,
                    container
                );

            }
        );

}


/* =========================================================
42. NEWEST PRODUCTS INITIALIZER
========================================================= */

function initializeNewestProducts() {

    document
        .querySelectorAll(
            "[data-newest-products]"
        )
        .forEach(
            container => {

                const limit =
                    Number(
                        container.dataset.limit
                    ) || 12;

                const products =
                    getNewestProducts(
                        limit
                    );

                renderProducts(
                    products,
                    container
                );

            }
        );

}


/* =========================================================
43. CART QUANTITY CONTROLS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-cart-action]"
            );

        if (!button) {
            return;
        }

        const action =
            button.dataset.cartAction;

        const productId =
            button.dataset.productId;

        if (!productId) {
            return;
        }

        const cart =
            getCart();

        const item =
            cart.find(
                entry =>
                    entry.id ===
                    productId
            );

        if (!item) {
            return;
        }

        if (
            action ===
            "increase"
        ) {

            updateCartQuantity(
                productId,
                Number(
                    item.quantity
                ) + 1
            );

        }

        if (
            action ===
            "decrease"
        ) {

            updateCartQuantity(
                productId,
                Number(
                    item.quantity
                ) - 1
            );

        }

    }
);


/* =========================================================
44. DIRECT ADD-TO-CART FEEDBACK
========================================================= */

function showCartFeedback(
    message = "Added to cart"
) {

    let toast =
        document.querySelector(
            ".veden-toast"
        );

    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.className =
            "veden-toast";

        document.body.appendChild(
            toast
        );

    }

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toast._hideTimer
    );

    toast._hideTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            1800
        );

}


/* =========================================================
45. CART FEEDBACK HOOK
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-action='add-cart']"
            );

        if (!button) {
            return;
        }

        const productId =
            button.dataset.productId;

        if (!productId) {
            return;
        }

        const product =
            getProductById(
                productId
            );

        if (product) {

            showCartFeedback(
                `${product.name} added to cart`
            );

        }

    }
);


/* =========================================================
46. CATEGORY RENDERING
========================================================= */

function renderCategories(
    container
) {

    if (!container) {
        return;
    }

    container.innerHTML =
        "";

    const fragment =
        document.createDocumentFragment();

    VEDEN_CATEGORIES.forEach(
        category => {

            const item =
                document.createElement(
                    "button"
                );

            item.type =
                "button";

            item.className =
                "veden-category-card";

            item.dataset.categoryId =
                category.id;

            item.innerHTML = `

                <div class="veden-category-icon">
                    ${category.icon}
                </div>

                <div
                    class="veden-category-name"
                    data-category-name
                >
                    ${escapeHTML(
                        category.name
                    )}
                </div>

                <div class="veden-category-count">
                    ${getCategoryCount(
                        category.id
                    )}
                    products
                </div>

            `;

            item.addEventListener(
                "click",
                () => {

                    openCategory(
                        category.id
                    );

                }
            );

            fragment.appendChild(
                item
            );

        }
    );

    container.appendChild(
        fragment
    );

}


/* =========================================================
47. CATEGORY INITIALIZER
========================================================= */

function initializeCategories() {

    document
        .querySelectorAll(
            "[data-categories-container]"
        )
        .forEach(
            container => {

                renderCategories(
                    container
                );

            }
        );

}


/* =========================================================
48. ACCOUNT UI
========================================================= */

function updateAccountUI() {

    const user = getCurrentUser();

    /*
        Keep the existing VEDEN header layout intact. Every page already
        has .header-login, so the account state is updated centrally here.
    */

    document
        .querySelectorAll(".header-login")
        .forEach(loginLink => {

            const parent = loginLink.parentElement;

            if (!parent) return;

            let profileButton =
                parent.querySelector(".header-profile-trigger");

            if (!profileButton) {

                profileButton =
                    document.createElement("button");

                profileButton.type = "button";
                profileButton.className =
                    "header-profile-trigger";

                profileButton.setAttribute(
                    "aria-label",
                    "Open profile"
                );

                profileButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                profileButton.title =
                    "Your profile";

                profileButton.innerHTML = `
                    <span class="profile-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
                            <circle cx="12" cy="8" r="3.2" stroke="currentColor" stroke-width="1.7"/>
                            <path d="M5.8 19c.7-3.2 2.8-5 6.2-5s5.5 1.8 6.2 5"
                                  stroke="currentColor" stroke-width="1.7"
                                  stroke-linecap="round"/>
                        </svg>
                    </span>
                `;

                parent.insertBefore(
                    profileButton,
                    loginLink
                );

                profileButton.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();
                        event.stopPropagation();

                        const panel =
                            document.getElementById(
                                "vedenProfilePanel"
                            );

                        if (!panel) return;

                        const willOpen =
                            panel.hidden;

                        closeVedenProfilePanel();

                        if (willOpen) {

                            renderVedenProfilePanel();

                            panel.hidden = false;

                            positionVedenProfilePanel(
                                profileButton
                            );

                            profileButton.setAttribute(
                                "aria-expanded",
                                "true"
                            );

                        }

                    }
                );

            }

            if (user) {

                loginLink.hidden = true;
                profileButton.hidden = false;

            } else {

                loginLink.hidden = false;
                profileButton.hidden = true;

            }

        });

    /*
        On pages with the older login.html-only profile link, keep it hidden.
        The new centralized profile button is used instead.
    */

    document
        .querySelectorAll(".header-profile")
        .forEach(element => {

            element.hidden = true;

        });

    ensureVedenProfilePanel();

    if (!user) {

        closeVedenProfilePanel();

    }

}


function ensureVedenProfilePanel() {

    if (
        document.getElementById(
            "vedenProfilePanel"
        )
    ) {

        return;

    }

    const panel =
        document.createElement("div");

    panel.id =
        "vedenProfilePanel";

    panel.className =
        "veden-profile-panel";

    panel.hidden = true;

    panel.innerHTML = `
        <div class="veden-profile-panel-inner" role="dialog"
             aria-label="Your profile">

            <div class="veden-profile-heading">
                <div class="veden-profile-avatar" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                        <circle cx="12" cy="8" r="3.2"
                                stroke="currentColor" stroke-width="1.7"/>
                        <path d="M5.8 19c.7-3.2 2.8-5 6.2-5s5.5 1.8 6.2 5"
                              stroke="currentColor" stroke-width="1.7"
                              stroke-linecap="round"/>
                    </svg>
                </div>

                <div>
                    <div class="veden-profile-title" data-profile-name>
                        Account
                    </div>
                    <div class="veden-profile-status" data-profile-email>
                        —
                    </div>
                </div>
            </div>

            <button
                type="button"
                class="veden-profile-logout"
                data-profile-logout
            >
                Log Out
            </button>

        </div>
    `;

    document.body.appendChild(panel);

    panel.addEventListener(
        "click",
        event => {

            if (
                event.target === panel
            ) {

                closeVedenProfilePanel();

            }

        }
    );

    const logoutButton =
        panel.querySelector(
            "[data-profile-logout]"
        );

    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                logoutUser();

            }
        );

    }

}


function renderVedenProfilePanel() {

    const user = getCurrentUser();

    if (!user) return;

    ensureVedenProfilePanel();

    const panel =
        document.getElementById(
            "vedenProfilePanel"
        );

    if (!panel) return;

    const name =
        panel.querySelector(
            "[data-profile-name]"
        );

    const email =
        panel.querySelector(
            "[data-profile-email]"
        );

    if (name) {

        name.textContent =
            user.name || "Account";

    }

    if (email) {

        email.textContent =
            user.email || "—";

    }

}


function positionVedenProfilePanel(trigger) {

    const panel =
        document.getElementById(
            "vedenProfilePanel"
        );

    const inner =
        panel &&
        panel.querySelector(
            ".veden-profile-panel-inner"
        );

    if (!trigger || !inner) return;

    const triggerRect =
        trigger.getBoundingClientRect();

    const viewportWidth =
        document.documentElement.clientWidth;

    const viewportHeight =
        window.innerHeight;

    /* Keep the profile dropdown slightly more compact on small screens only. */
    if (viewportWidth <= 480) {
        inner.style.width =
            Math.min(
                viewportWidth <= 360 ? 250 : 270,
                viewportWidth - 28
            ) + "px";
    }

    const panelWidth =
        inner.getBoundingClientRect().width;

    const gap = 8;
    const edge = 10;

    let left =
        triggerRect.left +
        (triggerRect.width / 2) -
        (panelWidth / 2);

    left = Math.max(
        edge,
        Math.min(
            left,
            viewportWidth - panelWidth - edge
        )
    );

    let top =
        triggerRect.bottom + gap;

    const panelHeight =
        inner.getBoundingClientRect().height;

    if (
        top + panelHeight >
        viewportHeight - edge
    ) {

        const aboveTop =
            triggerRect.top -
            panelHeight -
            gap;

        if (aboveTop >= edge) {
            top = aboveTop;
        }

    }

    inner.style.left =
        Math.round(left) + "px";

    inner.style.right =
        "auto";

    inner.style.top =
        Math.round(top) + "px";

}


function closeVedenProfilePanel() {

    const panel =
        document.getElementById(
            "vedenProfilePanel"
        );

    if (panel) {

        panel.hidden = true;

    }

    document
        .querySelectorAll(
            ".header-profile-trigger"
        )
        .forEach(button => {

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        });

}


document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                ".header-profile-trigger"
            ) ||
            event.target.closest(
                "#vedenProfilePanel"
            )
        ) {

            return;

        }

        closeVedenProfilePanel();

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeVedenProfilePanel();

        }

    }
);

/* =========================================================
49. CART UI
========================================================= */

function updateCartUI() {

    const cart =
        getCart();

    document
        .querySelectorAll(
            "[data-cart-total]"
        )
        .forEach(
            element => {

                element.textContent =
                    formatPrice(
                        getCartTotal()
                    );

            }
        );

    document
        .querySelectorAll(
            "[data-cart-items]"
        )
        .forEach(
            element => {

                element.textContent =
                    getCartCount();

            }
        );

    document
        .querySelectorAll(
            "[data-cart-empty]"
        )
        .forEach(
            element => {

                element.hidden =
                    cart.length !== 0;

            }
        );

}


/* =========================================================
50. SMOOTH SCROLL
========================================================= */

function initializeSmoothScroll() {

    document.addEventListener(
        "click",
        event => {

            const link =
                event.target.closest(
                    "[data-scroll-to]"
                );

            if (!link) {
                return;
            }

            const targetSelector =
                link.dataset.scrollTo;

            const target =
                document.querySelector(
                    targetSelector
                );

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

        }
    );

}


/* =========================================================
51. BACK TO TOP
========================================================= */

function initializeBackToTop() {

    const button =
        document.querySelector(
            "[data-back-to-top]"
        );

    if (!button) {
        return;
    }

    window.addEventListener(
        "scroll",
        () => {

            button.classList.toggle(
                "visible",
                window.scrollY >
                    500
            );

        }
    );

    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

        }
    );

}


/* =========================================================
52. BATMAN KEYBOARD SHORTCUT
========================================================= */

function initializeBatmanShortcut() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.ctrlKey &&
                event.shiftKey &&
                event.key.toLowerCase() ===
                    "b"
            ) {

                event.preventDefault();

                toggleBatmanTheme();

            }

        }
    );

}


/* =========================================================
53. PRODUCT PAGE QUANTITY SANITIZATION
========================================================= */

function initializeProductQuantityInputs() {

    document
        .querySelectorAll(
            "[data-product-quantity]"
        )
        .forEach(
            input => {

                input.addEventListener(
                    "change",
                    () => {

                        const product =
                            getProductById(
                                getProductIdFromURL()
                            );

                        if (!product) {
                            return;
                        }

                        let value =
                            Number(
                                input.value
                            );

                        if (
                            !Number.isFinite(
                                value
                            )
                        ) {

                            value = 1;

                        }

                        value =
                            Math.max(
                                1,
                                Math.min(
                                    product.stock,
                                    Math.floor(
                                        value
                                    )
                                )
                            );

                        input.value =
                            value;

                    }
                );

            }
        );

}


/* =========================================================
54. GLOBAL INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applyBatmanTheme();

        applyBatmanBranding();

        updateBatmanDocumentTitle();

        updateAccountUI();

        updateCartUI();

        updateCartBadges();

        initializeSearchPage();

        initializeProductPage();

        initializeRelatedProducts();

        initializeFeaturedProducts();

        initializeNewestProducts();

        initializeCategories();

        initializeSmoothScroll();

        initializeBackToTop();

        initializeBatmanShortcut();

        initializeProductQuantityInputs();

    }
);


/* =========================================================
55. STORAGE SYNC
========================================================= */

window.addEventListener(
    "storage",
    event => {

        if (
            event.key ===
            "vedenCart"
        ) {

            updateCartBadges();

            updateCartUI();

        }

        if (
            event.key === "vedenCurrentUser" ||
            event.key === "veden_current_user"
        ) {

            updateAccountUI();

        }

        if (
            event.key ===
            VEDEN_BATMAN_THEME.storageKey
        ) {

            applyBatmanTheme();

        }

    }
);


/* =========================================================
56. GLOBAL BATMAN EXPORT
========================================================= */

window.VEDEN.Batman = {

    config:
        VEDEN_BATMAN_THEME,

    getState:
        getBatmanThemeState,

    setState:
        setBatmanThemeState,

    apply:
        applyBatmanTheme,

    toggle:
        toggleBatmanTheme,

    createMark:
        createBatmanMark

};


/* =========================================================
57. GLOBAL PRODUCT EXPORT
========================================================= */

window.VEDEN.renderProducts =
    renderProducts;

window.VEDEN.createProductCard =
    createProductCard;

window.VEDEN.renderCategories =
    renderCategories;

window.VEDEN.initializeSearchPage =
    initializeSearchPage;

window.VEDEN.initializeProductPage =
    initializeProductPage;

window.VEDEN.initializeRelatedProducts =
    initializeRelatedProducts;

window.VEDEN.initializeFeaturedProducts =
    initializeFeaturedProducts;

window.VEDEN.initializeNewestProducts =
    initializeNewestProducts;

window.VEDEN.updateAccountUI =
    updateAccountUI;

window.VEDEN.updateCartUI =
    updateCartUI;

window.VEDEN.showCartFeedback =
    showCartFeedback;

window.VEDEN.renderProductSpecifications =
    renderProductSpecifications;

window.VEDEN.renderProductReviews =
    renderProductReviews;

window.VEDEN.getProductType =
    getProductType;

window.VEDEN.escapeHTML =
    escapeHTML;


/* =========================================================
58. FINAL ENGINE CHECK
========================================================= */

(function finalVedenCheck() {

    const requiredFunctions = [

        "getAllProducts",

        "getProductById",

        "getProductsByCategory",

        "searchProducts",

        "sortProducts",

        "getRelatedProducts",

        "getFeaturedProducts",

        "getNewestProducts",

        "addToCart",

        "buyNow",

        "removeFromCart",

        "updateCartQuantity",

        "getCart",

        "getCartCount",

        "getCartTotal",

        "formatPrice",

        "openProduct",

        "openCategory",

        "openSearch",

        "getProductReviews",

        "getProductSpecifications",

        "getProductImagePath"

    ];


    const missing =
        requiredFunctions.filter(

            name =>
                typeof window.VEDEN[name] !==
                "function"

        );


    if (
        missing.length
    ) {

        console.warn(
            "VEDEN engine missing functions:",
            missing
        );

        return;

    }


    /*
        Validate catalog integrity without changing it.
    */

    const invalidProducts =
        VEDEN_PRODUCTS.filter(
            product => {

                return (

                    !product.id ||
                    !product.name ||
                    !product.brand ||
                    !product.category ||
                    !Number.isFinite(
                        Number(
                            product.price
                        )
                    )

                );

            }
        );


    if (
        invalidProducts.length
    ) {

        console.warn(
            "VEDEN catalog contains invalid products:",
            invalidProducts
        );

        return;

    }


    /*
        Make sure no generated product image points to
        a non-jpg extension.
    */

    const invalidImages =
        VEDEN_PRODUCTS.filter(
            product => {

                return (
                    product.image &&
                    !/\.jpg$/i.test(
                        product.image
                    )
                );

            }
        );


    if (
        invalidImages.length
    ) {

        console.warn(
            "VEDEN image format check failed. Only .jpg is allowed:",
            invalidImages
        );

        return;

    }


    window.VEDEN_READY =
        true;


    console.info(
        "VEDEN Global Store Engine ready:",
        {
            products:
                VEDEN_PRODUCTS.length,

            categories:
                VEDEN_CATEGORIES.length,

            imageFormat:
                "jpg",

            productDetails:
                true,

            reviews:
                true,

            cart:
                true,

            relatedProducts:
                true
        }
    );

})();