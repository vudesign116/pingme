import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <ChatPage />
    </div>
  );
}

function LoginPage() {
  return (
    <div className="login">
      <img src="/logo.png" alt="Logo" />
      <input type="text" placeholder="Mã nhân viên" />
      <input type="password" placeholder="Mật khẩu" />
      <button>Login</button>
      <a href="#">Quên mật khẩu</a>
    </div>
  );
}

function ChatPage() {
  return (
    <div className="chat">
      <div className="chat-box"></div>
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </div>
  );
}

export default App;