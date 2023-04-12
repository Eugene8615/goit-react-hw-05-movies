import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const NavStyled = styled.nav`
display: flex;
    padding: 20px 30px;
    gap: 30px;
    color: black;
    margin-bottom: 30px;
    background-color: #454545;

   
`;
export const LinkStyled = styled(NavLink)`
    color: #FFE6C7;
    text-decoration: none;
    display: block;
    text-align: center;
    margin: 0 auto;

    &.active {
    color: #FF6000;
    font-weight: bold;
    margin: 0 auto;
  }
`