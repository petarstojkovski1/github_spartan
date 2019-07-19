import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import { GoRepoForked, GoStar, GoEye } from 'react-icons/go';
import './Repo.scss';

const Repo = props => {
  const { repo } = props;
  const date = new Date(repo.created_at);

  return (
    <div className='repo'>
      <a
        href={repo.html_url}
        rel='noopener noreferrer'
        target='_blank'
        className='repo__name'
      >
        {repo.name}
      </a>
      <LinesEllipsis
        text={repo.description ? repo.description : ''}
        maxLine='3'
        ellipsis='...'
        trimRight
        basedOn='letters'
        className='repo__desc'
      />
      <div className='repo__stats'>
        <div className='repo__stat'>
          <GoStar className='repo__icon' /> {repo.stargazers_count}
        </div>
        <div className='repo__stat'>
          <GoEye className='repo__icon' /> {repo.watchers}
        </div>
        <div className='repo__stat'>
          <GoRepoForked className='repo__icon' />
          {repo.forks}
        </div>
      </div>
      <div className='repo__license'>
        <p>Created: {date.toLocaleDateString()}</p>
        <p>{repo.license !== null ? repo.license.name : 'No license'}</p>
      </div>
    </div>
  );
};

Repo.propTypes = {
  repo: PropTypes.object.isRequired
};

export default Repo;
