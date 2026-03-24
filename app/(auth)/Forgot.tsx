import React, { FormEvent, useState } from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSendLink = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    setIsSending(true);

    try {
      // ✅ Replace this with your real backend endpoint
      const res = await fetch(
        "http://localhost:8081/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        setIsSent(true);
        alert("Password reset link sent successfully!");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to send reset link.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the link.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Forgot Password</h2>

      <form onSubmit={handleSendLink} style={{ textAlign: "center" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            width: "260px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />
        <br />

        <button
          type="submit"
          disabled={isSending || isSent}
          style={{
            padding: "10px 25px",
            backgroundColor: isSent
              ? "gray"
              : isSending
              ? "#5a9cff"
              : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: isSending || isSent ? "not-allowed" : "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {isSending ? "Sending..." : isSent ? "Link Sent" : "Send reset link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
