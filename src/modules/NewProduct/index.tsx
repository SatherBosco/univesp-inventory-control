import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewProductPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

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

      <Label className="text-sm">Nome do produto</Label>
      <Input disabled={loading} type="name" placeholder="Nome do produto" className="mb-3" />

      <Label className="text-sm">Quantidade em estoque</Label>
      <Input disabled={loading} type="number" placeholder="Quantidade em estoque" className="mb-3" />

      <Label className="text-sm">Estoque mínimo</Label>
      <Input disabled={loading} type="number" placeholder="Estoque mínimo" className="mb-8" />

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
