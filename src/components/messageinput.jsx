import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const MessageInput = ({ value, onChange, onSend }) => (
  <div className="chat-input p-3 border-top bg-white">
    <InputGroup>
      <Form.Control
        placeholder="Type a message..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        className="rounded-pill"
      />
      <Button
        variant="primary"
        onClick={onSend}
        className="rounded-pill px-4 ms-2"
      >
        Send 💬
      </Button>
    </InputGroup>
  </div>
);

export default MessageInput;
