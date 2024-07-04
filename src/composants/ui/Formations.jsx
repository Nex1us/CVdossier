import React, { useEffect, useState } from "react";

export default function Formations() {
  const [formation, setFormation] = useState([]);

  async function fetchFormation() {
    const response = await fetch("http://localhost:3333/formation");
    const data = await response.json();
    console.log(data);
    setFormation(data);
  }

  useEffect(() => {
    fetchFormation();
  }, []);
  return (
    <div>
      <h2>FORMATION</h2>
      <table>
        <tbody>
          {formation.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.location}</td>
              <td>{item.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
