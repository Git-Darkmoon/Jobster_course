import NavLinks from "./NavLinks"
import Logo from "../components/Logo"
import Wrapper from "../assets/wrappers/BigSidebar"
import { useSelector } from "react-redux"

function BigSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user)

  return (
    <Wrapper>
      <div className={`sidebar-container ${!isSidebarOpen && "show-sidebar"}`}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
