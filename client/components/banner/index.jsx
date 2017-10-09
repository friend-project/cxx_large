import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from './components/slider.jsx';
import cfg from './../../../config/domain';
import { getBanner } from './action';

import s from './banner';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: null,
    };
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getBanner());
  }
  render() {
    const { response } = this.props;
    const slides = response.map((d) => {
      return {
        background: `${cfg.img}${d.img}`,
        link: d.uri || '#',
      }
    });
    return (
      <div className={s.box}>
        <Slider slides={slides} time="2000" />
      </div>
    );
  }
}
Banner.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { response } = state.banner;
  return {
    response,
  };
};

export default connect(mapStateToProps)(Banner);
