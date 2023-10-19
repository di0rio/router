import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../assets/components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet /> 
      <h1>Footer</h1>
    </>
  );
}

export default App;
