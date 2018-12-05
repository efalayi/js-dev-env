/* eslint-disable no-console */
import { getRequest } from './api/request'
import './scss/index.scss'

const usersTableBody = document.getElementById('users')

const updateUsersTableBody = (users) => {
  const usersTableCellData = users.map(user => `
      <tr>
        <td></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `)
  usersTableBody.innerHTML = usersTableCellData.join('')
}

getRequest('/api/v1/users').then((response) => {
  updateUsersTableBody(response)
}).catch((error) => {
  console.log('error occured: ', error)
})
