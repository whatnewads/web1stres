import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
