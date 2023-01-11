import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { Link } from 'gatsby';

export const TopArea = styled(Container)`
  display: flex;
  align-content: space-between;
  align-items: flex-start;
  padding: 30px 50px;
  .logo {
    min-height: 30px;
    min-width: 30px;
  }
`;
export const BtnArea = styled('div')`
  margin-left: auto;
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
