import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css';

export default function ProfileSearch({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await api.get(`/${username}`)
      .then((response) => {
        if(response) {
          localStorage.setItem('username', username);
          history.push('/profileInfo');
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }


  return (
    <div className='search-container'>
      <h1 className='title'>Github Search</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Search for Github Profile
        </label>
        <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter a Github username...'/>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}
