import LoginIMG from "@/assets/login.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useAuthProvider } from "@/core/contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Endereço de e-mail inválido.",
  }),
  password: z.string().min(8, {
    message: "A senha deve ter no mínimo 8 caracteres.",
  }),
});

export function LoginPage() {
  const { setToken } = useAuthProvider();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (values.email !== "usuario@usuario.com" || values.password !== "12345678") {
      alert("Usuário ou senha inválido");
      setLoading(false);
      return;
    }
    setToken(values.password);
    navigate("/");
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="hidden lg:flex justify-center items-center  w-1/2 bg-slate-900">
        <img src={LoginIMG} alt="Imagem de Login" className="" />
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 m-4">
        <h1 className="text-center font-semibold text-3xl mb-16">Gerenciador de Estoque</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-96">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="E-mail..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type="password" placeholder="Senha..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading} className="w-full -10" type="submit">
              {loading && <Loader2 className="animate-spin" />}
              Entrar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
