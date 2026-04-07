import "../styles/home.css";

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <button className="primary-btn">
          Create Account
        </button>

        <button className="secondary-btn">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Home;