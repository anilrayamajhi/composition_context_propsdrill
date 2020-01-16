import React, { useState, useContext, createContext } from "react";

const UserContext = createContext();
const useUser = () => useContext(UserContext);

export function Context() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider
      value={{
        user,
        onBack: () => setUser(null),
        onLogin: () => setUser("GI")
      }}
    >
      <h2>CONTEXT</h2>
      <hr />
      {!!user ? <Main /> : <Login />}
    </UserContext.Provider>
  );
}

function Login() {
  const { onLogin } = useUser();
  return (
    <div>
      <h3>Login</h3>
      <button className="button" type="button" onClick={onLogin}>
        Login!
      </button>
    </div>
  );
}

function Main() {
  const { onBack } = useUser();
  return (
    <div>
      <h3>Main</h3>
      <button className="button" type="button" onClick={onBack}>
        ◀
      </button>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h3>Header Component</h3>
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div>
      <h3>Body</h3>
      <User />
    </div>
  );
}

function User() {
  const { user } = useUser();
  return (
    <div>
      Eh Yo! This is <strong>{user}</strong>
    </div>
  );
}
