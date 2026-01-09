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

      <div className="d.flex" >
        <Sidebar />
        
        <main className="flex-grow-1 p-4 bg-body-tertiary" style={{minHeight: "100vh"}}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </main>
        </div>
    </div>
  );
}

export default App;