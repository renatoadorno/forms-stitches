import React from 'react'
import './Form.css';

export default function Login2() {
  return (
    <form>
      <label htmlFor="name">Nome:</label><br />
      <input type="text" name="name" /><br />
      <label htmlFor="email">Email:</label><br />
      <input type="email" name="email" /><br />
    </form>
  )
}
