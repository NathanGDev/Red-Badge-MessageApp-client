import React from "react";
import MessageList from "./messages/MessageList";
import "./Home.css";

const Home = (props: any) => {
  return (
    <div className="chatBox-main">
      <h1 className="home-h1">Home page</h1>
      <div className="chatBox">
        <MessageList />
      </div>
    </div>
  );
};

export default Home;
