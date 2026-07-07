import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { CaseStudy } from "./pages/CaseStudy";
import { Services } from "./pages/Services";
import { Approach } from "./pages/Approach";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="services" element={<Services />} />
        <Route path="approach" element={<Approach />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
