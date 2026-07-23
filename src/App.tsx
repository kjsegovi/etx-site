import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { CaseStudy } from "./pages/CaseStudy";
import { Services } from "./pages/Services";
import { Approach } from "./pages/Approach";
import { QuickStart } from "./pages/QuickStart";
import { QuickStartChooser } from "./pages/QuickStartChooser";
import { SimpleAuthorQuickStart } from "./pages/SimpleAuthorQuickStart";
import { TourItQuickStart } from "./pages/TourItQuickStart";
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
        <Route path="quick-start" element={<QuickStartChooser />} />
        <Route path="quick-start/torus" element={<QuickStart />} />
        <Route
          path="quick-start/simple-author"
          element={<SimpleAuthorQuickStart />}
        />
        <Route path="quick-start/tour-it" element={<TourItQuickStart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
