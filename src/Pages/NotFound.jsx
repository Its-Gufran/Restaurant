import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
function NotFound() {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>LOOKS LIKE YOU ARE LOST! </h1>
          <p>We cannot seem to find you the page you are looking for!!</p>
          <Link to={"/"}>
            Back To Home{" "}
            <span>
              <HiArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
