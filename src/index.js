import './index.css';
import {getUsers} from './api/userApi';

getUsers()
  .then(res => {
    const users = res;
    let userTableBody = '';

    users.map(user => {
      userTableBody += `
        <tr>
          <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
          <td>${user.id}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.email}</td>
        </tr>
      `
    });
    const table = global.document.getElementById('users');
    table.innerHTML = userTableBody;
  });
