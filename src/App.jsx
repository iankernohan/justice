import { Outlet } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Footer from "./Components/UI/Footer";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
