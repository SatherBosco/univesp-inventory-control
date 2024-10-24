import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import BackIMG from "@/assets/back.png"

export function Editar() {
    return (
      <div className="mt-20">  
        <div className="flex flex-row mx-48 p-4">
          <img className="w-6 h-6" src={BackIMG} alt="ImagemVoltar"/>
          <Button variant="link" className="align-text-top">Voltar</Button>
        </div>
        
        <div className="flex flex-col">
          <div className="mx-48 p-4 grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-sm font-inter" htmlFor="nomeProduto">Nome do produto</Label>
            <Input className="w-96 h-10" type="name" id="nomProduto" placeholder="Nome do produto" />
          </div>
          <div className="mx-48 p-4 grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-sm font-inter" htmlFor="quantEstoque">Quantidade em estoque</Label>
            <Input className="w-96 h-10" type="name" id="quantEstoque" placeholder="Quantidade em estoque" />
          </div>
          <div className="mx-48 p-4 grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-sm font-inter" htmlFor="estMinimo">Estoque mínimo</Label>
            <Input className="w-96 h-10" type="name" id="estMinimo" placeholder="Estoque mínimo" />
          </div>
          <div className="flex flex-row mx-52 pt-10">
            <div className="pr-4">
              <Button className="w-20 h-10 bg-slate-900 text-white font-inter" variant="outline">Salvar</Button>
            </div>
            <div className="pr-4">
              <Button className="w-24 h-10 bg-white text-black font-inter" variant="outline">Cancelar</Button>
            </div>
            <div className="pr-4">
              <Button className="w-20 h-10 bg-red-500 text-white font-inter" variant="outline">Excluir</Button>
            </div>
          </div>
        </div>
      </div>  
    )
}