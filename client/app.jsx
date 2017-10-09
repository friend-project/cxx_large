import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home';
import Example from './components/example';
import Mural from './components/mural';
import MuralDetail from './components/muralDetail';
import Exhibition from './components/exhibition';
import ExhibitionDetail from './components/exhibitionDetail';
import About from './components/about';
import Copy from './components/copy';

const App = () => (
  <div>
    <Route path="/" exact component={Home} />
    {/* 壁画 */}
    <Route path="/mural" exact component={Mural} />
    {/* 壁画详情 */}
    <Route path="/mural/:id" exact component={MuralDetail} />
    {/* 展览 */}
    <Route path="/exhibition" exact component={Exhibition} />
    {/* 展览详情 */}
    <Route path="/exhibition/:id" exact component={ExhibitionDetail} />
    {/* 版权声明 */}
    <Route path="/copy" exact component={Copy} />
    {/* 关于我们 */}
    <Route path="/about" exact component={About} />
    {/* 例子 */}
    <Route path="/example" component={Example} />
  </div>
);

export default App;

