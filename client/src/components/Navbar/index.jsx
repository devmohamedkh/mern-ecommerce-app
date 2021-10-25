import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
} from "./style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/"> SHOPY.</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register"> REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login"> SIGN IN</Link>
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
