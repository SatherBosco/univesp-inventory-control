import { useState } from "react";
import { productsStartList } from "../productsStartList";
import { Product } from "@/modules/Inventory/hook/use-products-controller";

export type RecipeProduct = {
  product: Product;
  quantity: number;
};

export type Recipe = {
  name: string;
  products: RecipeProduct[];
};

export const useProductsController = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(productsStartList);
  const [productSelected, setProductSelected] = useState<Recipe>({ name: "", products: [] });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (productIndex: number) => {
    setProductSelected(recipes[productIndex]);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const changeProductQuantity = (recipe: Recipe) => {
    const newProducts = recipes.map((p) => {
      if (p.name === recipe.name) {
        return recipe;
      }
      return p;
    });

    setRecipes(newProducts);
    setDrawerOpen(false);
  };

  return {
    recipes,
    productSelected,
    drawerOpen,
    openDrawer,
    closeDrawer,
    changeProductQuantity,
  };
};
