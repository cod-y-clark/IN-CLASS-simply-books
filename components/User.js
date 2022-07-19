/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function User({
  image,
  name,
  email,
  lastLogin,
}) {
  return (

    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{lastLogin}</h3>
    </div>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Tomi_Adeyemi_2020.JPG',
  name: 'Tomi Adeyemi',
  email: 'tadeyemi@email.com',
  lastLogin: '2022-07-15',
};

export default User;
