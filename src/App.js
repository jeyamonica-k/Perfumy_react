
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import About  from "./components/About";
import Product from "./components/Product";


function App(){
  return(
    <div>
  <Navbar></Navbar>
  <Search></Search>
  <Product></Product>
  <About></About>
  <Footer></Footer>
</div>
  )
}

export default App