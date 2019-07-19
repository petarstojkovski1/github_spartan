import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchUser } from '../../actions/userActions';
import Card from '../Card/Card';
import './Home.scss';

class Home extends Component {
  state = {
    search: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { search } = this.state;

    this.props.searchUser(search);
    this.setState({ search: '' });
  };

  render() {
    console.log(this.state.search, 'pisanje');
    const { user, userErrors } = this.props;
    console.log(user, 'KOERIESAESAE');
    return (
      <div className='home'>
        <h1 className='home__header'>Github users search app</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type='input'
            name='search'
            id='search'
            onChange={this.onChange}
            placeholder='Enter name'
            className='home__search'
            required
          />
          <br />
          <button type='submit' className='home__button'>
            Search
          </button>
        </form>
        {userErrors !== null && (
          <div
            className={
              userErrors.status !== 404 ? 'repos__error' : 'home__error'
            }
          >
            There are no users with that username!
          </div>
        )}
        <Card user={user} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  userErrors: state.user.userErrors
});

Home.propTypes = {
  user: PropTypes.object.isRequired,
  searchUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { searchUser }
)(Home);
