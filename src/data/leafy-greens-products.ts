import { ProductEntry } from './vegetable-products';

export const leafyGreensProducts: ProductEntry[] = [
    {
        id: "herb_2",
        key: "herb_2",
        category: "herbs",
        primaryCategory: "LEAFY & SALAD HUB",
        subcategory: "Baby Leaves",
        secondaryTags: ["Premium", "Local"],
        origin: "egypt",
        season: "available",
        image: "/images/products/herbs-greens/celery.webp",
        grades: ["premium"],
        price: "Market Price"
    }, {
        id: "herb_10",
        key: "herb_10",
        category: "herbs",
        primaryCategory: "LEAFY & SALAD HUB",
        subcategory: "Baby Leaves",
        secondaryTags: ["Premium", "Local"],
        origin: "egypt",
        season: "available",
        image: "/images/products/herbs-greens/fennel.webp",
        grades: ["premium"],
        price: "Market Price"
    }, {
        id: "herb_13",
        key: "herb_13",
        category: "greens",
        primaryCategory: "LEAFY & SALAD HUB",
        subcategory: "lettuce",
        secondaryTags: ["leafy", "salad", "Premium", "Local"],
        origin: "egypt",
        season: "available",
        image: "/images/products/herbs-greens/red-lettuce.webp",
        grades: ["premium"],
        price: "Market Price",
        variants: [
            { id: "herb_13_premium", qualityTier: "premium", image: "/images/products/herbs-greens/red-lettuce.webp" },
            { id: "herb_red_lettuce_var", qualityTier: "standard", image: "/images/products/herbs-greens/red-lettuce.png" }
        ]
    }, {
        id: "herb_14",
        key: "herb_14",
        category: "greens",
        primaryCategory: "LEAFY & SALAD HUB",
        subcategory: "lettuce",
        secondaryTags: ["leafy", "salad", "Premium", "Local"],
        origin: "egypt",
        season: "available",
        image: "/images/products/herbs-greens/green-lettuce.webp",
        grades: ["premium"],
        price: "Market Price",
        variants: [
            { id: "herb_14_premium", qualityTier: "premium", image: "/images/products/herbs-greens/green-lettuce.webp" },
            { id: "herb_green_lettuce", qualityTier: "standard", image: "/images/products/herbs-greens/green-lettuce.png" }
        ]
    }, {
        id: "herb_head_lettuce",
        key: "herb_head_lettuce",
        category: "greens",
        primaryCategory: "LEAFY & SALAD HUB",
        subcategory: "lettuce",
        secondaryTags: ["leafy", "salad", "Premium", "Local"],
        origin: "egypt",
        season: "available",
        image: "/images/products/herbs-greens/head-lettuce.png",
        grades: ["premium"],
        price: "Market Price"
    }, {
        id: "herb_lollo_bionda",
        key: "herb_lollo_bionda",
        category: "greens",
        primaryCategory: "LEAFY & SALAD HUB",
        subcategory: "lettuce",
        secondaryTags: ["leafy", "salad", "Premium", "Local"],
        origin: "egypt",
        season: "available",
        image: "/images/products/herbs-greens/lollo-bionda-lettuce.png",
        grades: ["premium"],
        price: "Market Price"
    }, {
        id: "herb_lollo_rosso",
        key: "herb_lollo_rosso",
        category: "greens",
        primaryCategory: "LEAFY & SALAD HUB",
        subcategory: "lettuce",
        secondaryTags: ["leafy", "salad", "Premium", "Local"],
        origin: "egypt",
        season: "available",
        image: "/images/products/herbs-greens/lollo-rosso-lettuce.png",
        grades: ["premium"],
        price: "Market Price"
    }, {
        id: "herb_17",
        key: "herb_17",
        category: "greens",
        primaryCategory: "LEAFY & SALAD HUB",
        subcategory: "lettuce",
        secondaryTags: ["leafy", "salad", "Premium", "Local"],
        origin: "egypt",
        season: "available",
        image: "/images/products/herbs-greens/oakleaf-lettuce.png",
        grades: ["premium"],
        price: "Market Price",
        variants: [
            { id: "herb_17_premium", qualityTier: "premium", image: "/images/products/herbs-greens/oakleaf-lettuce.png" },
            { id: "herb_oakleaf", qualityTier: "standard", image: "/images/products/herbs-greens/oakleaf-lettuce.png" }
        ]
    }
];
