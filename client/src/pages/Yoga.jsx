import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";
import { addYoga } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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
  height: 70vh;
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

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const FilterPlaceOption = styled.option``;

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
const Yoga = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [yoga, setYoga] = useState({});
  const [applicationtype, setApplicationtype] = useState("");
  const [level, setLevel] = useState("");
  const dispatch = useDispatch();
  const [quantity,setQuantity]=useState(1)

  useEffect(() => {
    const getYoga = async () => {
      try {
        const res = await publicRequest.get("/yogas/find/" + id);
        setYoga(res.data);
      } catch (err) {}
    };
    getYoga();
  }, [id]);

  const handleClick = () => {
    dispatch(addYoga({ yoga,quantity,price:yoga.price*quantity }));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={yoga.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{yoga.title}</Title>
          <Desc>{yoga.desc}</Desc>
          <Price>{yoga.price},00 TL.</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Uygulama tipi</FilterTitle>
              <FilterSize onChange={(e) => setApplicationtype(e.target.value)}>
                {yoga.applicationtype?.map((a) => (
                  <FilterPlaceOption key={a}>{a}</FilterPlaceOption>
                ))}
              </FilterSize>
            </Filter>
            <Filter>
              <FilterTitle>Seviye</FilterTitle>
              <FilterSize onChange={(e) => setLevel(e.target.value)}>
                {yoga.level?.map((l) => (
                  <FilterSizeOption key={l}>{l}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button onClick={handleClick}>SEPETE EKLE</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Yoga;
