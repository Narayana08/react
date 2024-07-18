// src/GithubUser.js

import React, { useState, useEffect } from 'react';

const User = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/narayana08');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="150" />
          <p>Name: {userData.name}</p>
          <p>Bio: {userData.bio}</p>
          <p>Location: {userData.location}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      )}
    </div>
  );
};

export default User;