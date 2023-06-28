import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";



function Layout() {
  return (
    <div className="Layout">
        Hello layout
      <Header/>
      <Outlet />
      

      <Footer/>
    </div>
  );
}

export default Layout;