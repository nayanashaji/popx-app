import "../styles/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="container bottom">
        <div className="content">
            <h1>Welcome to PopX</h1>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <button className="primary-btn" onClick={() => navigate("/signup")}>
            Create Account
            </button>

            <button className="secondary-btn" onClick={() => navigate("/login")}>
            Already Registered? Login
            </button>
        </div>
        </div>
    );
}

export default Home;