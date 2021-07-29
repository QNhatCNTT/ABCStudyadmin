import userType from './userType';

export function signIn({ payload, history, dispatch }) {
  return {
    type: userType.SIGN_IN,
    payload,
    history,
    dispatch
  };
}

export function getMe({ payload, history }) {
  return {
    type: userType.GET_ME,
    payload,
    history,
  };
}

export function register(payload) {
  return {
    type: userType.REGISTER,
    payload
  };
}

export function signOut(history) {
  return {
    type: userType.SIGN_OUT,
    history: history,
  };
}
export function getAuthUsers(page, limit, role) {
  return {
    type: userType.GET_AUTT_USERS,
    page: page,
    limit: limit,
    role: role,
  };
}

export function deleteAuthUser(payload) {
  return {
    type: userType.DELETE_AUTH_USERS,
    payload
  };
}