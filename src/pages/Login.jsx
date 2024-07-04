import React from "react";
export default function Login(
{  password,
  setPassword,
  username,
  setUsername,
  handleSubmit}
) {
  return (
    <div className="">
      <h2>Connection</h2>
      <form className="w-[400px] flex flex-col gap-2 " onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          placeholder="Saisir le nom de l'utilisateur"
          onChange={setUsername}
        />
        <input
          className="text-black"
          type="password"
          placeholder="Saisir le mot de passe"
          onChange={setPassword}
        />
        <button className="btn bg-teal-700 w-3/6 ml-24">Se connecter</button>
      </form>
    </div>
  );
}
