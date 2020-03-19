import React from 'react';

import api from '../../../services/api'

const UserRepos = async (props) => {
    let response = await api.get(`/${props.username}/repos`);
    let repos = response.data;
    return (
        repos.map(repo => (
            <ul>
                <li key={repo.id}>{repo.name}</li>
            </ul>
        ))
    )   
}

export default UserRepos;