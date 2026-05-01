function Button({ text, size = "medium", color = "blue" }) {
  return (
    <button style={{
      padding: size === "large" ? "12px" : "6px",
      backgroundColor: color,
      color: "white",
      border: "none"
    }}>
      {text}
    </button>
  );
}

export default Button;