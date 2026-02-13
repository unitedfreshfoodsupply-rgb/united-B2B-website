
/**
 * Global Seasonal Availability Map
 * 0: Off-Season
 * 1: Available
 * 2: Peak Season
 * 
 * Based on Egyptian agricultural harvest cycles and import schedules.
 */

export const SEASONAL_DATA: Record<string, number[]> = {
    // --- FRUITS (Local) ---
    "loc_1": [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 2, 2], // Strawberries (Peak Winter/Spring)
    "loc_3": [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0], // Pomegranates (Autumn)
    "loc_5": [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0], // Owais Mango (Summer)
    "loc_4": [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0], // Zebdia Mango
    "loc_6": [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0], // Fas Owais Mango
    "loc_9": [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1], // Keitt Mango (Late)
    "loc_20": [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0], // Grapes White (Summer)
    "loc_19": [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0], // Grapes Red
    "loc_47": [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0], // Grapes Black
    "loc_48": [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0], // Grapes Crimson
    "loc_21": [0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0], // Barhi Dates (Late Summer)
    "loc_25": [0, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0], // Apricots (Short Spring)
    "loc_23": [0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0], // Nectarines
    "loc_24": [0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0], // Plums
    "loc_31": [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 1], // Navel Orange (Winter)
    "loc_32": [0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0], // Valencia Orange (Summer)
    "loc_33": [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2], // Mandarin (Winter)
    "loc_41": [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2], // Clementine (Winter)
    "loc_34": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Grapefruit (Year-round)
    "loc_28": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Banana (Year-round)
    "loc_2": [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1], // Guava

    // --- VEGETABLES ---
    "veg_1": [0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0], // Asparagus Green (Spring)
    "veg_2": [0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0], // Asparagus White (Spring)
    "veg_3": [1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1], // Artichoke (Winter/Spring)
    "veg_4": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Green Beans (Year-round)
    "veg_6": [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2], // Broccoli (Winter)
    "veg_12": [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2], // Cauliflower (Winter)
    "veg_18": [1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1], // Garlic (Harvest starts Mar)
    "veg_23": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Onion White (Year-round)
    "veg_24": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Onion Red (Year-round)
    "veg_36": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Potatoes (Year-round)
    "veg_45": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Tomatoes (Year-round)
    "veg_48": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Zucchini (Year-round)
    "veg_51": [0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0], // Vine Leaves (Spring)
    "veg_53": [2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2], // Green Peas (Winter)

    // --- HERBS ---
    "herb_1": [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1], // Basil (Peak Summer)
    "herb_2": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Mint (Year-round)
    "herb_19": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Rosemary (Year-round)
    "herb_4": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Chives (Year-round)
    "herb_5": [1, 1, 2, 2, 2, 1, 0, 0, 0, 1, 1, 1], // Dill (Winter/Spring)

    // --- IMPORTED (Usually Year-round or stable) ---
    "imp_1": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Avocado (Imported)
    "imp_10": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Kiwi (Imported)
    "imp_15": [0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0], // Dragon Fruit (Imported Summer)
    "imp_cherry": [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0], // Cherry (Summer)
};

/**
 * Fallback generator for products not in the explicit map.
 * Returns year-round availability by default.
 */
export const getSeasonalData = (key: string): number[] => {
    return SEASONAL_DATA[key] || Array(12).fill(1);
};
