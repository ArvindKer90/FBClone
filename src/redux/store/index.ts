import {configureStore, combineReducers} from '@reduxjs/toolkit';
import profileReducer from '../slice/profileSlice';
const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

const rootReducer = combineReducers({
  profile: profileReducer,
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
