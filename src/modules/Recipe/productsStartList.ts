import { Recipe } from "./hook/use-products-controller";

export const productsStartList: Recipe[] = [
  {
    name: "Macarronada",
    products: [
      { product: { name: "Macarrão", unitType: "Kg", quantity: 1, minimumStock: 8 }, quantity: 0.5 },
      { product: { name: "Molho de tomate", unitType: "L", quantity: 1, minimumStock: 15 }, quantity: 0.2 },
      { product: { name: "Queijo", unitType: "Kg", quantity: 1, minimumStock: 5 }, quantity: 0.1 },
    ],
  },
  {
    name: "Arroz com Feijão",
    products: [
      { product: { name: "Arroz", unitType: "Kg", quantity: 1, minimumStock: 5 }, quantity: 0.3 },
      { product: { name: "Feijão", unitType: "Kg", quantity: 1, minimumStock: 10 }, quantity: 0.2 },
      { product: { name: "Sal", unitType: "Kg", quantity: 1, minimumStock: 15 }, quantity: 0.05 },
    ],
  },
  {
    name: "Salada de Frutas",
    products: [
      { product: { name: "Maçã", unitType: "Unidade", quantity: 1, minimumStock: 10 }, quantity: 0.2 },
      { product: { name: "Banana", unitType: "Unidade", quantity: 1, minimumStock: 10 }, quantity: 0.3 },
      { product: { name: "Laranja", unitType: "Unidade", quantity: 1, minimumStock: 10 }, quantity: 0.4 },
    ],
  },
  {
    name: "Bolo de Chocolate",
    products: [
      { product: { name: "Farinha de trigo", unitType: "Kg", quantity: 1, minimumStock: 5 }, quantity: 0.4 },
      { product: { name: "Açúcar", unitType: "Kg", quantity: 1, minimumStock: 12 }, quantity: 0.3 },
      { product: { name: "Chocolate em pó", unitType: "Kg", quantity: 1, minimumStock: 8 }, quantity: 0.2 },
      { product: { name: "Ovos", unitType: "Unidade", quantity: 1, minimumStock: 20 }, quantity: 2 },
    ],
  },
];
