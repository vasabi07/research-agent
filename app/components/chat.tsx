"use client"
import React, { useState } from "react";

const Chat = () => {
  const [query, setQuery] = useState("");
  return (
    <div >
      <input
      className="w-full p-4 bg-gray-100"
        name="query"
        value={query}
        type="text"
        placeholder="Enter your question here"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Chat;
