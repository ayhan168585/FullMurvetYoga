import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Activity from "./Activity";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Activities = ({ type, filters, sort }) => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  useEffect(() => {
    const getActivities = async () => {
      try {
        const res = await axios.get(
          type
            ? `http://localhost:5000/api/activities?type=${type}`
            : "http://localhost:5000/api/activities"
        );
        setActivities(res.data);
      } catch (err) {}
    };
    getActivities();
  }, [type]);

  useEffect(() => {
    type &&
      setFilteredActivities(
        activities.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [activities, type, filters]);

  useEffect(() => {
    if (sort === "enyeni") {
      setFilteredActivities((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "artan") {
      setFilteredActivities((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredActivities((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {type
        ? filteredActivities.map((item) => <Activity item={item} key={item.id} />)
        : activities.slice(0, 10).map((item) => <Activity item={item} key={item._id} />)}
    </Container>
  );
};

export default Activities;
