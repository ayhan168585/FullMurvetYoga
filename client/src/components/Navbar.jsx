import React from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge/Badge"
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined"
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 2;
  width: 80%;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 350px;
  height: 60px;
  cursor: pointer;
`;


const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-left: 30px;
  font-size: 22px;
  color: black;
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
          <Logo src="https://res.cloudinary.com/dh70tt9xs/image/upload/v1633972352/yogalogo_ykbdt7.png" />
</Link>
          
          {/* <Menu>
            <MenuItem><Link to="/">Ana Sayfa</Link></MenuItem>
            <MenuItem>Tanıtım</MenuItem>
            <MenuItem><Link to="/yogas">Yoga</Link></MenuItem>
            <MenuItem><Link to="/activities">Etkinlikler</Link></MenuItem>
            <MenuItem>İletişim</MenuItem>
          </Menu> */}
        </Left>
        <Right>
          <Menu>
            <MenuItem>Kayıt Ol</MenuItem>
            <MenuItem>Giriş Yap</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
