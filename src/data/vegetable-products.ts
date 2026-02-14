
export interface ProductVariant {
    id?: string;
    growingMethod?: string;
    sizeGrade?: string;
    qualityTier?: string;
    image?: string;
    grades?: string[];
}

export interface ProductEntry {
    id: string;
    key: string;
    category: string;
    subcategory?: string;
    secondaryTags?: string[];
    origin: string;
    season: string;
    image: string;
    grades: string[];
    price: string;
    variants?: ProductVariant[];
}

export const vegetableProducts: ProductEntry[] = [
    {
        id: "veg_1",
        key: "veg_1",
        category: "specialty",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/green-asparagus.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_2",
        key: "veg_2",
        category: "specialty",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/white-asparagus.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_3",
        key: "veg_3",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/artichoke.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_4",
        key: "veg_4",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/green-beans.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_5",
        key: "veg_5",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/beetroot.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_6",
        key: "veg_6",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/broccoli.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_7",
        key: "veg_7",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/local-cabbage.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_8",
        key: "veg_8",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/chinese-cabbage.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_9",
        key: "veg_9",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/red-cabbage.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_10",
        key: "veg_10",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/white-cabbage.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_12",
        key: "veg_12",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/cauliflower.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_13",
        key: "veg_13",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/yellow-corn.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_14",
        key: "veg_14",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/cucumber.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_55",
        key: "veg_55",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/black-eggplant.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_56",
        key: "veg_56",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/white-eggplant.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_60",
        key: "veg_60",
        category: "specialty",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/purple-asparagus.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_broad",
        key: "veg_broad",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/broad-beans.webp",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_18",
        key: "veg_18",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/garlic.png",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_29",
        key: "veg_29",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/green-bell-pepper.png",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_45",
        key: "veg_45",
        category: "vegetables",
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/tomatoes.png",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_red_endive",
        key: "veg_red_endive",
        category: "greens",
        subcategory: "chicory",
        secondaryTags: ["leafy", "salad", "specialty"],
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/red-endive.png",
        grades: ["premium"],
        price: "Market Price"
    },
    {
        id: "veg_white_endive",
        key: "veg_white_endive",
        category: "greens",
        subcategory: "chicory",
        secondaryTags: ["leafy", "salad", "specialty"],
        origin: "egypt",
        season: "available",
        image: "/images/products/vegetables/white-endive.png",
        grades: ["premium"],
        price: "Market Price"
    }
];
