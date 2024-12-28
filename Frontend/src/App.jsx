import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import { useState, useEffect} from "react"


const App = () => {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5274/categories")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched data:", data); // Debug log
        setData(data);
      });
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
         {/* <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />  */}
      </div>
      {(typeof data.categories === 'undefined' ? (
        <p>Loading...</p>
      ): (
          data.categories.map((category, i) =>
          <p key={i}>{category}</p>
          ))
      )}
    </>
  );
};

export default App;
