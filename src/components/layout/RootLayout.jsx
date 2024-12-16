import { Navigate, Outlet } from 'react-router-dom';

import TopBar from './TopBar';
import { useAuth } from '../../context/AuthContext';

export default function RootLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div className="w-full md:flex">
      <TopBar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
}