import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ValentinesAsk from "./ValentinesAsk";
import YesPage from "./YesPage.tsx";

function App() {
  return (
    <Router basename="/invitation">
      <Routes>
        <Route path="/" element={<ValentinesAsk />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
