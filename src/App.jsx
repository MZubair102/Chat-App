// App.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ChatSidebar from './components/chatsidebar';
import ChatArea from './components/chatarea';
import ChatHeader from './components/chatheader';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data
  const [chats, setChats] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: 'JD',
      lastMessage: 'Hey, how are you doing?',
      time: '10:30 AM',
      unread: 2,
      online: true,
      messages: [
        { id: 1, text: 'Hello there!', sender: 'them', time: '10:25 AM' },
        { id: 2, text: 'Hey, how are you doing?', sender: 'them', time: '10:30 AM' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'JS',
      lastMessage: 'Meeting at 3 PM tomorrow',
      time: 'Yesterday',
      unread: 0,
      online: false,
      messages: [
        { id: 1, text: 'Don\'t forget about our meeting', sender: 'them', time: 'Yesterday' }
      ]
    },
    {
      id: 3,
      name: 'Team Collaboration',
      avatar: 'TC',
      lastMessage: 'Sarah: Project update ready',
      time: '2 hours ago',
      unread: 5,
      online: true,
      isGroup: true,
      messages: [
        { id: 1, text: 'Project deadline has been moved', sender: 'sarah', time: '2 hours ago' }
      ]
    },
    {
      id: 4,
      name: 'Mike Johnson',
      avatar: 'MJ',
      lastMessage: 'Thanks for the help!',
      time: '5 min ago',
      unread: 1,
      online: true,
      messages: [
        { id: 1, text: 'I need some help with the project', sender: 'them', time: 'Yesterday' },
        { id: 2, text: 'Thanks for the help!', sender: 'them', time: '5 min ago' }
      ]
    }
  ]);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    // Mark as read
    setChats(prev => prev.map(c => 
      c.id === chat.id ? { ...c, unread: 0 } : c
    ));
  };

  const handleSendMessage = (messageText) => {
    if (!selectedChat || !messageText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedChats = chats.map(chat => 
      chat.id === selectedChat.id 
        ? {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: messageText,
            time: newMessage.time
          }
        : chat
    );

    setChats(updatedChats);
    setSelectedChat(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  return (
    <div className="chat-app">
      <ChatHeader 
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <Container fluid className="chat-container">
        <Row className="h-100">
          {sidebarOpen && (
            <Col md={4} lg={3} className="sidebar-col">
              <ChatSidebar
                chats={chats}
                selectedChat={selectedChat}
                onSelectChat={handleSelectChat}
                onSearch={(term) => console.log('Search:', term)}
              />
            </Col>
          )}
          
          <Col md={sidebarOpen ? 8 : 12} lg={sidebarOpen ? 9 : 12}>
            <ChatArea
              chat={selectedChat}
              onSendMessage={handleSendMessage}
              onBack={() => setSelectedChat(null)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;



// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import TopBar from "./components/topbar";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const user = { name: "Zubair", avatar: "/images/user.png" };
//   return (
//     <TopBar user={user}/>
//     // <Container fluid className="vh-100 d-flex flex-column m-0">
//     //   <Row className="bg-primary text-white m-0">
//     //     <Col className="py-3 px-4">
        

//     //       {/* <div className="d-flex justify-content-start align-items-center">
//     //         <h4 className="mb-0">Chat Application</h4>
//     //       </div> */}
//     //     </Col>
//     //   </Row>

//     //   <Row className="flex-grow-1 m-0 overflow-hiddden">
//     //       <Col xs={12} md={4} lg={3} className="p-0 h-100 d-none d-md-block">
//     //       <div className="d-flex justify-content-start align-items-center">
//     //         <h4 className="mb-0">Chat User</h4>
//     //       </div>
//     //       </Col>

//     //       <Col xs={12} md={8} lg={9} className="p-0 h-100 d-flex flex-columnd">
//     //       <div className="d-flex justify-content-start ">
//     //         <h4 className="mb-0">Chat Area</h4>
//     //       </div>
//     //       </Col>

//     //     </Row>
//     // </Container>
//   );
// }

// export default App;
