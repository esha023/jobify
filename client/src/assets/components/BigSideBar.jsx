import React from 'react';
import Wrapper from "../wrappers/BigSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLinks } from "./NavLinks";
import logo from '../images/logo.svg';

const BigSideBar = () => {
  const { showSidebar } = useDashboardContext();
  return (
  <Wrapper>
    <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
      <div className="content">
        <header>
          <img src={logo} alt='jobify' className='logo' />
        </header>
        <NavLinks isBigSideBar/>
      </div>
    </div>
  </Wrapper>
  );
};

export default BigSideBar;
