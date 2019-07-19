import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserRepos } from '../../actions/userActions';
import Repo from '../Repo/Repo';
import './Repos.scss';

class Repos extends Component {
  componentDidMount() {
    const { user } = this.props.match.params;
    this.props.getUserRepos(user);
  }

  render() {
    const { repos, repoErrors } = this.props;
    const { user } = this.props.match.params;

    return (
      <div className='repos'>
        <div className='repos__header'>
          <h2>Repositories of {user}</h2>
          <button
            className='repos__button'
            onClick={() => this.props.history.goBack()}
          >
            Go Back
          </button>
        </div>
        <div className='repos__list'>
          {repoErrors !== null && (
            <div className='repos__error'>
              Error: <b>{repoErrors.status}</b> {repoErrors.statusText}
            </div>
          )}
          {repos.map((repo, key) => (
            <Repo key={key} repo={repo} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  repos: state.user.repos,
  repoErrors: state.user.repoErrors
});

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getUserRepos }
)(Repos);
