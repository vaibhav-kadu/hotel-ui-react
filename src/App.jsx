import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Header/>

      <div style={{ display: "flex" }} >
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }} >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;