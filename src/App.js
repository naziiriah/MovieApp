import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Details from './Pages/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Details",
    element: <Details/>
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
