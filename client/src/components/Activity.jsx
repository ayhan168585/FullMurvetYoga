import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: purple;
  z-index: 3;
  transition: all 2s ease-in-out;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 3px;
  min-width: 400px;
  height: 330px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 2s ease-in-out;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;
const Desc = styled.p`
  font-size: 16px;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;
const Date = styled.h1`
  color: white;
`;
const Time = styled.h1`
  color: white;
`;
const Price = styled.h1`
  color: white;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 10px;
  background-color: white;
  color: gray;
  font-weight: bold;
  cursor: pointer;
`;

const Activity = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Date>{item.activitydate[0]}</Date>
        <Time>
          {item.startingtime}-{item.endingtime}
        </Time>
        <Desc>{item.desc.substring(0, 100)}</Desc>
        <Price>{item.price},00 TL.</Price>

        <Link to={`/activity/${item._id}`}>
          <Button>Ayrıntılar</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default Activity;
