import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar";
import ChatWindow from "./chatwindow";

const ChatApp = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      avatar: "https://i.pravatar.cc/100?img=1",
      online: true,
      messages: [
        { from: "Alice", text: "Hey! How are you?", time: "10:30 AM" },
        { from: "You", text: "I’m good! You?", time: "10:32 AM" },
      ],
    },
    {
      id: 2,
      name: "Michael Smith",
      avatar: "https://i.pravatar.cc/100?img=2",
      online: false,
      messages: [
        { from: "Michael", text: "Project done?", time: "Yesterday" },
        { from: "You", text: "Almost done!", time: "Yesterday" },
      ],
    },
     {
      id: 3,
      name: "Alice",
      avatar: "https://i.pravatar.cc/100?img=1",
      online: true,
      messages: [
        { from: "Alice", text: "Hey! How are you?", time: "10:30 AM" },
        { from: "You", text: "I’m good! You?", time: "10:32 AM" },
        { from: "Alice", text: "I’m fine!", time: "10:30 AM" },
      ],
    },
  ]);

  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  // When selecting a new contact
  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  // When sending a message
  const handleSendMessage = (newMsg) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === selectedContact.id
          ? { ...c, messages: [...c.messages, newMsg] }
          : c
      )
    );

    // Update current view instantly
    setSelectedContact((prev) => ({
      ...prev,
      messages: [...prev.messages, newMsg],
    }));
  };

  return (
   

    <Container fluid className="chat-app-container p-0">
      <Row className="h-100 g-0">
        {/* Sidebar */}
        <Col xs={12} md={4} lg={3} className="sidebar-container p-0">
          <Sidebar
            contacts={contacts}
            selectedContact={selectedContact}
            onSelectContact={handleSelectContact}
          />
        </Col>

        {/* Chat Window */}
        <Col xs={12} md={8} lg={9} className="chatwindow-container p-0">
          <ChatWindow
            contact={selectedContact}
            messages={selectedContact.messages}
            onSendMessage={handleSendMessage}
          />
        </Col>
      </Row>
    </Container>

  );
};

export default ChatApp;
