import Greeting from "./components/Greeting.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import Banner from "./components/Banner.jsx";
import Testimonial from "./components/Testimonial.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Greeting />
      <Banner />

      <Card
        image="https://via.placeholder.com/150"
        title="Product 1"
        description="This is a product"
      />

      <Button text="Click Me" size="large" color="green" />

      <Testimonial
        name="John"
        quote="Amazing service!"
        image="https://via.placeholder.com/50"
      />

      <Footer />
    </div>
  );
}

export default App;