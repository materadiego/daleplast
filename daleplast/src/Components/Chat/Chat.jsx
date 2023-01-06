import React from "react";
import { useState } from "react";
import CloseChat from "../../utils/images/navbar-x.png";
const Chat = () => {
  const [closeChat, setCloseChat] = useState(false);
  const toggleCloseChat = () => {
    setCloseChat(!closeChat);
  };
  return (
    <div className={`Chat ${closeChat ? "chatIsActive" : ""}`}>
      <div className="Chat__Close" onClick={toggleCloseChat}>
        <img src={CloseChat} alt="close"></img>
      </div>
      <a
        style={{ textDecoration: "inherit" }}
        className="Chat__Link"
        href="https://wa.me/5492964503046"
        target="_blank"
        rel="noreferrer"
      >
        <p className="Chat__Link--Text">¡CONSULTANOS POR WHATSAPP!</p>
        <div className="Chat__Link--Image"></div>
      </a>
    </div>
  );
};

export default Chat;
