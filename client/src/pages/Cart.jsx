import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

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
            <Yoga>
              <YogaDetail>
                <Image src="https://res.cloudinary.com/dh70tt9xs/image/upload/v1633654749/vinyasa_yoga_hvcwf9.jpg" />
                <Details>
                  <YogaName>
                    <b>Yoga:</b> VİNYASA YOGA
                  </YogaName>
                  <YogaId>
                    <b>ID:</b> 615cdc569d4008c9344c2199
                  </YogaId>
                  <YogaApplicationType>
                    <b>Uygulama Tipi:</b>
                  </YogaApplicationType>
                </Details>
              </YogaDetail>
              <PriceDetail>
                <YogaPrice>100,00 TL.</YogaPrice>
              </PriceDetail>
            </Yoga>
            <Hr />
            <Yoga>
              <YogaDetail>
                <Image src="https://res.cloudinary.com/dh70tt9xs/image/upload/v1633657120/hatha_yoga_nktfm0.jpg" />
                <Details>
                  <YogaName>
                    <b>Yoga:</b> HATHA YOGA
                  </YogaName>
                  <YogaId>
                    <b>ID:</b> 615cdceabbf9e6ae5647b9da
                  </YogaId>
                  <YogaApplicationType>
                    <b>Uygulama Tipi:</b>
                  </YogaApplicationType>
                </Details>
              </YogaDetail>
              <PriceDetail>
                <YogaPrice>150,00 TL.</YogaPrice>
              </PriceDetail>
            </Yoga>
          </Info>
          <Summary>
            <SummaryTitle>SİPARİŞ ÖZETİ</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Ara Toplam</SummaryItemText>
              <SummaryItemPrice>250,00 TL.</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>İndirim Miktarı</SummaryItemText>
              <SummaryItemPrice>-50,00 TL.</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Ödenecek Toplam</SummaryItemText>
              <SummaryItemPrice>200,00 TL.</SummaryItemPrice>
            </SummaryItem>
            <Button>ÖDEME YAP</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
