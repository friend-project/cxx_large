import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import s from './menu';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      act: '',
    }
  }
  componentDidMount() {
    this.setState({
      act: window.location.pathname,
    });
  }
  render() {
    const { act } = this.state;
    const data = [
      {
        link: '/',
        name: '首页'
      },
      {
        link: '/mural',
        name: '壁画展示'
      },
      {
        link: '/exhibition',
        name: '我们的展览'
      },
      {
        link: '/about',
        name: '关于我们'
      },
    ];
    const nav = data.map((d) => {
      const atv = d.link === act;
      if (d.link === act) {
        return <Link className={s.active} to={d.link} key={d.link}>{d.name}</Link>
      } else {
        return <Link to={d.link} key={d.link}>{d.name}</Link>
      }
    });
    return (
      <div className={s.box}>{nav}</div>
    );
  }
}
Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Menu);
