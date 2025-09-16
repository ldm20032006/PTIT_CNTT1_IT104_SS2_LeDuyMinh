import React from "react";

const Register: React.FC = () => {
  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h2>Create account</h2>
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

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Confirm password</label>
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
          Create an account
        </button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;