import { importedProducts } from "./imported-products";
import { vegetableProducts } from "./vegetable-products";
import { herbProducts } from "./herb-products";
import { localFruitProducts } from "./local-fruit-products";
import { saladProducts } from "./salad-products";
import { leafyGreensProducts } from "./leafy-greens-products";
import { edibleFlowersProducts } from "./edible-flowers-products";

export const sampleProducts = [
    ...importedProducts,
    ...vegetableProducts,
    ...herbProducts,
    ...localFruitProducts,
    ...saladProducts,
    ...leafyGreensProducts,
    ...edibleFlowersProducts
];
