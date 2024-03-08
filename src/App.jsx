import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Landing, Dashboard, Error, Register } from "./pages"

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
    <RouterProvider router={router}>
      <div>
        <Landing />
      </div>
    </RouterProvider>
  )
}

export default App
