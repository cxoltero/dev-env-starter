import './index.css';
import {getUsers, deleteUser} from './api/userApi';

getUsers()
  .then(res => {
    if (res && Array.isArray(res)) {
      const users = res;
      const deleteLinks = global.document.getElementsByClassName('deleteUser');
      global.document.getElementById('users').innerHTML = populateTable(users);
      addDelMethodToItem(deleteLinks);
    }
  });

function populateTable(users){
  let tableBody = '';

  users.map(user => {
    tableBody += `
        <tr>
          <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
          <td>${user.id}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.email}</td>
        </tr>
      `
  });

  return tableBody;
}

function addDelMethodToItem(itemsArray) {
  Array.from(itemsArray, link => {
    link.onclick = function(e) {
      e.preventDefault();
      const element = e.target;
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
}
