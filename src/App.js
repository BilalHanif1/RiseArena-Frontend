import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import TikTokLately from "./Pages/TikTokLately";
import Instagram from "./Pages/Instagram";
import LikeToKnowIt from "./Pages/LikeToKnowIt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/tiktoklately" exact element={<TikTokLately />} />
      <Route path="/instagram" exact element={<Instagram />} />
      <Route path="/liketoknowit" exact element={<LikeToKnowIt />} />
      {/* <Route path="/" /> */}
    </Routes>
  );
}

export default App;
