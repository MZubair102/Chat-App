// components/ChatSidebar.js
import React, { useState } from 'react';
import {
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  Badge,
  Tab,
  Tabs
} from 'react-bootstrap';

const ChatSidebar = ({ chats, selectedChat, onSelectChat, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredChats = chats.filter(chat => {
    const matchesSearch = chat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = 
      activeTab === 'all' ||
      (activeTab === 'unread' && chat.unread > 0) ||
      (activeTab === 'groups' && chat.isGroup);
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="chat-sidebar">
      {/* Search Bar */}
      <div className="sidebar-search p-3">
        <InputGroup>
          <FormControl
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearch(e.target.value);
            }}
          />
          <Button variant="outline-secondary">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
      </div>

      {/* Tabs */}
      <Tabs
        activeKey={activeTab}
        onSelect={setActiveTab}
        className="px-3 mb-0"
        fill
      >
        <Tab eventKey="all" title="All" />
        <Tab eventKey="unread" title="Unread" />
        <Tab eventKey="groups" title="Groups" />
      </Tabs>

      {/* Chat List */}
      <div className="chat-list">
        <ListGroup variant="flush">
          {filteredChats.map(chat => (
            <ListGroup.Item
              key={chat.id}
              action
              active={selectedChat?.id === chat.id}
              onClick={() => onSelectChat(chat)}
              className="chat-list-item"
            >
              <div className="d-flex align-items-center">
                {/* Avatar */}
                <div className="position-relative me-3">
                  <div
                    className={`chat-avatar ${selectedChat?.id === chat.id ? 'avatar-active' : ''}`}
                  >
                    {chat.avatar}
                  </div>
                  {chat.online && <div className="online-indicator"></div>}
                  {chat.isGroup && <div className="group-indicator"></div>}
                </div>

                {/* Chat Info */}
                <div className="flex-grow-1 min-width-0">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="chat-name mb-0">{chat.name}</h6>
                    <small className="chat-time">{chat.time}</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="chat-preview mb-0">
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <Badge bg="primary" pill className="ms-2">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* New Chat Button */}
      <div className="sidebar-footer p-3 border-top">
        <Button variant="primary" className="w-100">
          <i className="fas fa-plus me-2"></i>
          New Conversation
        </Button>
      </div>
    </div>
  );
};

export default ChatSidebar;