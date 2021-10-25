import React from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge/Badge"
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const quantity=useSelector(state=>state.cart.quantity)
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
            <Link to="/register">
            <MenuItem>Kayıt Ol</MenuItem>
            </Link>
            <Link to="/login">
            <MenuItem>Giriş Yap</MenuItem>
            </Link>
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
            </Link>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
