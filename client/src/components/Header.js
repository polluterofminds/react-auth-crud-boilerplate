import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return(
          <ul id="nav-mobile" className="right">
            <li><a href="/auth/google">Sign in</a></li>
            <li><a href="">About</a></li>
          </ul>
        );
      default:
        return (
          <ul id="nav-mobile" className="right">
            <li><a href="/api/logout">Sign out</a></li>
            <li><a href="">About</a></li>
          </ul>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={"/"} className="brand-logo">Boilerplate</Link>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
