import { JSX } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { LoginLayout } from ".././layout/LoginLayout";
import { DefaultLayout } from "../layout/DefaultLayout";
import { LoginPage } from "../../modules/Login";
import { InventoryPage } from "../../modules/Inventory";
import { NewProductPage } from "../../modules/NewProduct";
import { EditProductPage } from "../../modules/EditProduct";
import { ReportPage } from "../../modules/Report";
import { NotFoundPage } from "../../modules/NotFound";
import { useAuthProvider } from "../contexts/AuthProvider";
import { RecipePage } from "@/modules/Recipe";
import { NewRecipePage } from "@/modules/NewRecipe";

export function AppRoutes() {
  const Private = ({ children }: { children: JSX.Element }) => {
    const { token } = useAuthProvider();

    if (!token) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <Private>
              <InventoryPage />
            </Private>
          }
        />
        <Route
          path="/novo"
          element={
            <Private>
              <NewProductPage />
            </Private>
          }
        />
        <Route
          path="/editar/:id"
          element={
            <Private>
              <EditProductPage />
            </Private>
          }
        />
        <Route
          path="/receita"
          element={
            <Private>
              <RecipePage />
            </Private>
          }
        />
        <Route
          path="/receita/novo"
          element={
            <Private>
              <NewRecipePage />
            </Private>
          }
        />
        <Route
          path="/receita/editar/:id"
          element={
            <Private>
              <EditProductPage />
            </Private>
          }
        />
        <Route
          path="/relatorio"
          element={
            <Private>
              <ReportPage />
            </Private>
          }
        />

        <Route
          path="*"
          element={
            <Private>
              <NotFoundPage />
            </Private>
          }
        />
      </Route>
    </Routes>
  );
}
