import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import AddUser from "./components/AddUser/AddUser";
import AllUsers from "./components/AllUsers/AllUsers";
import UpdateUser from "./components/UpdateUser/UpdateUser";

// import { createBrowserRouter,RouterProvider,} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<AddUser></AddUser>
        },
        {
          path:"/all-users",
          element:<AllUsers></AllUsers>,
          
        },
  
        
        {
          path:"/update/:id",
          element:<UpdateUser></UpdateUser>,
          loader: ({ params }) => fetch(`https://2421backend-server.vercel.app/users/${params.id}`),
         
        }
      ],
  
    },
  ]);
 
  return <RouterProvider router={router}></RouterProvider>
  
}

export default App;
