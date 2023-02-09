import BottomArticles from "./components/BottomArticles";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <BottomArticles/>
    </div>
  );
}

export default App;
