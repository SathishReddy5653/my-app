import "./App.css";
// import Welcome from './components/Welcome';
// import Form from './components/Form';
import TopSection from "./components/header/header";
import  {BrowserRouter,Routes,Route} from "react-router-dom";
import TabButton from "./components/tabs/tabs";
import { CartProvider } from "./components/global-component/global";
// import { Home } from "@mui/icons-material";
import Welcome from "./components/Welcome";
import DisplayCartItems from "./components/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <TopSection />
        <Routes>
        <Route path="/home" element={<Welcome/>}/>
        <Route path="/tabs" element={<TabButton/>}/>
        <Route path="/cart" element={<DisplayCartItems/>}/>
        </Routes>
    
        
  
        
      </CartProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
