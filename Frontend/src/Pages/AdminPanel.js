import React from "react";
import "./AdminPanel.css";

const AdminPanel = () => {
  return (
    <>
      <div className="admin_body">
        <input
          type="checkbox"
          name="admin_MenuToggle"
          id="admin_MenuToggle"
          className="admin_MenuToggle"
        />
        <aside className="admin_sidebar">
          <nav>
            <a href="/" className="admin_logo">
              Logo
            </a>
            <div className="admin_nav_items">
              <a href="/" className="admin_active">
                user
              </a>
              <a href="/">ngo</a>
              <a href="/">request</a>
              <a href="/">registration</a>
              <a href="/">feedback</a>
              <a href="/">report</a>
              <a href="/">fraud</a>
            </div>
          </nav>
        </aside>
        <main className="admin_right">
          <label for="admin_MenuToggle" className="admin_toggle__icon">
            <span className="line line1"></span>
            <span className="line line3"></span>
            <span className="line line2"></span>
          </label>
          <div className="admin_content">
            {" "}
            <h2>Prayatna with us</h2>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminPanel;
