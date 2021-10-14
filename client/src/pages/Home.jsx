import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar"
import Slider from "../components/Slider";
import Activities from "../components/Activities"
import Yogas from "../components/Yogas";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider/>
      <Activities/>
      <Yogas/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default Home;
