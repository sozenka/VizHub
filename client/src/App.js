import axios from 'axios';
import {
    ArcElement,
    Chart as ChartJS,
    Legend,
    Tooltip
} from 'chart.js';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import './App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setError(null);
    try {
      const profileData = await axios.get(`/api/profile/${username}`);
      setProfile(profileData.data);

      const reposData = await axios.get(`/api/repos/${username}`);
      setRepos(reposData.data);
    } catch (error) {
      setError('Error fetching data. Please try again.');
      console.error('Error fetching data', error);
    }
  };

  const languageData = {
    labels: repos.map(repo => repo.language).filter(Boolean),
    datasets: [{
      label: 'Languages Used',
      data: repos.map(repo => repo.size),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  return (
    <div className="App">
      <header className="navbar">
        <h1 className="navbar-title">VizHub</h1>
      </header>
      <div className="center-container">
        <h1>GitHub Profile Viewer</h1>
        <input
          className="input"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="button" onClick={fetchProfile}>FETCH</button>

        {error && <p className="error-message visible">{error}</p>}

        {profile && (
          <div className="profile-card">
            <h2>{profile.name}</h2>
            <img src={profile.avatar_url} alt="Avatar" className="profile-avatar" />
            <p>{profile.bio}</p>
            <p>Followers: {profile.followers}</p>
            <p>Following: {profile.following}</p>
            <p>Public Repos: {profile.public_repos}</p>
            <p>Location: {profile.location}</p>
            <p>Company: {profile.company}</p>
            <p>Blog: <a href={profile.blog} target="_blank" rel="noopener noreferrer">{profile.blog}</a></p>
          </div>
        )}

        {repos.length > 0 && (
          <div className="chart-container">
            <Pie data={languageData} />
          </div>
        )}
      </div>
      <footer>
        <p>&copy; 2024 VizHub. Made by Sozenka.</p>
      </footer>
    </div>
  );
}

export default App;
