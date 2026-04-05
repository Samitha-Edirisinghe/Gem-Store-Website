import { Outlet, ScrollRestoration } from 'react-router';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Root() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}