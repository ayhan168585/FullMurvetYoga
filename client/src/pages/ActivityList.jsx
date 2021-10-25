import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Activities from "../components/Activities";

const Container = styled.div``;
const Title = styled.h1`
  margin: 30px;
`;

const ActivityList = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];

  return (
    <Container>
      <Announcement />

      <Navbar />

      <Title>{type}</Title>

      <Activities type={type} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ActivityList;
