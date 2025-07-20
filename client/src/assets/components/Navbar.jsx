import React from 'react';
import Wrapper from "../wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import logo from '../images/logo.svg';
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "../components/LogoutContainer";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <img src={logo} alt='jobify' className='logo' />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
