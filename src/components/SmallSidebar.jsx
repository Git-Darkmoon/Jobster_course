import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import { useSelector, useDispatch } from "react-redux"
import { toggleSidebar } from "../features/user/userSlice"
import NavLinks from "./NavLinks"

function SmallSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = (state) => {
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>
      <div className={`sidebar-container ${isSidebarOpen && "show-sidebar"} `}>
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
