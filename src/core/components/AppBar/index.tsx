import { Button } from "@/components/ui/button";
import { useAuthProvider } from "@/core/contexts/AuthProvider";
import { LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type MenuOptions = "Estoque" | "Relatorio";

export const AppBar = () => {
  const [itemActive, setItemActive] = useState<MenuOptions>("Estoque");
  const location = useLocation();
  const navigate = useNavigate();
  const { setToken } = useAuthProvider();

  useEffect(() => {
    if (location.pathname.includes("relatorio")) {
      setItemActive("Relatorio");
    } else {
      setItemActive("Estoque");
    }
  }, [location]);

  return (
    <div className="flex flex-row px-10 py-2 shadow-md">
      <div className="flex flex-row gap-2">
        <Button variant={itemActive === "Estoque" ? "default" : "outline"} onClick={() => navigate("/")}>
          Estoque
        </Button>
        <Button variant={itemActive === "Relatorio" ? "default" : "outline"} onClick={() => navigate("/relatorio")}>
          Relatório
        </Button>
      </div>
      <div className="ml-auto ">
        <Button variant="outline" className="border-red-600" onClick={() => setToken(null)}>
          <LogOutIcon className="text-red-600" />
        </Button>
      </div>
    </div>
  );
};
