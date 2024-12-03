import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Diagnostic from "./pages/Diagnostic";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Navbar />
      <Home />
      <div className="mt-8">
        <Diagnostic />
      </div>
    </div>
  );
}

export default App;
