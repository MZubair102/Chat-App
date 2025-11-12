import React, { useRef, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import MessageInput from "./messageinput";

const ChatWindow = ({ contact, messages, onSendMessage }) => {
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!text.trim()) return;
    const msg = {
      from: "You",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    onSendMessage(msg);
    setText("");
  };

  return (
    <div className="chat-window d-flex flex-column h-100">
      <div className="chat-header d-flex align-items-center p-3 border-bottom bg-white shadow-sm">
        <Image
          src={contact.avatar}
          roundedCircle
          width={45}
          height={45}
          className="me-2"
        />
        <div>
          <h6 className="mb-0 fw-bold">{contact.name}</h6>
          <small className={contact.online ? "text-success" : "text-muted"}>
            {contact.online ? "Online" : "Offline"}
          </small>
        </div>
      </div>

      <div className="chat-body flex-grow-1 p-3 overflow-auto bg-light">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`d-flex mb-3 ${
              m.from === "You" ? "justify-content-end" : "justify-content-start"
            }`}
          >
            <div
              className={`message-bubble p-2 rounded-4 shadow-sm ${
                m.from === "You"
                  ? "bg-primary text-white"
                  : "bg-white border"
              }`}
            >
              <div>{m.text}</div>
              <small className="text-muted d-block text-end mt-1">
                {m.time}
              </small>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <MessageInput value={text} onChange={setText} onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
