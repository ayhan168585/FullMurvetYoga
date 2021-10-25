import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { publicRequest, userRequest } from "../requestMethods";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 80vh;
  width: 800px;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
const Activity = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [activity, setActivity] = useState({});

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const getActivity = async () => {
      try {
        const res = await publicRequest.get("/activities/find/" + id);
        setActivity(res.data);
      } catch (err) {}
    };
    getActivity();
  }, [id]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken,
          amount: activity.price * 100,
        });
        history.push("/success", { data: res.data });
      } catch (err) {}
    };
    stripeToken && activity.price >= 1 && makeRequest();
  }, [stripeToken, activity.price, history]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={activity.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{activity.title}</Title>
          <Desc>{activity.desc}</Desc>
          <Price>{activity.price},00 TL.</Price>

          <AddContainer>
            <StripeCheckout
              name="Mürvet'in Yoga Salonu"
              image="https://res.cloudinary.com/dh70tt9xs/image/upload/v1633615357/woman-5485664_1280_xa6xea.png"
              billingAddress
              shippingAddress
              description={`Ödeyeceğiniz Toplam Miktar ${activity.price},00 TL.`}
              amount={activity.price * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>SATIN AL</Button>
            </StripeCheckout>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Activity;
