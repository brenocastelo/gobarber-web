import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.currentPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Profile updated');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Profile update has failed');
    updateProfileFailure();
  }
}

export default all([
  takeLatest('@profile/UPDATE_PROFILE_REQUEST', updateProfile),
]);
