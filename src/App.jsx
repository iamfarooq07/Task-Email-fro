import Signup from "./auth/Signup.jsx";
import Login from "./auth/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Dashborad from "./components/Dashborad.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashborad" element={<Dashborad />} />
      </Routes>
    </div>
  );
}

export default App;
