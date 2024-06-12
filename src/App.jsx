import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Footer from "./Components/UI/Footer";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={true}>
      <main className="main">
        <Navbar />
        <motion.div
          key={location.pathname}
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 100,
            opacity: 0,
          }}
          // transition={{
          //   duration: 0.5,
          //   type: "spring",
          //   stiffness: 150,
          // }}
        >
          <Outlet />
        </motion.div>
        <Footer />
      </main>
    </AnimatePresence>
  );
}

export default App;
