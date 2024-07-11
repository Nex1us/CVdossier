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
      <h2 className="bg-green-400 rounded-xl">FORMATION</h2>
      <table className="">
        <tbody>
          {formation.map((item, index) => (
            <tr key={index} className="">
              <td className="w-1/6">{item.year}</td>
              <td className="w-2/6">{item.location}</td>
              <td className="w-2/6">{item.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
