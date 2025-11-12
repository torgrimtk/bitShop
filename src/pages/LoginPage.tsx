import { useNavigate } from "react-router-dom"

const LoginPage = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/App")
    }

    return (
        <div className="mx-auto w-4/5 mb-8">
            <h1 className="text-2x1 font-bold">Welcome to the login page</h1>
            <button onClick={goBack}>Return back</button>
        </div>
    )
}

export default LoginPage