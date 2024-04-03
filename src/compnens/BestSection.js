import best_image from "./images/best.png";

function BestSection() {
  return (
    <section className="best">
      <div className="image">
        <img src={best_image} alt="" />
      </div>
      <div className="content">
        <h2>Best Potatoes For French Fries</h2>
        <p>
          Russet potatoes are ideal. Since they're dense, they don't contain as
          much water inside, which allows them to get extra crispy.
        </p>
      </div>
    </section>
  );
}

export default BestSection;
