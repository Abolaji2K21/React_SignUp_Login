import PageTemplate from "../../Components/PageTemplateForLogin";
import image from "../../../src/assets/login.png";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
            <PageTemplate image={image} headerName={"Welcome Back!"}
                          message={"Log in to your DashBoard"} buttonMessage={"Login"}
                          holder1={"Username:"} holder2={"Password:"} messageOne={"Don't have an account ?"}
                          buttonMessageOne={<Link to={"/signUp"}>SignUp</Link>}

                    />

        </>
    )
}

// ??
export default Login;