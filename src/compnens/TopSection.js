import item1 from "./images/item1.png";
import item2 from "./images/item2.png";
import item3 from "./images/item3.png";

function TopSection() {
  return (
    <section className="top">
      <div className="title">
        <h1>Top List</h1>
        <p>Our mainstay menu</p>
      </div>
      <div className="content">
        <div className="item">
          <h3>Noodles three</h3>
          <p>White plate with dried shrimps</p>
          <div className="add">
            <span>125</span>
            <span>+</span>
          </div>
          <div className="image">
            <img src={item1} alt="" />
          </div>
        </div>
        <div className="item">
          <h3>Noodles one</h3>
          <p>Noodles spicy boil with seafood and pork in hot pot</p>
          <div className="add">
            <span>125</span>
            <span>+</span>
          </div>
          <div className="image">
            <img src={item2} alt="" />
          </div>
        </div>
        <div className="item">
          <h3>Noodles two</h3>
          <p>Noodles prawn spicy soup</p>
          <div className="add">
            <span>125</span>
            <span>+</span>
          </div>
          <div className="image">
            <img src={item3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
