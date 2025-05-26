import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsStartList } from "../Inventory/productsStartList";

export function NewRecipePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [productsAmount, setProductsAmount] = useState(1);

  const saveProduct = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);

    toast({
      title: "Produto adicionado com sucesso!",
    });

    navigate(-1);
  };

  return (
    <div className="flex flex-col w-full max-w-[500px] items-start mx-20 my-5 gap-2">
      <Button disabled={loading} variant="link" className="mb-5" onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
        Voltar
      </Button>

      <Label className="text-sm">Nome da receita</Label>
      <Input disabled={loading} type="name" placeholder="Nome da receita" className="mb-3" />

      <Label className="text-sm">Itens</Label>

      {productsAmount > 0 &&
        Array.from({ length: productsAmount }).map((_, index) => (
          <div className="flex flex-row gap-3" key={index}>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione o produto" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Produtos</SelectLabel>
                  {productsStartList.map((product) => (
                    <SelectItem key={product.name} value={product.name}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Input disabled={loading} type="number" placeholder="Quantidade" className="mb-3 w-36" />
          </div>
        ))}

      <Button disabled={loading} variant="outline" className="mb-10" onClick={() => setProductsAmount(productsAmount + 1)}>
        + Adicionar produto
      </Button>

      <div className="flex flex-row justify-between gap-5">
        <Button disabled={loading} variant="default" onClick={() => saveProduct()}>
          {loading && <Loader2 className="animate-spin" />}
          Salvar
        </Button>
        <Button disabled={loading} variant="outline" onClick={() => navigate(-1)}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
