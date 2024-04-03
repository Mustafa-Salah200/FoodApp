import basic_image from "./images/basic.png";

function Layout() {
  return (
    <section className="layout">
      <div className="content">
        <h2>Delicious Food Is Waiting For You</h2>
        <p>
          Our team of registered nurses and skilled healthcare professionals
          provide in-home nursing
        </p>
        <div className="option">
          <button className="active">Food Menu</button>
          <button>Book a Table</button>
        </div>
      </div>
      <div className="image">
        <img src={basic_image} alt="" />
      </div>
    </section>
  );
}

export default Layout;
