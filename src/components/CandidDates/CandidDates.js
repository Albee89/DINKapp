import React, { useState, useEffect } from 'react';

const CandidDates = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/profiles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProfiles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching profiles:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleLike = () => {
    fetch('http://127.0.0.1:5000/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profileId: profiles[currentProfileIndex].id }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      setCurrentProfileIndex(prevIndex => (prevIndex + 1) % profiles.length);
    })
    .catch(error => {
      console.error('Error sending like:', error);
    });
  };

  const handleDislike = () => {
    fetch('http://127.0.0.1:5000/dislike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profileId: profiles[currentProfileIndex].id }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      setCurrentProfileIndex(prevIndex => (prevIndex + 1) % profiles.length);
    })
    .catch(error => {
      console.error('Error sending dislike:', error);
    });
  };

  if (loading) {
    return <p>Loading profiles...</p>;
  }

  if (error) {
    return <p>Error loading profiles: {error.message}</p>;
  }

  return (
    <div>
      <h2>Candid Dates</h2>
      {profiles.length > 0 ? (
        <div>
          <div>
            <img src={profiles[currentProfileIndex].avatar} alt="Profile" />
            <h3>{profiles[currentProfileIndex].name}</h3>
            <p>{profiles[currentProfileIndex].about_you}</p>
          </div>
          <div>
            <button onClick={handleDislike}>Yes, Please</button>
            <button onClick={handleLike}>No, Thanks</button>
          </div>
        </div>
      ) : (
        <p>No profiles available</p>
      )}
    </div>
  );
};

export default CandidDates;
