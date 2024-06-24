import React from 'react'

const UserCard = ({el}) => {
  return (
    <div className="card"> 
      <h1>name:{el.name}</h1>
      <h1>email:{el.email}</h1>
      <h1>phone number{el.phone}</h1>
    </div>
  )
}

export default UserCard
