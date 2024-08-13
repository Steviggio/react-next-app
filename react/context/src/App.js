import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Works from './Layout/Works';
import Introduction from './Layout/Introduction';
import Contact from './Layout/Contact';
import SignInComponent from './Context/AuthProvider';
import AuthProvider from 'react-auth-kit/AuthProvider';
import createStore from 'react-auth-kit/createStore';
import { WorkProvider } from './Context/WorkContext';
import WorkList from './Context/WorkList';
import Loading from './Context/Loading';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={
      <>
        <Introduction />
        <Works />
        <Contact />
      </>
    } />,
  },
  {
    path: "/login",
    element: <Layout children={<SignInComponent />} />
  },
  {
    path: "/test",
    element: <Layout children={
      <Suspense fallback={<Loading />}>
        <WorkList selectedCategory={"All"} />
      </Suspense>
    }
    />
  }

])

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https"
});


function App() {
  return (
    <AuthProvider store={store}>
        <WorkProvider>
          <RouterProvider router={router} />
        </WorkProvider>
    </AuthProvider>
  );
}

export default App;


