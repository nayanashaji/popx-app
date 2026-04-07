import "../styles/account.css";

function Account() {
  return (
    <div className="container top">
        <div>
      
            <div className="account-header">
                <h2>Account Settings</h2>
            </div>

            <div className="profile-section">

                <div className="profile-top">
                <div className="avatar-wrapper">
                    <img
                    src="https://i.pravatar.cc/100"
                    alt="profile"
                    className="avatar"
                    />
                    <div className="camera-icon"><i className="fa-sharp fa-solid fa-camera" style={{ color: "rgb(245,245,245)" }}></i></div>
                </div>

                <div className="profile-info">
                    <h3>Marry Doe</h3>
                    <p>Marry@gmail.com</p>
                </div>
                </div>

                <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti a possimus ipsum distinctio libero, tempora ea eum id quia, animi fuga, optio excepturi. Debitis voluptatibus esse quis dignissimos ducimus numquam!
                </p>

            </div>

        <div className="divider"></div>
        </div>
    </div>
  );
}

export default Account;