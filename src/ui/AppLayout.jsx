import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <Outlet />
    </div>
  );
}

export default AppLayout;