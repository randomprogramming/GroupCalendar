import {ASSIGN_ACCOUNT} from './types';

export const fetchAccount = () => {
  console.log('Fetching account');

  return assignAccount({
    firstName: 'tester',
    lastName: 'moreTester',
    isLoggedIn: true,
  });
};

export const assignAccount = (account) => ({
  type: ASSIGN_ACCOUNT,
  payload: account,
});
