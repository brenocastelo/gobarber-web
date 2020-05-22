import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import Notifications from '../Notifications';

import logo from '../../assets/logo-purple.svg';

export default function Header() {
  const { profile } = useSelector(state => state.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Go Barber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
