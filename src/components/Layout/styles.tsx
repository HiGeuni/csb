import styled from '@emotion/styled';
import { Container, MenuItem } from '@mui/material';
import { Link } from 'gatsby';

export const TopArea = styled(Container)`
  display: flex;
  align-content: space-between;
  align-items: center;
  justify-content: center;
  padding: 30px 50px;
  .logo {
    min-height: 30px;
    min-width: 30px;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    font-weight: 700;
  }
  :active {
    font-wieght: 700;
  }
`;

export const HoverMenuItem = styled(MenuItem)`
  :hover {
    font-weight: 600;
  }
`;
