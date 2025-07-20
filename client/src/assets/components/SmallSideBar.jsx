import React from 'react';
import Wrapper from "../wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import logo from '../images/logo.svg';
import { FaTimes } from "react-icons/fa";
import  { NavLinks } from "../components/NavLinks";

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
  <Wrapper>
    <div className={showSidebar?"sidebar-container show-sidebar":"sidebar-container"}>
      <div className="content">
        <button type="button" className='close-btn' onClick={toggleSidebar}>
          <FaTimes/>
        </button>
        <header>
          <img src={logo} alt='jobify' className='logo' />
        </header>
        <NavLinks />
      </div>
    </div>
  </Wrapper>
  );
};

export default SmallSideBar;
