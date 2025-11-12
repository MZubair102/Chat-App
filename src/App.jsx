import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatApp from "./components/chatapp";

function App() {
  return <ChatApp />;
}

export default App;

// App.js;
// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

// import ChatSidebar from "./components/components2/chatsidebar";
// import ChatArea from "./components/components2/chatarea";
// import ChatHeader from "./components/components2/chatheader";

// function App() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   // Sample data
//   const [chats, setChats] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       avatar: "JD",
//       lastMessage: "Hey, how are you doing?",
//       time: "10:30 AM",
//       unread: 2,
//       online: true,
//       messages: [
//         { id: 1, text: "Hello there!", sender: "them", time: "10:25 AM" },
//         {
//           id: 2,
//           text: "Hey, how are you doing?",
//           sender: "them",
//           time: "10:30 AM",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       avatar: "JS",
//       lastMessage: "Meeting at 3 PM tomorrow",
//       time: "Yesterday",
//       unread: 0,
//       online: false,
//       messages: [
//         {
//           id: 1,
//           text: "Don't forget about our meeting",
//           sender: "them",
//           time: "Yesterday",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Team Collaboration",
//       avatar: "TC",
//       lastMessage: "Sarah: Project update ready",
//       time: "2 hours ago",
//       unread: 5,
//       online: true,
//       isGroup: true,
//       messages: [
//         {
//           id: 1,
//           text: "Project deadline has been moved",
//           sender: "sarah",
//           time: "2 hours ago",
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: "Mike Johnson",
//       avatar: "MJ",
//       lastMessage: "Thanks for the help!",
//       time: "5 min ago",
//       unread: 1,
//       online: true,
//       messages: [
//         {
//           id: 1,
//           text: "I need some help with the project",
//           sender: "them",
//           time: "Yesterday",
//         },
//         {
//           id: 2,
//           text: "Thanks for the help!",
//           sender: "them",
//           time: "5 min ago",
//         },
//       ],
//     },
//   ]);

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     // Mark as read
//     setChats((prev) =>
//       prev.map((c) => (c.id === chat.id ? { ...c, unread: 0 } : c))
//     );
//   };

//   const handleSendMessage = (messageText) => {
//     if (!selectedChat || !messageText.trim()) return;

//     const newMessage = {
//       id: Date.now(),
//       text: messageText,
//       sender: "me",
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? {
//             ...chat,
//             messages: [...chat.messages, newMessage],
//             lastMessage: messageText,
//             time: newMessage.time,
//           }
//         : chat
//     );

//     setChats(updatedChats);
//     setSelectedChat((prev) => ({
//       ...prev,
//       messages: [...prev.messages, newMessage],
//     }));
//   };

//   return (
//     <div className="chat-app">
//       <ChatHeader
//         sidebarOpen={sidebarOpen}
//         onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//       />
//       <Container fluid className="chat-app-container p-0">
//       <Row className="h-100 g-0">
//         {/* Sidebar */}
//         {sidebarOpen && (
//         <Col xs={12} md={4} lg={3} className="sidebar-container p-0">
//           <ChatSidebar
//                 chats={chats}
//                 selectedChat={selectedChat}
//                 onSelectChat={handleSelectChat}
//                 onSearch={(term) => console.log("Search:", term)}
//               />
//         </Col>
//         )}
//         {/* Chat Window */}
//         <Col xs={12} md={8} lg={9} className="chatwindow-container p-0">
//           <ChatArea
//               chat={selectedChat}
//               onSendMessage={handleSendMessage}
//               onBack={() => setSidebarOpen(true)}
//             />
//         </Col>
//       </Row>
//     </Container>
//     </div>
//   );
// }

// export default App;
