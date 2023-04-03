import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  background: lightgrey;
  width: 80px;
  padding: 8px;
  radius: 5px;
  display: block;
  text-align: center;
  margin-right: 8px;

  &.active {
    color: red;
  }
`

export const SharedLayout = () => {
    return (
        <div>
            <div>
                <div style={{marginBottom: '16px'}}>
                    <span>This is our awesome Page!</span>
                    <span role="img" aria-label="computer icon">
                    💻
                    </span>
                    <span>Our awesome store</span>
                </div>

                <nav style={{ display: 'flex' }}>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/about">About</StyledNavLink>
                    <StyledNavLink to="/user">User</StyledNavLink>
                    <StyledNavLink to="/products">Products</StyledNavLink>
                    <StyledNavLink to="/sdhfvisdhgfdig">Not Found</StyledNavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}