import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-void">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
