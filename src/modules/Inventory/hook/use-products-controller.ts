import { useState } from "react";
import { productsStartList } from "../productsStartList";

export type Product = {
  name: string;
  quantity: number;
  minimumStock: number;
};

export const useProductsController = () => {
  const [products, setProducts] = useState<Product[]>(productsStartList);
  const [productSelected, setProductSelected] = useState<Product>({ name: "", quantity: 0, minimumStock: 0 });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (productIndex: number) => {
    setProductSelected(products[productIndex]);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const changeProductQuantity = (product: Product) => {
    const newProducts = products.map((p) => {
      if (p.name === product.name) {
        return product;
      }
      return p;
    });

    setProducts(newProducts);
    setDrawerOpen(false);
  };

  return {
    products,
    productSelected,
    drawerOpen,
    openDrawer,
    closeDrawer,
    changeProductQuantity,
  };
};
