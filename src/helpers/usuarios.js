//VER COMO NOMRARON VARIABLES LOS CHICOS Y MODIFICAR
// const url = "http://localhost:8080"; AQUI VA NUESTRO URL

export const getUsuarios = async (desde) => {
  const resp = await fetch(`${url}/api/usuarios?desde=${desde}`, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const datos = await resp.json();

  return datos;
};

//GET con id:
export const getUsuarioId = async (id) => {
  const resp = await fetch(`${url}/api/usuarios/${id}`, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const datos = await resp.json();

  return datos;
};

//POST de usuarios - Para crear:
export const postUsuario = async (data) => {
  const resp = await fetch(`${url}/api/usuarios`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("auth")).token,
    },
  });
  const datos = await resp.json();

  return datos;
};

//PUT de usuarios - Para actulizar:
export const putUsuario = async (id, data) => {
  const resp = await fetch(`${url}/api/usuarios/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("auth")).token,
    },
  });
  const datos = await resp.json();

  return datos;
};

export const deleteUsuario = async (id) => {
  const resp = await fetch(`${url}/api/usuarios/${id}`, {
    method: "DELETE",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("auth")).token,
    },
  });
  const datos = await resp.json();

  return datos;
};

