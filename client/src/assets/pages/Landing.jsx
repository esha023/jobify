import React from "react";
import main from "../images/main.svg";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import Wrapper from "../wrappers/LandingPage";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            The Job Tracking App helps you organize and monitor every step of
            your job search in one place. Easily add applications, update their
            status, set reminders for follow-ups, and keep track of interviews
            and offers. With a simple dashboard and progress timeline, you will
            always know where you stand and never miss an opportunity.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
