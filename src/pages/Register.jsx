import { useState } from "react"
import { FormRow, Logo } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

function Register() {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <FormRow
          type={"text"}
          name={"name"}
          value={values.name}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Register
