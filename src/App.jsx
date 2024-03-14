import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Landing, Error, Register } from "./pages"
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Stats />,
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  { path: "landing", element: <Landing />, errorElement: <Error /> },
  { path: "register", element: <Register />, errorElement: <Error /> },
])

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router}>
        <div>
          <Landing />
        </div>
      </RouterProvider>
    </>
  )
}

export default App
