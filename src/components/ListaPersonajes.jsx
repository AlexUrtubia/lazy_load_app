import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ListaPersonajes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const localStorageTodos = localStorage.getItem("V1");
    if (localStorageTodos) {
      setData(JSON.parse(localStorageTodos));
    } else {
      fetch("https://randomuser.me/api/?results=5")
        .then((response) => response.json())
        .then((data) =>
          localStorage.setItem("V1", JSON.stringify(data.results))
        )
        .then(() => {
          setData(JSON.parse(localStorage.getItem("V1")));
        });
    }
  }, []);

  console.log(data);

  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flex text-center justify-center mb-4 relative">
          <h2 className="text-2xl font-bold">Lista de personajes</h2>
        </div>
        <hr />
      </div>
      <div className="mt-8 space-y-5">
        {data.map((per) => (
          <li
            className="text-xl w-full justify-center flex border-slate-300 rounded-2xl relative	"
            key={per.id.value}
          >
            <Link to={`personaje/${per.login.md5}`}>
              {per.name.first} {per.name.last}
            </Link>
          </li>
        ))}
      </div>
    </>
  );
}
