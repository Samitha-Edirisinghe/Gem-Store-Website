import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PreciousGemsPage from './pages/PreciousGemsPage';
import RareStonesPage from './pages/RareStonesPage';
import CustomCollectionPage from './pages/CustomCollectionPage';
import GemDetailPage from './pages/GemDetailPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminGemForm from './pages/AdminGemForm';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "precious-gems",
        Component: PreciousGemsPage,
      },
      {
        path: "rare-stones",
        Component: RareStonesPage,
      },
      {
        path: "custom-collection",
        Component: CustomCollectionPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "gem/:id",
        Component: GemDetailPage,
      },
    ],
  },
  {
    path: "/admin/login",
    Component: AdminLoginPage,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
  {
    path: "/admin/gems/add",
    Component: AdminGemForm,
  },
  {
    path: "/admin/gems/edit/:id",
    Component: AdminGemForm,
  },
]);