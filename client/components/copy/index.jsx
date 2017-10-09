import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getCopy } from './action';

import Head from './../head';
import s from './copy';

class Copy extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getCopy(2));
  }
  render() {
    const { copy } = this.props;
    let rst;
    if (copy.response && copy.response.length > 0) {
      rst = copy.response[0].content;
    } else {
      rst = null;
    }
    return (
      <div className={s.box}>
        <Head />
        <div className={s.content} dangerouslySetInnerHTML={{__html: rst}} />
      </div>
    );
  }
}
Copy.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    copy: state.copy,
  };
};

export default connect(mapStateToProps)(Copy);

