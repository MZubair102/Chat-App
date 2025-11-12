import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ContactList from "./contactlist";

const Sidebar = ({ contacts, selectedContact, onSelectContact }) => {
  const [search, setSearch] = useState("");

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sidebar h-100 d-flex flex-column">
      <div className="p-3 border-bottom">
        <h4 className="fw-bold mb-3 text-primary">Chats</h4>
        <Form.Control
          type="text"
          placeholder="🔍 Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-pill"
        />
      </div>

      <div className="contacts flex-grow-1 overflow-auto">
        {filtered.map((contact) => (
          <ContactList
            key={contact.id}
            contact={contact}
            active={selectedContact.id === contact.id}
            onSelect={() => onSelectContact(contact)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
