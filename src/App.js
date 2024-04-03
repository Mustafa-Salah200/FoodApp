import BestSection from "./compnens/BestSection";
import Footer from "./compnens/Footer";
import Layout from "./compnens/Layout";
import Navbar from "./compnens/Navbar";
import Topsection from "./compnens/TopSection";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Layout />
        <Topsection />
        <BestSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
