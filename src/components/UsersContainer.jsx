import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { getUsers } from './api/request.js'

export const UsersContainer = () => {
  const [users, setUsers] = useState([])

  useEffect(() => { getUsers().then((response) => setUsers(response)) }, [])

  return (
    <div>
      <h1>User Listing</h1>
      <div className='d-flex flex-wrap'>
        {users.map((user) => {
          return (
            <Card className='user-card' key={user.id}>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  {user.age}
                  {user.location_history.longitude}, {user.location_history.latitude} <br />
                  <br />{user.email}
                  <br />{user.gender}
                </Card.Text>
                <Link to={'/users/' + user.id}>Inventory</Link>
              </Card.Body>
            </Card>
          )
        })}
      </div>

    </div>
  )
}

export default UsersContainer
