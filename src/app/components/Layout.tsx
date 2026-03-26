import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { AnimatedBackground } from './AnimatedBackground';

export function Layout() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
