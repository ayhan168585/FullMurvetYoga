import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Yogas from "../components/Yogas";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 30px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const YogaList = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("enyeni");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Announcement />

      <Navbar />

      <Title>{type}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrele</FilterText>
          <Select name="applicationtype" onChange={handleFilters}>
            <Option disabled>Uygulama Tipi</Option>
            <Option>studio</Option>
            <Option>video</Option>
            <Option>online</Option>
          </Select>
          <Select name="level" onChange={handleFilters}>
            <Option disabled>Seviye</Option>
            <Option>başlangıç</Option>
            <Option>orta</Option>
            <Option>ileri</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sırala:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="enyeni">En Yeni</Option>
            <Option value="artan">Fiyat (artan)</Option>
            <Option value="azalan">Fiyat (azalan)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Yogas type={type} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default YogaList;
