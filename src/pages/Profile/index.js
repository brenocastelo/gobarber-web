import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/profile/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvaterInput from './AvatarInput';
import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvaterInput name="avatar_id" />
        <Input name="name" placeholder="Your fullname" />
        <Input name="email" type="email" placeholder="Your e-mail" />

        <hr />

        <Input
          name="currentPassword"
          type="password"
          placeholder="Your current password"
        />
        <Input name="newPassword" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
        />

        <button type="submit">Update profile</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Logout
      </button>
    </Container>
  );
}

export default Profile;
