import React, { useState } from "react";

export function Composition() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <h2>COMPOSITION</h2>
      <hr />
      {!!user ? (
        <Main onBack={() => setUser(null)}>
          <Header />
          <Body>
            <User user={user} />
          </Body>
          <LG>
            <User user={user} />
          </LG>
        </Main>
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

function Main({ onBack, children }) {
  return (
    <div>
      <h3>Main</h3>
      <button className="button" type="button" onClick={onBack}>
        ◀
      </button>
      {children}
    </div>
  );
}

function Header() {
  return (
    <div>
      <h3>Header Component</h3>
    </div>
  );
}

function Body({ children }) {
  return (
    <div>
      <h3>Body Component</h3>
      {children}
    </div>
  );
}

export function LG({ children }) {
  return (
    <div>
      <hr />
      <h3>LG Component</h3>
      {children}
      <hr />
    </div>
  );
}

function User({ user }) {
  return (
    <div>
      Eh Yo! This is <strong className="name">{user}</strong>
    </div>
  );
}
