import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './../menu';
import Filter from './../filter';

import s from './head';

class Head extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    return (
      <div className={s.head}>
        <div className={s.logo} />
        <Menu />
        <Filter />
      </div>
    );
  }
}
Head.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Head);
