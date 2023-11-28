import { useState } from "react";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="h-100 bg bg-slate-950">
      < Header />
        < Navbar />
        < Grid />
        < Footer />
        {<div className='h-[4000px]'></div>}
      </div>
    </>
  );
}

export default App;
