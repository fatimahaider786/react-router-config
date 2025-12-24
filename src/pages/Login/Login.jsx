import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Login Page</h2>
        
        <div className="input-group">
          <input type="text" placeholder="Username" className="login-input" />
        </div>
        
        <div className="input-group">
          <input type="password" placeholder="Password" className="login-input" />
        </div>
        
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;