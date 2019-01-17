import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class CustomNavLink extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: this.props.pathname,
          state: { prevPath: this.props.location.pathname }
        }}
        className={
          this.props.location.pathname === this.props.pathname ? "active" : ""
        }
      >
        {this.props.name}
      </Link>
    );
  }
}

export default withRouter(CustomNavLink);
