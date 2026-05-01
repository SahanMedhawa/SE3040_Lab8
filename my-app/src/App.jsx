import Greeting from "./components/Greeting";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Banner from "./components/Banner";
import Testimonial from "./components/Testimonial";

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