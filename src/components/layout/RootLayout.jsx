import { Navigate, Outlet } from 'react-router-dom';

import TopBar from './TopBar';

export default function RootLayout() {
 
  return (
    <div className="w-full md:flex">
      <TopBar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
}