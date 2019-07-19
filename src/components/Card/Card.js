import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Card.scss';

const Card = props => {
  console.log(props.user, 'USERR');
  const { user } = props;
  if (Object.keys(user).length === 0 && user.constructor === Object) {
    return <></>;
  } else {
    return (
      <Link className='link' to={`/repos/${user.login}`}>
        <div className='card'>
          <img className='card__img' alt={user.login} src={user.avatar_url} />
          <div className='card__info'>
            <h2 className='card__name'>{user.login}</h2>
            <LinesEllipsis
              text={user.bio ? user.bio : 'No description'}
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'
              className='card__desc'
            />
          </div>
        </div>
      </Link>
    );
  }
};

Card.propTypes = {
  user: PropTypes.object.isRequired
};

export default Card;
