// components/ChatHeader.js
import React from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';

const ChatHeader = ({ sidebarOpen, onToggleSidebar }) => {
  return (
    <Navbar bg="primary" variant="dark" className="chat-header">
      <div className="d-flex align-items-center">
        <Button
          variant="outline-light"
          className="sidebar-toggle me-3"
          onClick={onToggleSidebar}
        >
          <i className={`fas fa-${sidebarOpen ? 'chevron-left' : 'chevron-right'}`}></i>
        </Button>
        <Navbar.Brand className="fw-bold">
          <i className="fas fa-comments me-2"></i>
          ChatApp
        </Navbar.Brand>
      </div>

      <Nav className="ms-auto">
        <Button variant="outline-light" size="sm" className="me-2">
          <i className="fas fa-video"></i>
        </Button>
        <Button variant="outline-light" size="sm" className="me-2">
          <i className="fas fa-phone"></i>
        </Button>
        
        <Dropdown align="end">
          <Dropdown.Toggle variant="outline-light" id="user-dropdown">
            <i className="fas fa-user-circle me-2"></i>
            User Name
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <i className="fas fa-user me-2"></i>Profile
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="fas fa-cog me-2"></i>Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <i className="fas fa-sign-out-alt me-2"></i>Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default ChatHeader;