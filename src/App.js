import "./App.css";
// import Welcome from './components/Welcome';
// import Form from './components/Form';
import TopSection from "./components/header/header";

import TabButton from "./components/tabs/tabs";
import { CartProvider } from "./components/global-component/global";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <TopSection />
        <TabButton />
      </CartProvider>
    </div>
  );
}

export default App;
