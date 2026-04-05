import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PreciousGemsPage from './pages/PreciousGemsPage';
import RareStonesPage from './pages/RareStonesPage';
import CustomCollectionPage from './pages/CustomCollectionPage';
import GemDetailPage from './pages/GemDetailPage';

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
]);