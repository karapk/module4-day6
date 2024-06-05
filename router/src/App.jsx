import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Layout from './components/Layout';
// import ErrorPage from './pages/ErrorPage';
import Pokemon from './pages/Pokemon';
import Wiki from './pages/Wiki'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "pokemon/:pokemonID", element: <Pokemon /> }, // : is how you use route params 
      { path: "wiki", element: <Wiki /> },
    ]
  },
  {
    path: "/signin",
    element: <SignIn />
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;