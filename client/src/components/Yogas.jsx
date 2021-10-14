import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Yoga from "./Yoga";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Yogas = ({ type, filters, sort }) => {
  const [yogas, setYogas] = useState([]);
  const [filteredYogas, setFilteredYogas] = useState([]);
  useEffect(() => {
    const getYogas = async () => {
      try {
        const res = await axios.get(
          type
            ? `http://localhost:5000/api/yogas?type=${type}`
            : "http://localhost:5000/api/yogas"
        );
        setYogas(res.data);
      } catch (err) {}
    };
    getYogas();
  }, [type]);

  useEffect(() => {
    type &&
      setFilteredYogas(
        yogas.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [yogas, type, filters]);

  useEffect(() => {
    if (sort === "enyeni") {
      setFilteredYogas((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "artan") {
      setFilteredYogas((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredYogas((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {type
        ? filteredYogas.map((item) => <Yoga item={item} key={item.id} />)
        : yogas.slice(0, 10).map((item) => <Yoga item={item} key={item.id} />)}
    </Container>
  );
};

export default Yogas;
