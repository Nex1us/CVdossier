import React, { useEffect, useState } from "react";

export default function Langue() {
  const [langues, setLangues] = useState([]);
  async function fetchLangue() {
    const response = await fetch("http://localhost:3333/langue");
    const data = await response.json();
    console.log(data);
    setLangues(data);
  }

  useEffect(() => {
    fetchLangue();
  }, []);
  return (
    <div>
      <h2 className="bg-green-400 rounded-xl">LANGUE</h2>
      <table>
        <tbody>
          {langues.map((item, index) => (
            <tr className="flex space-x-4" key={index.id}>
              <td>{item.name}</td>
              <td>{item.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


