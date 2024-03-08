import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* INFO  */}
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos natus
            fuga maxime voluptatibus illum nam minus cupiditate corrupti enim
            ullam?
          </p>
          <button className="btn btn-hero">Login / Register</button>
        </div>
        <img src={main} alt="Job tracking" className="img main-img" />
      </div>
    </main>
  )
}

export default Landing