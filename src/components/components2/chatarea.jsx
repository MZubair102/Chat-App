// components/ChatArea.js
import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  Dropdown
} from 'react-bootstrap';

const ChatArea = ({ chat, onSendMessage, onBack }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat?.messages]);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!chat) {
    return (
      <div className="chat-welcome d-flex align-items-center justify-content-center">
        <div className="text-center text-muted">
          <div className="welcome-icon mb-3">
            <i className="fas fa-comments fa-4x"></i>
          </div>
          <h3>Welcome to ChatApp</h3>
          <p>Select a conversation to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-area d-flex flex-column h-100">
      {/* Chat Header */}
      <div className="chat-header-bar d-flex align-items-center justify-content-between p-3 border-bottom">
        <div className="d-flex align-items-center">
          <Button variant="link" className="back-button d-md-none me-2" onClick={onBack}>
            <i className="fas fa-arrow-left"></i>
          </Button>
          <div className="position-relative me-3">
            <div className="chat-avatar avatar-lg">
              {chat.avatar}
            </div>
            {chat.online && <div className="online-indicator"></div>}
          </div>
          <div>
            <h5 className="mb-0">{chat.name}</h5>
            <small className="text-muted">
              {chat.online ? 'Online' : 'Offline'}
              {chat.isGroup && ` • ${chat.members} members`}
            </small>
          </div>
        </div>

        <div className="chat-actions">
          <Button variant="outline-secondary" size="sm" className="me-2">
            <i className="fas fa-phone"></i>
          </Button>
          <Button variant="outline-secondary" size="sm" className="me-2">
            <i className="fas fa-video"></i>
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" size="sm" id="chat-options">
              <i className="fas fa-ellipsis-v"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item>
                <i className="fas fa-info-circle me-2"></i>View Info
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="fas fa-ban me-2"></i>Block
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-danger">
                <i className="fas fa-trash me-2"></i>Delete Chat
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>


      {/* Messages Area */}
      <div className="messages-container flex-grow-1 p-3 overflow-auto bg-light">
  {chat.messages && chat.messages.length > 0 ? (
    chat.messages.map((msg, index) => (
      <div
        key={msg.id || index}
        className={`message-wrapper d-flex mb-3 ${
          msg.sender === "me" ? "justify-content-end" : "justify-content-start"
        }`}
      >
        <div
          className={`message-bubble shadow-sm px-3 py-2 rounded-4 ${
            msg.sender === "me"
              ? "message-sent bg-primary text-white"
              : "message-received bg-white border"
          }`}
          style={{ maxWidth: "75%" }}
        >
          <div className="message-text">{msg.text}</div>
          <small className="message-time text-muted d-block text-end mt-1">
            {msg.time}
          </small>
        </div>
      </div>
    ))
  ) : (
    <div className="text-muted text-center mt-5">No messages yet</div>
  )}

  <div ref={messagesEndRef} />
</div>


      {/* Message Input */}
      <div className="message-input-container p-3 border-top">
        <InputGroup>
          <Button variant="outline-secondary">
            <i className="fas fa-paperclip"></i>
          </Button>
          <Button variant="outline-secondary">
            <i className="fas fa-image"></i>
          </Button>
          <FormControl
            as="textarea"
            rows={1}
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="message-input"
          />
          <Button variant="outline-secondary">
            <i className="fas fa-smile"></i>
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSend}
            disabled={!message.trim()}
          >
            <i className="fas fa-paper-plane"></i>
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default ChatArea;