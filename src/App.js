import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { Home } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage"
import { MissionPage } from "./pages/MissionPage";
import { TeamPage } from "./pages/TeamPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { SharedLayout } from "./components/SharedLayout";
import { LoginPage } from "./pages/LoginPage";
import { Suspense, useEffect } from "react";

const App = () => {

  // Buzzwords
  // Easy: Narzędzia Świnoujście u Jacka, Dąbrowska 14
  // Hard: Narzędzia sprzedaż
  // SSR

  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<UserPage />} />



          <Route path="/about" element={<AboutPage />}>
            <Route index element={<MissionPage />} />
            <Route path="mission" element={<MissionPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>



          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/products/:productId/:carpenter" element={<ProductDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App;