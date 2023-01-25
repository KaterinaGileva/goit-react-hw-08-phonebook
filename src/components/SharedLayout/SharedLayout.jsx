//import { AppBar } from 'components/App/AppBar';
import Spinner from 'components/Spinner/Spinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, HeaderNav } from './SharedLayout.styled';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';


export default function SharedLayout() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
     <Header>
        <HeaderNav>{isLoggedIn ? <UserNav /> : <AuthNav />}</HeaderNav>
      </Header> 
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
    
  </Container>
  );
}

