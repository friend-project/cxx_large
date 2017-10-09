import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getAbout } from './action';

import Head from './../head';
import s from './about';

class About extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getAbout(1));
  }
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    const { about } = this.props;
    let rst;
    if (about.response && about.response.length > 0) {
      rst = about.response[0].content;
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
About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};

export default connect(mapStateToProps)(About);

