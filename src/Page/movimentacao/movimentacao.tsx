import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import LogoutIMG from "@/assets/logout.png"
   
  const produtos = [
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto01",
      quantidade: "10",
      estoque_mínimo: "10",
    },

    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto02",
      quantidade: "4",
      estoque_mínimo: "10",
    },

    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto03",
      quantidade: "100",
      estoque_mínimo: "10",
    },

    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto04",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto05",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto06",
      quantidade: "100",
      estoque_mínimo: "10",
    },
     
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto07",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto08",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto09",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto10",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto11",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto12",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto13",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto14",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto16",
      quantidade: "100",
      estoque_mínimo: "10",
    },  
    
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto17",
      quantidade: "100",
      estoque_mínimo: "10",
    },

    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto18",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto19",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto20",
      quantidade: "100",
      estoque_mínimo: "10",
    },
      
    {
      ação1: <Button variant="link">Movimentar</Button>,
      ação2: <Button className="text-red-700 font-semibold" variant="link">Editar</Button>,
      nome: "Produto21",
      quantidade: "100",
      estoque_mínimo: "10",
    },  


  ]
   
  export function movimentacao() {
    return (
     <div className="w-auto h-screen m-10"> 
       <div className="flex flex-row px-5 py-2">
       <div className="flex flex-row">
         <Button variant="outline">Estoque</Button>
         <Button variant="outline">Relatório</Button>
       </div>
       <div className="flex flex-row ">
         <img className="w-10 h-10" src={LogoutIMG} alt="ImagemLogout"/>
       </div>
       
       </div>
       <Separator/>
       <div className="px-14 pt-10">
       <Button className="bg-slate-900 text-white">Adicionar produto</Button> 
       <Table className="w-full h-screen pt-16">
         <TableHeader>
           <TableRow>
             <TableHead className="w-72">Ação</TableHead>
             <TableHead className="w-72">Produto</TableHead>
             <TableHead className="w-72">Quantidade</TableHead>
             <TableHead className="w-72">Estoque mínimo</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           {produtos.map((produto) => (
             <TableRow key={produto.nome} className={produto.quantidade > produto.estoque_mínimo ? "bg-white" : "bg-red-100"}>
               <TableCell className="w-72">{produto.ação1} <span className="separator">|</span> {produto.ação2}</TableCell>
               <TableCell className="w-72">{produto.nome}</TableCell>
               <TableCell className="w-72">{produto.quantidade}</TableCell>
               <TableCell className="w-72">{produto.estoque_mínimo}</TableCell>
             </TableRow>
           ))}
         </TableBody>
         <TableFooter>
           <TableRow>
             
           </TableRow>
         </TableFooter>
       </Table>
      </div>
      <div className="pb-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
     </div> 
    )
  }