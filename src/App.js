import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      {/* <Route path="/" /> */}
    </Routes>
  );
}

export default App;
