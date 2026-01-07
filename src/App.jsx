import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </div>
  );
}

export default App;