import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import MissionVision from './pages/MissionVision';
import Contact from './pages/Contact';

// Layout component with Navigation and Footer
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutUs,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services,
});

const missionVisionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mission-vision',
  component: MissionVision,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

// Create router
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  missionVisionRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
