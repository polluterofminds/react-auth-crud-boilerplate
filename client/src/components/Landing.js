import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';

class Landing extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return(
          <div className="welcome center-align">
            <h3>Welcome!</h3>
            <a href="/auth/google" className="waves-effect waves-light btn"><i className="material-icons left">lock_outline</i>Sign in with Google</a>
          </div>
        );
      default:
      return(
        <div className="center-align add">
          <h3 className="collections container">Add something to your database</h3>
            <p>
            <Link to={'/new/item'}>
              <button className="btn black">Add something</button>
            </Link>
            </p>
            <div>
              <ItemList />
            </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Landing);
