import { Link, NavLink, Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <div>
      <Routes>
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
          <Route path="/products/:productId/:carpenter" element={<ProductDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;
