import React from "react";

const Login: React.FC = () => {
  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h2>Login account</h2>
      <form>
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Your email</label>
          <input
            type="email"
            placeholder="name@company.com"
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login an account
        </button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Already have an account? <a href="#">Register here</a>
      </p>
    </div>
  );
};

export default Login;