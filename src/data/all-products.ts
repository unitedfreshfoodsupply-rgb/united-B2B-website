import { importedProducts } from "./imported-products";
import { vegetableProducts } from "./vegetable-products";
import { herbProducts } from "./herb-products";
import { localFruitProducts } from "./local-fruit-products";
import { leafyGreensProducts } from "./leafy-greens-products";

export const sampleProducts = [
    ...importedProducts,
    ...vegetableProducts,
    ...herbProducts,
    ...localFruitProducts,
    ...leafyGreensProducts
];
