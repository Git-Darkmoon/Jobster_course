import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Landing, Dashboard, Error, Register } from "./pages"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const router = createBrowserRouter([
  { path: "landing", element: <Landing />, errorElement: <Error /> },
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
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
