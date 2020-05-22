import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  isLoading: false,
  isSigned: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.isLoading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.isSigned = true;
        draft.isLoading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.isLoading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.isSigned = false;
        break;
      }
      default:
        return state;
    }
  });
}
