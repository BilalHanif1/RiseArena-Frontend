import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import TikTokLately from "./Pages/TikTokLately";
import Instagram from "./Pages/Instagram";
import LikeToKnowIt from "./Pages/LikeToKnowIt";
import Contact from "./Pages/Contact";
import VisitTheShop from "./Pages/VisitTheShop";
import Blog from "./Pages/Blog";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/tiktoklately" exact element={<TikTokLately />} />
      <Route path="/instagram" exact element={<Instagram />} />
      <Route path="/liketoknowit" exact element={<LikeToKnowIt />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/aboutpage" exact element={<AboutPage />} />
      <Route path="/visittheshop" exact element={<VisitTheShop />} />
      <Route path="/blog" exact element={<Blog />} />
      {/* <Route path="/" /> */}
    </Routes>
  );
}

export default App;
