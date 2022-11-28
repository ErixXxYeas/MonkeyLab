import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import AdminPage from "./Pages/AdminPage";
import N29Test from "./Pages/N-29_Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/N29" element={<N29Test />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
