import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  isLoading: false,
  isSigned: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.isSigned = true;
      });
    default:
      return state;
  }
}
