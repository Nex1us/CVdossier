import { useState, useEffect } from "react";
import React from "react";
import Profile from "./Profile";



export default function Contact() {
  const [contact, setContact] = useState([]);
  async function getContact() {
    const response = await fetch("http://localhost:3333/contact");
    const data = await response.json();
    console.log(data[0]);
    setContact(data);
    console.log(contact);
  }

  useEffect(() => {
    getContact();
  }, []);
  
  return (
    <div>
      {contact.length > 0 && (
        <div className="flex flex-col ml-8 justify-center ">
          <Profile nom={contact[0].nom} prenom={contact[0].prenom} />
          <h2 className="bg-green-950 rounded-xl">Contact</h2>
          <table>
            <tr>
              <th> tel</th>
              <td>{contact[0].tel}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{ contact[0].email }</td>
            </tr>
          </table>
          <p>Jeune étudiant à la recherche d'une alternance pour le poste de développeur web.</p>
        </div>
      )}
    </div>
  );
}
