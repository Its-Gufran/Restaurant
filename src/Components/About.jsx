import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is FOOD</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis veniam distinctio autem ullam ad? Voluptate, nesciunt.
            Explicabo dolores soluta tempora error commodi autem at temporibus
            pariatur, quaerat perferendis nesciunt ea libero cupiditate saepe
            rerum id ex nobis voluptatem atque beatae blanditiis nisi eaque
            voluptatibus? Totam autem inventore minus quis? Quos.
          </p>
          <Link to={"/"}>
            Explore Menu
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
}

export default About;
