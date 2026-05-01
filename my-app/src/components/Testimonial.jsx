function Testimonial({ name, quote, image }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", width: "250px" }}>
      <img src={image} alt={name} width="50" />
      <p>"{quote}"</p>
      <h4>- {name}</h4>
    </div>
  );
}

export default Testimonial;