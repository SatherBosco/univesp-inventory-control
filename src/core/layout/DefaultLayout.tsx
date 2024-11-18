import { Outlet } from "react-router-dom";
import { AppBar } from "../components/AppBar";

export function DefaultLayout() {
  return (
    <div className="flex flex-col w-full">
      <AppBar />
      <Outlet />
    </div>
  );
}
