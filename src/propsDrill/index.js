import React, { useState } from "react";

export function PropsDrill() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <h2>PROPS DRILL</h2>
      <hr />
      {!!user ? (
        <Main user={user} onBack={() => setUser(null)} />
      ) : (
        <Login onLogin={() => setUser("GI")} />
      )}
    </div>
  );
}

function Login({ onLogin }) {
  return (
    <div>
      <h3>Login</h3>
      <button className="button" type="button" onClick={onLogin}>
        Login!
      </button>
    </div>
  );
}

function Main({ user, onBack }) {
  return (
    <div>
      <h3>Main</h3>
      <button className="button" type="button" onClick={onBack}>
        ◀
      </button>
      <Header user={user} />
    </div>
  );
}

function Header({ user }) {
  return (
    <div>
      <h3>Header Component</h3>
      <Body user={user} />
    </div>
  );
}

function Body({ user }) {
  return (
    <div>
      <h3>Body</h3>
      <User user={user} />
    </div>
  );
}

function User({ user }) {
  return (
    <div>
      Eh Yo! This is <strong>{user}</strong>
    </div>
  );
}
