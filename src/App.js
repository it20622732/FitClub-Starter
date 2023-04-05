import './App.css';
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Programs";
import Reason from "./components/Reason/Reasons";
import Plan from "./components/Plan/Plans";
import Testimonial from "./components/Testimonial/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
          <Hero/>
          <Program/>
          <Reason/>
          <Plan/>
          <Testimonial/>
          <Join/>
          <Footer/>



    </div>
  );
}

export default App;
