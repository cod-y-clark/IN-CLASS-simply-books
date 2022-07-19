import React from 'react';
import PropTypes from 'prop-types';

function AuthorCard({
  firstName,
  lastName,
  email,
}) {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h2>{email}</h2>
    </div>
  );
}

AuthorCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

AuthorCard.defaultProps = {
  firstName: 'Cody',
  lastName: 'Clark',
  email: 'cody@email.com',
};

export default AuthorCard;
