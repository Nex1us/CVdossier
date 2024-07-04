import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { enqueueSnackbar } from "notistack";

const url = "http://localhost:3333";

export default function AdminLoisir() {
  const [hobby, setHobby] = useState([]);
  const [loisir, setLoisir] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  async function fetchLoisir() {
    const response = await fetch("http://localhost:3333/loisir");
    const data = await response.json();
    setHobby(data);
  }

  useEffect(() => {
    fetchLoisir();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    const response = await fetch(`http://localhost:3333/loisir/${id}`, {
      method: `DELETE`,
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      enqueueSnackbar("une compétence à été supprimé", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
      });
      fetchLoisir();
    }
  }
  async function handleSave() {
    if (hobby !== "") {
      const response = await fetch(`${url}/loisir`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ hobby}),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        enqueueSnackbar("une compétence a été ajouté", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            horizontal: "left",
            vertical: "top",
          },
        });
        fetchLoisir();
        setLoisir("");
      }
    }
  }

  function addSkill() {
    setIsAdd(true);
  }
  function handleCancel() {
    setIsAdd(false);
    setLoisir('')
  }
  return (
    <div>
      <button onClick={addSkill} className="btn btn-success btn-sm ">
        <FaPlusSquare size={24} color="white" />
      </button>
      {isAdd === true && (
        <div className="flex justify-between">
          <input
            className="text-black"
            placeholder="ajouter une nouvelle compétence"
            type="text"
            value={loisir}
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
      {hobby.map((item) => (
        <div className="flex justify-between items-center">
          <p>{item.loisir}</p>

          <button
            onClick={() => {
              handleDelete(item._id);
            }}
            className="btn border-t-neutral-700"
          >
            <MdDelete size={24} color="red" />
          </button>
        </div>
      ))}
    </div>
  );
}
