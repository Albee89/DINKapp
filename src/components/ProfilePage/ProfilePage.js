import React, { useState } from 'react';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    aboutYou: '',
    whySingle: '',
    lookingFor: '',
    whyNoKids: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Profile created:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="aboutYou">About You:</label>
        <textarea
          id="aboutYou"
          name="aboutYou"
          value={formData.aboutYou}
          onChange={handleChange}
          required
        />

        <label htmlFor="whySingle">Why You're Single:</label>
        <textarea
          id="whySingle"
          name="whySingle"
          value={formData.whySingle}
          onChange={handleChange}
          required
        />

        <label htmlFor="lookingFor">What You're Looking For:</label>
        <textarea
          id="lookingFor"
          name="lookingFor"
          value={formData.lookingFor}
          onChange={handleChange}
          required
        />

        <label htmlFor="whyNoKids">Why Don't You Want Kids:</label>
        <textarea
          id="whyNoKids"
          name="whyNoKids"
          value={formData.whyNoKids}
        />

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
