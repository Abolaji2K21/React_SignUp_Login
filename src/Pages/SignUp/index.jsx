import image from "../../../src/assets/signup.png"
import PageTemplate from "../../Components/PageTemplate";

const SignUp = () => {
    return (
        <>
            <PageTemplate image={image} headerName={"Welcome"}
                          message={"Sign up by entering the information below"} buttonMessage={"Sign Up"}
                          holder1={"First Name:"} holder2={"Last Name:"} holder3={"Username:"} holder4={"Password:"}/>
        </>
    )
}

export default SignUp;