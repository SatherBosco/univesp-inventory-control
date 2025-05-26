import { useEffect, useState } from "react";
import { PlusIcon, MinusIcon, Loader2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Recipe, useProductsController } from "./hook/use-products-controller";
import { useNavigate } from "react-router-dom";

export function RecipePage() {
  const { recipes, productSelected, drawerOpen, openDrawer, closeDrawer, changeProductQuantity } = useProductsController();
  const navigate = useNavigate();

  return (
    <div className="w-full p-10">
      <Button variant="default" className="mb-3" onClick={() => navigate("/receita/novo")}>
        <PlusIcon /> Adicionar nova receita
      </Button>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-48">Ação</TableHead>
            <TableHead className="text-center">Receita</TableHead>
            <TableHead className="text-center">Produtos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipes.map((product, index) => (
            <TableRow key={index}>
              <TableCell className="text-center w-48 flex flex-row">
                <Button variant="link" className="font-bold text-blue-600" onClick={() => openDrawer(index)}>
                  Movimentar
                </Button>
                <Separator className="h-10" orientation="vertical" />
                <Button variant="link" className="font-bold" onClick={() => navigate(`/editar/${index}`, { state: { product } })}>
                  Editar
                </Button>
              </TableCell>
              <TableCell className="text-center">{product.name}</TableCell>
              <TableCell className="text-center">
                {product.products
                  .map((recipe) => `${recipe.product.name} (${recipe.quantity.toString().replace(".", ",")} ${recipe.product.unitType})`)
                  .join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <div className="pt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="text-neutral-300" href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div> */}

      <MovimentInventoryDrawer open={drawerOpen} product={productSelected} onChange={changeProductQuantity} closeDrawer={closeDrawer} />
    </div>
  );
}

const MovimentInventoryDrawer = ({
  open,
  product,
  onChange,
  closeDrawer,
}: {
  open: boolean;
  product: Recipe;
  onChange?: (product: Recipe) => void;
  closeDrawer: () => void;
}) => {
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setQuantity(0);
  }, [product]);

  const saveChanges = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    onChange?.({ ...product });
    setQuantity(0);
    setLoading(false);
  };

  return (
    <Drawer open={open} onOpenChange={closeDrawer}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-center text-2xl">{product.name}</DrawerTitle>
            <DrawerDescription className="text-center">Receitas feitas</DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-between p-4">
            <Button disabled={loading} size="icon" className="h-8 w-8 rounded-full" variant="default" onClick={() => setQuantity(quantity - 1)}>
              <MinusIcon />
            </Button>
            <Input disabled={loading} className="max-w-48 text-center text-lg" value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
            <Button disabled={loading} size="icon" className="h-8 w-8 rounded-full" variant="default" onClick={() => setQuantity(quantity + 1)}>
              <PlusIcon />
            </Button>
          </div>
          <DrawerFooter>
            <Button disabled={loading} variant="default" onClick={saveChanges}>
              {loading && <Loader2 className="animate-spin" />}
              Salvar
            </Button>
            <DrawerClose>
              <Button disabled={loading} className="w-full" variant="outline">
                Cancelar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
