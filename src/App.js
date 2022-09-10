import { Routes, Route } from "react-router-dom";
import FindDealer from "./pages/FindDealer";


function App() {
  return (
    <Routes>
      <Route path="/" element={<FindDealer />} />
    </Routes>
  );
}

export default App;
