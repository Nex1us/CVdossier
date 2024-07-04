import React, { useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

export default function NewLoisir() {
    const [loisir, setLoisir] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  function handleSave() {
    if (loisir !== "") {
      fetch(`http://localhost:3333/loisir/`, {
        method: `POST`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loisir }),
      }).then((res) => {
        res.json();
      });
    }
  }

  function handleCancel() {
    setIsAdd(false);
  }
  return (
    <div>
      {isAdd && (
        <div className="flex justify-between">
          <input
            className="text-black"
            placeholder="ajouter une nouvelle compétence"
            type="text"
            onChange={(e) => setLoisir(e.target.value)}
          />
          <button onClick={handleSave}>
            <FaRegSave size={24} color="lightblue" />
          </button>

          <button onClick={handleCancel}>
            <FcCancel size={24} color="red" />
          </button>
        </div>
      )}
    </div>
  );
}
