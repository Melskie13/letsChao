const categoryOrder = [
    "friedrice",
    "platters",
    "icecream",
     "yogurt",
    "float",
    "milktea",
    "coffee",
    "milkbase",
    "fruitea",
   "freshdrink",
    "snacks"
];


const menuList = [
    {
        name: "Pork Chaofan Egg",
        price: 54,
        category: "friedrice",
        image: "images/cf-egg1.jpg",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Egg", price: 64 }
        ],
        flavors: [],
    },
    {
        name: "Strawberry w/ Oreo Yogurt",
        price: null,
        category: "yogurt",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium", price:69 },
             { name: "Large", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "Caramel and Graham Yogurt",
        price: null,
        category: "yogurt",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:69 },
             { name: "Large", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry w/ Nata Yogurt",
        price: null,
        category: "yogurt",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:69 },
             { name: "Large", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "Caramel w/ Mallows Ice Cream",
        price:null ,
        category: "icecream",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Coffee Jelly w/ Oreo Ice Cream",
        price: null,
        category: "icecream",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Pork Chaofan Siomai",
        price: 79,
        category: "friedrice",
        image: "images/cf-egg-siomai.jpg",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Siomai", price: 89 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Hotdog",
        price: 79,
        category: "friedrice",
        image: "images/cf-egg-hotdog.jpg",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Hotdog", price: 89 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Shanghai",
        price: 89,
        category: "friedrice",
        image: "images/cf-egg-shanghai.jpg",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Shanghai", price: 99 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Spam",
        price: 89,
        category: "friedrice",
        image: "images/cf-egg-spam.jpg",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Spam", price: 99 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Bangus",
        price: 109,
        category: "friedrice",
        image: "images/cf-egg-bangus.jpg",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Bangus", price: 119 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Porkchop",
        price: 120,
        category: "friedrice",
        image: "images/cf-egg-chicken.jpg",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Porkchop", price: 130 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Tonkatsu",
        price: 125,
        category: "friedrice",
        image: "images/cf-egg-tonkatsu.jpg",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Tonkatsu", price: 135 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Overload",
        price: 120,
        category: "friedrice",
        image: "images/cf-egg-overload.jpg",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Overload", price: 130 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Butterfly Squid",
        price: 149,
        category: "friedrice",
        image: "images/cf-egg-squid.jpg",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Butterfly Squid", price: 159 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Giant Liempo",
        price: 180,
        category: "friedrice",
        image: "images/cf-egg-liempo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Giant Liempo", price: 190 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Tapa",
        price: 149,
        category: "friedrice",
        image: "images/cf-egg-tapa.jpg",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Tapa", price: 159 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Chicken Wings",
        price: 105,
        category: "friedrice",
        image: "images/cf-egg-chickenwing.jpg",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Wings", price:115 }
        ],
        flavors: [
            { name: "Teriyaki", price: 5 },
            { name: "Soy garlic", price: 5 },
            { name: "Salted Egg", price: 5 },
            { name: "Cheesy Wings", price: 15 },
            { name: "Garlic Parmesan", price: 15 }
        ],
    },
    {
        name: "Iced Americano",
        price: null,
        category: "coffee",
        image: "images/1000031110.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:60 },
             { name: "Large 22oz", price:65 }
        ],
        flavors: [
        ],
    },
    {
        name: "Caramel Macchiato",
        price: null,
        category: "coffee",
        image: "images/1000031107.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:69 },
             { name: "Large 22oz", price:79 }
        ],
        flavors: [
        ],
    },
    {
        name: "Cafe Latte",
        price: null,
        category: "coffee",
        image: "images/1000031108.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:69 },
             { name: "Large 22oz", price:79 }
        ],
        flavors: [
        ],
    },
    {
        name: "Coffee Jelly Latte",
        price: null,
        category: "coffee",
        image: "images/1000031112.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:90 }
        ],
        flavors: [
        ],
    },
    {
        name: "Ice Mocha",
        price:null ,
        category: "coffee",
        image: "images/1000031109.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Mango Milk",
        price:null ,
        category: "milkbase",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry Milk",
        price: null,
        category: "milkbase",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Strawberry Milk",
        price: null,
        category: "milkbase",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Kiwi",
        price: null,
        category: "fruitea",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry",
        price: null,
        category: "fruitea",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Green Apple",
        price: null,
        category: "fruitea",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Lychee",
        price:null ,
        category: "fruitea",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Passion Fruit",
        price: null,
        category: "fruitea",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Lemon",
        price: null,
        category: "fruitea",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Choco Lava Float",
        price:null ,
        category: "float",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Coffee Float",
        price: null,
        category: "float",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Strawberry Milk Float",
        price: null,
        category: "float",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry Milk Float",
        price:null,
        category: "float",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Milky Mango Float",
        price: null,
        category: "float",
        image: "images/yog-swo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Coke Float",
        price: 55,
        category: "float",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
        ],
        flavors: [
        ],
    },
    {
        name: "Strawberry Puree with Lemonade",
        price: 80,
        category: "freshdrink",
        image: "images/1000031131.jpg",
        bestSeller: false,
        varieties: [
            
        ],
        flavors: [
        ],
    },
    {
        name: "Fresh Lemon",
        price: null,
        category: "freshdrink",
        image: "images/1000031131.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:49 },
             { name: "Large 22oz", price:69 }
        ],
        flavors: [
        ],
    },
    {
        name: "Fresh Lemon with Yakult",
        price: null,
        category: "freshdrink",
        image: "images/1000031132.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:69 },
             { name: "Large 22oz", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "Chicken Wings",
        price: null,
        category: "platters",
        image: "images/1000031094.jpg",
        bestSeller: false,
        varieties: [
            { name: "4 pcs", price: 125 },
            { name: "8 pcs", price: 250 },
            { name: "16 pcs", price: 500 } ,
            { name: "32+ 2 pcs", price: 999 },
            { name: "64+ 4 pcs", price: 1899 }
        ],
        flavors: [
            { name: "Salted Egg, Teriyaki, Soy garlic, Buffalo, BBQ", price:null  },
            { name: "Cheesy Wings for every 4pcs", price: 10 },
            { name: "Garlic Parmesan for every 4pcs", price: 10 }
        ],
    },
    {
        name: "Bilao good for 5 pax (Butterfly squid, porkchop, 8 pcs siomai, 6 pcs shanghai, 3pcs egg and 5 cups of Pork Chaofan",
        price: 520,
        category: "platters",
        image: "images/1000031093.jpg",
        bestSeller: true,
        varieties: [
      
        ],
        flavors: [],
    },
    
    {
        name: "Shanghai",
        price: null,
        category: "platters",
        image: "images/1000031095.jpg",
        bestSeller: true,
        varieties: [
            { name: "12 pcs", price: 120 },
            { name: "24 pcs", price: 240 },
            { name: "48 + 2 pcs", price: 480 } ,
            { name: "96+ 4 pcs", price: 960 }
        ],
        flavors: [],
    },
    {
        name: "Siomai",
        price: null,
        category: "platters",
        image: "images/1000031096.jpg",
        bestSeller: true,
        varieties: [
            { name: "12 pcs", price: 90 },
            { name: "24 pcs", price: 180 },
            { name: "48 + 2 pcs", price: 360 } ,
            { name: "96+ 4 pcs", price: 720 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chao Fan Platter",
        price: 169,
        category: "platters",
        image: "images/chaofanPlatter.jpg",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Platter", price: 199 },
           
        ],
        flavors: [],
    },
    {
        name: "Caramel and Graham Ice Cream",
        price: null,
        category: "icecream",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Strawberry w/ Oreo Ice Cream",
        price: null,
        category: "icecream",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry with Nata Ice Cream",
        price: null,
        category: "icecream",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Chocolate w/ Oreo Ice Cream",
        price: null,
        category: "icecream",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Plain Vanilla Ice Cream",
        price: null,
        category: "icecream",
        image: "images/ic-cjo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Plain Yogurt",
        price: null,
        category: "yogurt",
        image: "images/yog-swo.jpg",
        bestSeller: true,
        varieties: [
            { name: "Medium", price:69 },
             { name: "Large", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "French Fries",
        price: 75,
        category: "snacks",
        image: "images/1000031104.jpg",
        bestSeller: true,
        varieties: [
            { name: "Cheesy Fries", price: 99 },
            { name: "Fries with BBQ Sauce", price: 99 },
            { name: "Fries with Buffalo Sauce", price: 99 }
        ],
        flavors: [],
    },
    {
        name: "Cheesy Carbonara Noodles Buldak",
        price: 130,
        category: "snacks",
        image: "images/1000031097.jpg",
        bestSeller: true,
        varieties: [
            { name: "Cheesy Carbonara Noodles Buldak Overload", price: 180 },
            { name: "Cheesy Carbonara Noodles Buldak with Wings", price: 190 },
          
        ],
       
    },
    {
        name: "Classic Milk Tea",
        price: null,
        category: "milktea",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Oreo Cream cheese Milk Tea",
        price: null,
        category: "milktea",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:110 },
             { name: "Large 22oz", price:120 }
        ],
        flavors: [
        ],
    },
    {
        name: "Oreo Milk Tea",
        price: null,
        category: "milktea",
        image: "images/ic-cjo.jpg",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:90 },
             { name: "Large 22oz", price:100 }
        ],
        flavors: [
        ],
    }
];

const addOns = [
    {
        name: "Wing Sauce",
        price: 20,  
    },
    {
        name: "Extra Egg",
        price: 15,
    },
    {
        name: "Cabbage",
        price: 15,
    },
    {
        name: "Hotdog (1)",
        price: 12,  
    },
    {
        name: "Spam (1)",
        price: 20,
    },
    {
        name: "Shanghai (3)",
        price: 30,
    },{
        name: "Siomai (4)",
        price: 30,  
    },
    {
        name: "Buterfly Squid",
        price: 110,
    },
    {
        name: "Bangus",
        price: 60,
    },{
        name: "Wings (2)",
        price: 60,  
    },
    {
        name: "Plain Rice",
        price: 15,
    },
    {
        name: "Fruit Tea",
        price: 30,
    }
    
];
