import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

export default function AdminLangue() {
  const [langue, setLangue] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  async function fetchLangue() {
    const response = await fetch(`http://localhost:3333/langue`);
    const data = await response.json();
    setLangue(data);
    console.log(data);
  }
  useEffect(() => {
    fetchLangue();
  }, []);

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:3333/langue/${id}`, {
      method: `DELETE`,
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      fetchLangue();
    }
  }
  async function handleSave() {
    console.log(name, level);
    if (name !== "" && level !== "") {
      const response = await fetch(`http://localhost:3333/langue`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, level }),
      });
      if (response.ok) {
        const data = await response.json();
        fetchLangue();
        console.log(data);
        setName("");
        setLevel("");
      }
    }
  }
  function addLangue() {
    setIsAdd(true);
  }
  function handleCancel() {
    setIsAdd(false);
    
  }

  return (
    <div>
      <button onClick={addLangue} className="btn btn-success btn-sm ">
        <FaPlusSquare size={24} color="white" />
      </button>

      {isAdd && (
        <div className="flex justify-between">
          <input
            className="text-black"
            placeholder="ajouter une  langue"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <select
            className="text-black bg-white"
            name=""
            id=""
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          >
            <option selected hidden value="">
              Choisir le niveau
            </option>
            <option className="text-black" value="Débutant">
              Débutant
            </option>
            <option className="text-black" value="Intermédiaire">
              Intermédiaire
            </option>
            <option className="text-black" value="Avancé">
              Avancé
            </option>
            <option className="text-black" value="Maternelle">
              Maternelle
            </option>
          </select>
          <button onClick={handleSave}>
            <FaRegSave size={24} color="lightblue" />
          </button>

          <button onClick={handleCancel}>
            <FcCancel size={24} color="red" />
          </button>
        </div>
      )}
      <table>
        <tbody>
          {langue.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.level}</td>
              <td>
              <button
            onClick={() => {
              handleDelete(item._id);
            }}
            className="btn border-t-neutral-700"
          >
            <MdDelete size={24} color="red" />
          </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
