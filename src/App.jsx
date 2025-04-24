import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext.jsx";

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <Header title={"React JS Blog"} />
        <NavBar />
        <>
          <Outlet />
        </>
        <Footer />
      </div>
    </DataProvider>
  );
};

export default App;
