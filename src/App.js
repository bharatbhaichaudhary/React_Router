import Layout from "./layout/Index";
import "./App.css";
import Home from "../src/PAGES/Home";
import UserData from "../src/PAGES/UserData";
import About from '../src/PAGES/Context'
import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  const Routr = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contect",
          element: <UserData />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  // const Home = lazy(()=>import("../src/PAGES/Home"));
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<UserData/>}/>
    <Route path="/" element={<Home/>}/>
  </Route>
</Routes>
      </BrowserRouter> */}
      <RouterProvider router={Routr} />
    </Suspense>
  );
}

export default App;
