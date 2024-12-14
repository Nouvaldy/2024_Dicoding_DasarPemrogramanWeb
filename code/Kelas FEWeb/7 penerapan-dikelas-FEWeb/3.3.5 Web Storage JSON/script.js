const storageKey = 'STORAGE_KEY';
const submitAction = document.getElementById('form-data-user');

function checkForStorage() {
    return typeof (Storage) !== 'undefined';
}

function putUserList(data) {
    if (checkForStorage()) {
      let userData = [];
      if (localStorage.getItem(storageKey) !== null) {
        userData = JSON.parse(localStorage.getItem(storageKey)); //Baca userData yang sudah ada di Web Storage
      }
      userData.unshift(data); //Menambahakan elemen di awal Objek
      if (userData.length > 5) { //Menghapus elemen terakhir jika sudah >5
        userData.pop();
      }
      localStorage.setItem(storageKey, JSON.stringify(userData));
    }
}

function getUserList() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } else {
    return [];
  }
}

function renderUserList() {
  const userData = getUserList();
  const userList = document.querySelector('#user-list-detail'); //tbody Element
  userList.innerHTML = '';
  for (let user of userData) {
    let row = document.createElement('tr');
    row.innerHTML = '<td>' + user.nama + '</td>';
    row.innerHTML += '<td>' + user.umur + '</td>';
    row.innerHTML += '<td>' + user.domisili + '</td>';
    userList.appendChild(row);
  }
} 

submitAction.addEventListener('submit', function (event) {
  const inputNama = document.getElementById('nama').value;
  const inputUmur = document.getElementById('umur').value;
  const inputDomisili = document.getElementById('domisili').value;
  const newUserData = {
    nama: inputNama,
    umur: inputUmur,
    domisili: inputDomisili,
  }
  putUserList(newUserData);
  renderUserList();
});

//Ketika webpage kembali dibuka tabel User List akan otomatis terisi data terakhir
window.addEventListener('load', function () {
  if (checkForStorage) {
    if (localStorage.getItem(storageKey) !== null) {
      renderUserList();
    }
  } else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage');
  }
});