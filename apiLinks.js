const SERVER_URL = 'http://192.168.1.113:3000/api';

export const LOGIN_URL = SERVER_URL + '/account/login';
export const REGISTER_URL = SERVER_URL + '/account/register';
export const ME_URL = SERVER_URL + '/account/me';
export const JOINED_CALENDARS = SERVER_URL + '/account/joined-calendars';

export const CREATE_CALENDAR = SERVER_URL + '/calendar/create';
export const GET_CALENDAR = function (_id) {
  return SERVER_URL + '/calendar/' + _id;
};
