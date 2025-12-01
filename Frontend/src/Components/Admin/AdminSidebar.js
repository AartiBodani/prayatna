import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <aside className="admin_sidebar">
        <nav>
          <div className="admin_nav_items">
            <Link to="/admin-deshboard" className="navs admin_active">
              Dashboard
            </Link>
            <Link to="/deshboard/admin-user" className="navs">
              user
            </Link>
            <Link to="/deshboard/admin-ngo" className="navs">
              ngo
            </Link>
            <Link to="/deshboard/admin-request" className="navs">
              request
            </Link>
            {/* <Link to='/admin/register' className='navs'>registration</Link> */}
            <Link to="/deshboard/admin-feedback" className="navs">
              feedback
            </Link>
            <Link to="/deshboard/admin-report" className="navs">
              report
            </Link>
            <Link to="/deshboard/admin-fraud" className="navs">
              fraud
            </Link>
            <Link to="/deshboard/admin-volunteer" className="navs">
              volunteer
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
