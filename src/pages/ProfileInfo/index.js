import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import UserRepos from './components/UserRepos';

import api from '../../services/api';

import './styles.css';

export default function ProfileInfo() {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        const username = localStorage.getItem('username');
        async function loadRepos() {
            const response = await api.get(`/${username}/repos`);

            setRepos(response.data);
        }

        loadRepos();
    }, [])

    return (
        <>
            <div className='user-repos'>
                <ul>
                    {repos.map(repo => (
                        <li key={repo.id}>
                            {repo.name}
                        </li>
                    ))}
                </ul>
            </div>
            <Link to='/'>
                <button>Back</button>
            </Link>
        </>
  );
}
