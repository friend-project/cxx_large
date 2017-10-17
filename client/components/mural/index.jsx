import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import cfg from '../../../config/domain';

import Head from './../head';
import { getMural } from './action';
import s from './mural';

class Mural extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getMural());
  }
  render() {
    const { mural, match } = this.props;
    return (
      <div className={s.box}>
        <Head />
        <div className={s.mural}>
          <ul>
            {
              mural.response.map((v, k) => {
                return (
                  <li key={v.id}>
                    <a
                      href={`${cfg.img}${v.img}`}
                      target="_blank"
                      style={{
                        backgroundImage: `url(${cfg.img}${v.thumb_img})`
                      }}
                    />
                  <h2>{v.name}</h2>
                </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
Mural.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { mural } = state;
  return {
    mural,
  };
};

export default connect(mapStateToProps)(Mural);
