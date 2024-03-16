import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import links from "../utils/links"
import { useSelector, useDispatch } from "react-redux"
import { toggleSidebar } from "../features/user/userSlice"

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
          <div className="nav-links">
            {links.map((link) => {
              const { id, text, path } = link

              return (
                <NavLink
                  key={id}
                  to={path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <span className="icon">{<link.icon />}</span>
                  {text}
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
