import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Head from './../head';
import { getDetail } from './action';
import s from './exhibitionDetail';

class ExhibitionDetail extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    const { dispatch } = this.props;
    dispatch(getDetail({id: id}));
  }
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    const { exhibition } = this.props;
    return (
      <div className={s.box}>
        <Head />
        {
          exhibition.response[0] ?
            <div className={s.content} dangerouslySetInnerHTML={{__html: exhibition.response[0].content}}/> : null
        }
      </div>
    );
  }
}
ExhibitionDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    exhibition: state.exhibitionDetail,
  };
};

export default connect(mapStateToProps)(ExhibitionDetail);
