import { Link } from "react-router-dom"
import img from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"
function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page not found</h3>
        <p>We can&apos;t seem to find the page you&apos;re looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
