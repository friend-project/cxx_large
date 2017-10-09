import { combineReducers } from 'redux';

import copy from './components/copy/reducer';
import count from './components/count/reducer';
import async from './components/async/reducer';
import mural from './components/mural/reducer';
import about from './components/about/reducer';
import banner from './components/banner/reducer';
import exhibition from './components/exhibition/reducer';
import exhibitionDetail from './components/exhibitionDetail/reducer';

const rootReducer = combineReducers({
  copy,
  mural,
  count,
  async,
  about,
  banner,
  exhibition,
  exhibitionDetail,
});

export default rootReducer;
