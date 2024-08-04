import one from "../assets/images/img1.jpg";
import two from "../assets/images/img2.jpg";
import three from "../assets/images/img3.jpg";


function Product(){
  return (<div className="products">
    <div className="coursecard">
      <img src={one} alt="mypicture" width="150" height="400" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum.</p>
    </div>
    <div className="coursecard">
      <img src={two} alt="mypicture1" width="150" height="400"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum.</p>
    </div>
    <div className="coursecard">
      <img src={three}alt="mypicture2" width="150" height="400" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum.</p>
    </div>
  </div>)
}

export default Product
