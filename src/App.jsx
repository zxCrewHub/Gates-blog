import { Header } from "./components/Header";import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
export default function App() {
  return (
    <div><Header/>
      
      <main>
        
        <Outlet></Outlet>
      </main>
      <Footer/>
    </div>
  );
}
