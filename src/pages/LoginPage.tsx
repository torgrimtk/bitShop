import { useNavigate } from "react-router-dom"

const LoginPage = () => {

    const navigate = useNavigate();



    return (
        <div className="mx-auto w-4/5 mb-8">
            <h1 className="text-2x1 font-bold">LoginPage</h1>
        </div>
    )
}

export default LoginPage