/*
  Example of DataBase

  {
    user: {
      balance: 1000,
      name: 'Vasyl',
      lastName: 'Test'
    }
  }

*/

const host = '192.168.0.106';

export function getDataBase() {
  let result = fetch(`http://${host}:3110/user`, {})
    .then(response => {
      return response.json()
    });
  return result;
}

export function saveDataBase(user) {
  return fetch(`http://${host}:3110/user`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  });
}

export function getCreditData() {
  let result = fetch(`http://${host}:3110/credit-card`, {})
    .then(response => {
      return response.json()
    });
  return result;
}

export function saveCreditData(creditData) {
  return fetch(`http://${host}:3110/credit-card`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(creditData)
  });
}


export function createMusicAlbum(musicAlbum) {
  return fetch(`http://${host}:3110/music-albums`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(musicAlbum)
  }).then(resp => resp.json());
}

export function getMusicAlbum() {
  let result = fetch(`http://${host}:3110/music-albums`)
    .then(response => {
      return response.json()
    });
  return result;
}

export function saveMusicAlbum(musicAlbum) {
  const {id, title} = musicAlbum || {};
  return fetch(`http://${host}:3110/music-albums/` + id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: title
    })
  });
}


export function deleteMusicAlbum(id) {
  const result = id ? fetch(`http://${host}:3110/music-albums/` + id, {
    method: 'DELETE'
  }) : Promise.resolve();
  return result;
}
