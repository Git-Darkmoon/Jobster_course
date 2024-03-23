import { NavLink } from "react-router-dom"
import links from "../utils/links"

function NavLinks({ toggle }) {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, path } = link

        return (
          <NavLink key={id} to={path} className="nav-link" onClick={toggle}>
            <span className="icon">{<link.icon />}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
