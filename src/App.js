import './App.css';
import Navbar from './Components/Navbar';
import Categories from './Components/Categories';
import Slider from './Components/Slider';
import Offerimg from './Components/Offerimg';
import Trendingproductsprops from './Components/Trendingproductsprops';
import  TrendingHairProps   from "./Components/TrendingHairProps";
import ImagesB from './Components/ImagesB';
import Services from './Components/Services';
import Reviewsprops from './Components/Reviewsprops';
import Comment from './Components/Comment';
import Footer from './Components/Footer';
import Offerimgrouter from './Components/Offerimgrouter';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Categories/>
     <Slider/>
     <Offerimgrouter/>
     <Trendingproductsprops/>
     < TrendingHairProps/>
     <ImagesB/>
     <Services/>
     <Reviewsprops/>
     <Comment/>
     <Footer/>
    </div>
  );
}

export default App;
