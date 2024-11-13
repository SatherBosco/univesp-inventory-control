import { Button } from "@/components/ui/button";
import LogoutIMG from "@/assets/logout.png"

export function AppBar () {
    return (
        <div className="flex flex-row px-5 py-2">
          <div className="flex flex-row gap-1">
            <Button variant="outline">Estoque</Button>
            <Button variant="outline">Relatório</Button>
          </div>
          <div className="ml-auto ">
            <img className="w-10 h-10" src={LogoutIMG} alt="ImagemLogout"/>
          </div>
       
       </div>
    )
}