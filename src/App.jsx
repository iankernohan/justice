import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
