import { combineReducers } from 'redux';
import { LOAD_COMPONENT } from '../actions';

const initialState = {
  componentId: null,
};

const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPONENT:
      return {
        ...state,
        componentId: action.componentId,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  component: componentReducer,
});

export default rootReducer;
