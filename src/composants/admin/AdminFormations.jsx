import React, { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { MdDelete } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

export default function AdminFormations() {
  const [formation, setFormation] = useState([]);
  const [year, setYear] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  async function fetchFormation() {
    const response = await fetch("http:/localhost:3333/formation");
    const data = await response.json();
    console.log(data);
    setFormation(data);
  }
  useEffect(() => {
    fetchFormation();
  }, []);
  async function handleDelete(id) {
    console.log(id);
    const response = await fetch(`http://localhost:3333/formation/${id}`, {
      method: `DELETE`,
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      enqueueSnackbar("La formation à été supprimé", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
      });
      fetchFormation();
    }
  }
  async function handleSave() {
    if (year !== "") {
      const response = await fetch(`http://localhost:3333/formation`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ year }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        enqueueSnackbar("la formation a été ajouté ", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            horizontal: "left",
            vertical: "top",
          },
        });
        fetchFormation();
        setYear("");
      }
    }
    if (location !== "") {
        const response = await fetch(`http://localhost:3333/formation`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ location }),
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log(data);

            fetchFormation();
            setLocation("");
          }
    }
    if (experience !== "") {
        const response = await fetch(`http://localhost:3333/formation`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ experience }),
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log(data);

            fetchFormation();
            setExperience("");
          }
    }
  }
  function addSkill() {
    setIsAdd(true);
  }
  function handleCancel() {
    setIsAdd(false);
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
            placeholder="ajouter la durée de la formation"
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            className="text-black"
            placeholder="ajouter un lieu"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            className="text-black"
            placeholder="ajouter un diplôme ou équivalent"
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
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
          {formation.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.location}</td>
              <td>{item.experience}</td>
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
