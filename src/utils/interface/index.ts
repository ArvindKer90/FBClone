export interface PostFeeds {
  id: number;
  firstName: string;
  lastName: string;
  caption: string;
  date: any;
  postImg: Array<string>;
  profileImg: string;
  reactionCount: number;
  commentsCount: number;
  privacy: string;
}

export interface StoryFeeds {
  id: number;
  firstName: string;
  lastName: string;
  storyImg: string;
  profileImg: string;
}

interface DobInfo {
  dob: string;
  privacy: string;
}

interface LanguagesInfo {
  languages: Array<string>;
  privacy: string;
}

interface BasicInfo {
  dobInfo: DobInfo;
  gender: string;
  languagesInfo: LanguagesInfo;
}

interface EmailInfo {
  email: string;
  privacy: string;
}

interface MobileInfo {
  mobile: number;
  privacy: string;
}

interface ContactInfo {
  emailInfo: EmailInfo;
  mobileInfo: MobileInfo;
}

export interface FriendsData {
  id: number;
  firstName: string;
  lastName: string;
  profileImg: string;
}

export interface UserProfile {
  basicInfo: BasicInfo;
  contactInfo: ContactInfo;
  firstName: string;
  followersCount: number;
  friendsCount: number;
  friendsList: Array<FriendsData>;
  id: number;
  lastName: string;
  profileImg: string;
  coverImg: string;
}
