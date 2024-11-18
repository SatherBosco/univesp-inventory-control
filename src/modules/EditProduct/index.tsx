import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { Product } from "../Inventory/hook/use-products-controller";

export function EditProductPage() {
  const location = useLocation();
  const product = location.state.product as Product;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full max-w-[500px] items-start mx-20 my-5 gap-2">
      <Button variant="link" className="mb-5" onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
        Voltar
      </Button>

      <Label className="text-sm">Nome do produto</Label>
      <Input value={product.name} type="name" placeholder="Nome do produto" className="mb-3" />

      <Label className="text-sm">Quantidade em estoque</Label>
      <Input value={product.quantity} type="number" placeholder="Quantidade em estoque" className="mb-3" />

      <Label className="text-sm">Estoque mínimo</Label>
      <Input value={product.minimumStock} type="number" placeholder="Estoque mínimo" className="mb-8" />

      <div className="flex flex-row justify-between gap-5">
        <Button variant="default">Salvar</Button>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Cancelar
        </Button>
        <Button variant="destructive">Excluir</Button>
      </div>
    </div>
  );
}
