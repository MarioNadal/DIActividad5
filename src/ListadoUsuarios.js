import { useState, useEffect } from 'react';

const url = "http://localhost:5000/users";

async function fetchUsuarios(url){
    const response = await fetch(url);
    const listadoUsuarios = await response.json();
    return listadoUsuarios;
}

function ListadoUsuarios(){
    const [loadedUsuarios, setLoadedUsuarios] = useState([]);

    useEffect(function () {
        fetchUsuarios(url).then((fetchedUsuarios) => setLoadedUsuarios(fetchedUsuarios));
    },)

    return(
        <div>
            {loadedUsuarios.map((usuario) =>(
                <p>{usuario.username}</p>
            ))}
            {loadedUsuarios.map((usuario) =>(
                <ul key={usuario.id}>
                    <li>{usuario.name}</li>
                    <li>{usuario.phone}</li>
                    <li>{usuario.email}</li>
                </ul>
            ))}
        </div>
    );
}

export default ListadoUsuarios;