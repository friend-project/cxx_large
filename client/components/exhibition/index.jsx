import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import cfg from '../../../config/domain';

import Head from './../head';
import { post } from './action';
import s from './exhibition';

class Exhibition extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(post());
  }
  shouldComponentUpdate(nextProps) {
    return true;
  }

  render() {
    const { exhibition, match } = this.props;
    return (
      <div className={s.box}>
        <Head />
        <ul>
          {
            exhibition.response.map(v =>
              <li
                className={classnames(s.entry, s.exhibition)}
                style={{backgroundImage: `url(${cfg.img}${v.thumb_img})`}}
              >
                <Link to={`${match.url}/${v.id}`}>
                  <em>{v.title}</em>
                  <span>{v.subhead}</span>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}
Exhibition.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    exhibition: state.exhibition,
  };
};

export default connect(mapStateToProps)(Exhibition);
