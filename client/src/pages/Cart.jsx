import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router";
const KEY=process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Yoga = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const YogaDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const YogaName = styled.span``;

const YogaId = styled.span``;

const YogaApplicationType = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const YogaPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const[stripeToken,setStripeToken]=useState(null)
  const history=useHistory()

  const onToken=(token)=>{
    setStripeToken(token)
  }

  useEffect(()=>{
    const makeRequest=async()=>{
      try {
        const res=await userRequest("/checkout/payment",{
          tokenId:stripeToken,
          amount:cart.total *100,
            
        });
        history.push("/success",{data:res.data})
      } catch (err) {
        
      }
    }
  },[stripeToken,cart.total,history]);
  makeRequest();
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>SEPETİNİZ</Title>
        <Top>
          <TopButton>YOGA SEÇMEYE DEVAM ET</TopButton>
          <TopTexts>
            <TopText>Yoga Alışveriş sepeti(2)</TopText>
            <TopText>İstek listeniz(0)</TopText>
          </TopTexts>
          <TopButton type="filled">ÖDEME YAP</TopButton>
        </Top>
        <Bottom>
          <Info>
           { cart.yogas.map(yoga=>(
            <Yoga>
              <YogaDetail>
                <Image src={yoga.img} />
                <Details>
                  <YogaName>
                    <b>Yoga:</b> {yoga.title}
                  </YogaName>
                  <YogaId>
                    <b>ID:</b> {yoga._id}
                  </YogaId>
                  <YogaApplicationType>
                    <b>Uygulama Tipi:</b> {yoga.applicationtype}
                  </YogaApplicationType>
                </Details>
              </YogaDetail>
              <PriceDetail>
                <YogaPrice>{yoga.price*yoga.quantity},00 TL.</YogaPrice>
              </PriceDetail>
            </Yoga>
           
           ))
}
            <Hr />
            
          </Info>
          <Summary>
            <SummaryTitle>SİPARİŞ ÖZETİ</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Ara Toplam</SummaryItemText>
              <SummaryItemPrice>{cart.total},00 TL.</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>İndirim Miktarı</SummaryItemText>
              <SummaryItemPrice>-00,00 TL.</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Ödenecek Toplam</SummaryItemText>
              <SummaryItemPrice>{cart.total},00 TL.</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
            name="Mürvet'in Yoga Salonu"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`Ödeyeceğiniz Toplam Miktar ${cart.total},00 TL.`}
            amount={cart.total*100}
            token={onToken}
            stripeKey={KEY}
            >
            <Button>ÖDEME YAP</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
