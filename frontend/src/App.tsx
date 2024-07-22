import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PetList from "./pages/PetList";
import PetQuiz from "./pages/PetQuiz";
import PetDescription from "./pages/PetDescription";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petSearch" element={<PetList />} />
          <Route path="/petQuiz" element={<PetQuiz />} />
          <Route path="/:id" element={<PetDescription />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
