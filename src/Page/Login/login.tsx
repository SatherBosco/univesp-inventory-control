import LoginIMG from "@/assets/login.png"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
 
export function Login() {
  return (
    <div className="flex flex-row">
      <div className="bg-slate-900 w-1/2 h-screen p-36">
         <img src={LoginIMG} alt="ImagemLogin"/>
      </div>
      <div className="flex flex-col">
        <h1 className="mx-48 mt-36 pb-10 text-center font-semibold text-3xl font-inter">Gerenciador de Estoque</h1>
        <div className="mx-48 p-4 grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-sm font-inter" htmlFor="email">Email</Label>
          <Input className="w-96 h-10" type="email" id="email" placeholder="Email" />
        </div>
        <div className="mx-48 p-4 grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-sm font-inter" htmlFor="password">Senha</Label>
          <Input className="w-96 h-10" type="password" id="password" placeholder="Senha" />
        </div>
        <div className="mx-52 pt-10">
          <Button className="w-96 h-10 bg-slate-900 text-white font-inter" variant="outline">Entrar</Button>
        </div>
      </div>
    </div>
  )
}