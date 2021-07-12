import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import UserSidebar from "components/Sidebar/UserSidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function User({ children }) {
  return (
    <>
      <UserSidebar />
      <div className="relative md:ml-64 bg-blueGray-400">
        <AdminNavbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        {/* <div className="px-4 md:px-10 mx-auto w-full -m-24"> */}
        <div className="mx-auto w-full ">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
