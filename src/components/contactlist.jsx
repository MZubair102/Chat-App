import React from "react";
import { Image, Badge } from "react-bootstrap";

const ContactList = ({ contact, active, onSelect }) => {
  const lastMessage =
    contact.messages && contact.messages.length > 0
      ? contact.messages[contact.messages.length - 1]
      : null;

  return (
    <div
      onClick={onSelect}
      className={`contact-item d-flex align-items-center justify-content-between px-3 py-2 ${
        active ? "active" : ""
      }`}
      style={{ cursor: "pointer", transition: "background 0.2s ease" }}
    >
      {/* Avatar + Name + Status */}
      <div className="d-flex align-items-center w-100">
        <div className="position-relative me-3">
          <Image
            src={contact.avatar}
            roundedCircle
            width={50}
            height={50}
            className="shadow-sm border"
          />
          <span
            className={`status-dot position-absolute bottom-0 end-0 rounded-circle ${
              contact.online ? "bg-success" : "bg-secondary"
            }`}
            style={{
              width: "12px",
              height: "12px",
              border: "2px solid #fff",
            }}
          ></span>
        </div>

        <div className="flex-grow-1 overflow-hidden">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-semibold text-truncate">{contact.name}</div>
            {lastMessage && (
              <small className="text-muted ms-2 flex-shrink-0">
                {lastMessage.time}
              </small>
            )}
          </div>

          {/* Last message preview */}
          <div className="text-muted small text-truncate" style={{ maxWidth: "180px" }}>
            {lastMessage ? lastMessage.text : "No messages yet"}
          </div>
        </div>

        {/* Unread badge */}
        {contact.unread > 0 && (
          <Badge bg="primary" pill className="ms-2 flex-shrink-0">
            {contact.unread}
          </Badge>
        )}
      </div>
    </div>
  );
};

export default ContactList;
