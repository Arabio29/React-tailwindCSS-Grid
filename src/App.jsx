import { useState } from "react";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        < Navbar />
        < Grid />
        < Footer />
      </div>
    </>
  );
}

export default App;
