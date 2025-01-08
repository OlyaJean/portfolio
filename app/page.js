import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div >
      <div className="h-screen">
      <Navbar/>
      <Header/>
      </div>
      <About/>
    </div>
  );
}
