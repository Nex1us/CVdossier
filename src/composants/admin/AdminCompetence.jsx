import { MdDelete } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { enqueueSnackbar } from "notistack";




const url = "http://localhost:3333";

export default function AdminCompetence() {
  const [competence, setCompetence] = useState([]);
  const [skill, setSkill] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  async function fetchCompetence() {
    const response = await fetch("http://localhost:3333/competence");
    const data = await response.json();
    setCompetence(data);
    console.log(data);
  }

  useEffect(() => {
    fetchCompetence();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    const response = await fetch(`http://localhost:3333/competence/${id}`, {
      method: `DELETE`,
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      enqueueSnackbar("une compétence à été supprimé", {
        variant:'error',
        autoHideDuration:2000,
        anchorOrigin:{
          horizontal:"right",
          vertical:'top'
        }
      })

      fetchCompetence();
    }
  }
  async function handleSave() {
    if (skill !== "") {
      const response = await fetch(`${url}/competence`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ skill }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        enqueueSnackbar("une compétence a été ajouté" ,{
          variant:"success",
          autoHideDuration:2000,
          anchorOrigin:{
            horizontal:"left",
            vertical:'top'
          }
        })
        fetchCompetence();
        setSkill("");
      }
    } else alert("Skill empty");
  }
  function addSkill() {
    setIsAdd(true);
  }
  function handleCancel() {
    setIsAdd(false);
    setSkill("");
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
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />

          <button onClick={handleSave}>
            <FaRegSave size={24} color="lightblue" />
          </button>

          <button onClick={handleCancel}>
            <FcCancel size={24} color="red" />
          </button>
        </div>
      )}

      {competence.map((item) => (
        <div className="flex justify-between items-center">
          <p>{item.skill}</p>

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
