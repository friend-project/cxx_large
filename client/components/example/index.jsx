import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Count from '../count';
import Async from '../async';

class Example extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/async`}>Async</Link>
          </li>
          <li>
            <Link to={`${match.url}/count`}>Count</Link>
          </li>
        </ul>
        <Route exact path={`${match.url}/count`} component={Count} />
        <Route exact path={`${match.url}/async`} component={Async} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps)(Example);

