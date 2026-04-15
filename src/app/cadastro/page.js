"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        full_name,
        username,
        email,
        password
      })
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      alert("Cadastro realizado!");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="principal-login">
      <header className="header">
        <div className="logo-container">
          <Link href="/">
            <img src="/logo3.0.png" className="logo"/>
          </Link>
        </div>
        <div className="buttons-container">
          <Link href="/login">
            <button className="login">Entrar</button>
          </Link>
        </div>
      </header>

      <main className="container-principal"> 
        <div className="container-login">
          <h2><span className="destaque-chic">Bem-vindo ao WishLy!</span></h2>
          <h3>Faça seu cadastro para começar a favoritar seus filmes preferidos!</h3>

          <input
            type="text"
            placeholder="Nome Completo"
            className="input-login"
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            className="input-login"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            className="input-login"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className="input-login"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="botao-login" onClick={handleRegister}>
            Cadastrar
          </button>
        </div>
      </main>
    </div>
  );
}