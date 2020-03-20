import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function ProfileInfo() {
    const [userName, setUserName] = useState([]);
    const [avatar, setAvatar] = useState([]);
    const [bio, setBio] = useState([]);
    const [location, setLocation] = useState([]);

    const [repos, setRepos] = useState([]);

    const validUsername = localStorage.getItem('username');

    useEffect(() => {
        async function loadUserInfo() {
            const response = await api.get(`/${validUsername}`);

            setUserName(response.data.name);
            setAvatar(response.data.avatar_url);
            setBio(response.data.bio);
            setLocation(response.data.location);
        }

        loadUserInfo();
    }, [validUsername])
    
    useEffect(() => {
        async function loadRepos() {
            const response = await api.get(`/${validUsername}/repos`);

            setRepos(response.data);
        }

        loadRepos();
    }, [validUsername])

    return (
        <div className='main-container'>
            <div className='user-info'>
                <img src={avatar} alt='avatar' height='50' width='50' className='img'/>
                <span className='username'>{userName}</span>
                <span className='bio'>{bio}</span>
                <span className='location'>{location}</span>
                <Link to='/'>
                    <button className='back-btn'>Search Another Profile</button>
                </Link>
            </div>
            <div className='user-repos'>
                <ul className='repo-list'>
                    {repos.map(repo => (
                        <li key={repo.id} className='repo-item'>
                            {repo.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  );
}
