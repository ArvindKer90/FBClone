import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserProfile} from '../../utils/interface';

const initialState: UserProfile = {
  basicInfo: {
    dobInfo: {dob: '', privacy: ''},
    gender: '',
    languagesInfo: {languages: [], privacy: ''},
  },
  contactInfo: {
    emailInfo: {email: '', privacy: ''},
    mobileInfo: {mobile: 0, privacy: ''},
  },
  firstName: '',
  followersCount: 0,
  friendsCount: 0,
  friendsList: [],
  id: 0,
  lastName: '',
  profileImg: '',
  coverImg: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      return {...state, ...action.payload};
    },
  },
});

export const {setProfile} = profileSlice.actions;
export default profileSlice.reducer;
