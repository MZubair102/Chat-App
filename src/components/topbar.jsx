import React from "react";
import { Navbar, Nav, Dropdown, Image, Badge, Button } from "react-bootstrap";
import { FiSearch, FiBell, FiMessageSquare, FiUser } from "react-icons/fi";

const TopBar = ({ user }) => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="shadow-sm px-3 py-2 d-flex justify-content-between align-items-center border-bottom"
      style={{ height: "64px" }}
    >
      {/* Left side (App name / Search bar) */}
      <div className="d-flex align-items-center">
        <h5 className="fw-bold text-primary mb-0 me-4">ChatConnect</h5>

        {/* Search input */}
        <div className="d-flex align-items-center bg-light rounded-pill px-3 py-1">
          <FiSearch className="text-muted me-2" />
          <input
            type="text"
            placeholder="Search messages or users..."
            className="form-control border-0 bg-transparent"
            style={{ boxShadow: "none", width: "220px" }}
          />
        </div>
      </div>

      {/* Right side (Icons + Profile) */}
      <Nav className="align-items-center">
        <Nav.Item className="me-3 position-relative">
          <FiMessageSquare size={20} className="text-muted" />
          <Badge
            bg="danger"
            pill
            className="position-absolute top-0 start-100 translate-middle"
          >
            3
          </Badge>
        </Nav.Item>

        <Nav.Item className="me-3 position-relative">
          <FiBell size={20} className="text-muted" />
          <Badge
            bg="warning"
            pill
            className="position-absolute top-0 start-100 translate-middle"
          >
            5
          </Badge>
        </Nav.Item>

        {/* Profile dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle
            as={Button}
            variant="link"
            className="p-0 border-0 d-flex align-items-center text-dark text-decoration-none"
          >
            <Image
              src={user?.avatar || "https://via.placeholder.com/40"}
              roundedCircle
              width={36}
              height={36}
              className="me-2"
            />
            <span className="fw-semibold">{user?.name || "John Doe"}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/profile">
              <FiUser className="me-2" /> Profile
            </Dropdown.Item>
            <Dropdown.Item href="/settings">
              <FiMessageSquare className="me-2" /> Chat Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/logout" className="text-danger">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default TopBar;
