import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/root';
import Home from '../App';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog-details';
import AboutUs from '../pages/about-us';
import Team from '../pages/team';
import Pricing from '../pages/pricing';
import NotFound from '../pages/404';
import BlogSidebar from '../pages/blog-sidebar';
import TermsConditions from '../pages/terms-conditions';
import PrivacyPolicy from '../pages/privacy-policy';
import MLModelDevelopment from '../pages/MLModelDevelopment';
import ERPDevelopment from '../pages/ERPDevelopment';
import AIPoweredSoftware from '../pages/AIPoweredSoftware'; // Import the new AI-Powered Software component
import SupportAndOptimization from '../pages/SupportAndOptimization';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog-sidebar',
        element: <BlogSidebar />,
      },
      {
        path: '/blog-details',
        element: <BlogDetails />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/terms-conditions',
        element: <TermsConditions />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/custom-model-development',
        element: <MLModelDevelopment />,
      },
      {
        path: '/erp-development',
        element: <ERPDevelopment />,
      },
      {
        path: '/support-and-optimization',
        element: <SupportAndOptimization />,
      },
      {
        path: '/ai-powered-software', // Add the new path for AI-Powered Software
        element: <AIPoweredSoftware />, // Set the element to AIPoweredSoftware component
      },
      {
        path: '/not-found',
        element: <NotFound />,
      },
    ],
  },
]);
