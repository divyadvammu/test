import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/index/Main";
import Allserives from "./pages/Services/Allserives";
import Events from "./pages/Events/Events";
import Products from "./pages/Products/Products";
import Coupen from "./pages/Coupen/Coupen";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Main/>} />
          <Route path="/service" element={<Allserives/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Coupen" element={<Coupen/>} />
          <Route path="/Main" element={<Main/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);