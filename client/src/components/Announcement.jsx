import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import InformItem from "./InformItem";

const Container = styled.div`
  height: 30px;
  background-color: coral;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  font-size: 18px;
`;
const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    const getInforms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/informs");
        setAnnouncements(res.data);
      } catch (err) {
      }
    };
    getInforms();
  }, []);

  return (
    <Container>
      {announcements?.map((item) => (
        <InformItem item={item} key={item._id} />
      ))}
      {/* <b>Büyük İndirim ! :</b>
      <p>Yoga eğitiminde 2021 yılının sonuna kadar %30 indirim yaptık.</p> */}
    </Container>
  );
};

export default Announcement;
