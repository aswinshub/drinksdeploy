import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Drinks from "./Page/Drinks";

function App() {
 

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Drinks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
