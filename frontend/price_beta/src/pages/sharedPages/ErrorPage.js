import React from "react"
import { Link } from "react-router-dom"
import error_img from "../../assets/images/error-img.svg"


const ErrorPage = () => {
  return (
    <div>
      <main className="error-container">
        <article className="error_text_container">
          {/* Error message */}
          <h1 className="error_h1">Ooops...</h1>
          <h1 className="error_h1">Page not found</h1>
          <p className="error_paragraph">
            The page you are looking for doesn’t exist or an error occured, go
            back to home page
          </p>

          {/* Go Back Button */}
          <Link to=''>
            <button className="go_bck_btn" id="btn">
              Go Back
            </button>
          </Link>
        </article>
        <div className="error_img_div">
          <figcaption>
            <img className="error_img" src={error_img} alt="page not found" />
          </figcaption>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
