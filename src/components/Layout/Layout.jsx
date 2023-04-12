import { Outlet } from "react-router-dom";
import { NavStyled } from "./Layout.styled.jsx";
import { LinkStyled } from "./Layout.styled.jsx";
import { Suspense } from "react";

const Layout = () => { 

  return (
    <div>
      <header>
        <NavStyled>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </NavStyled>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;