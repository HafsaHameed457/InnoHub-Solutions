import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  height: 80px;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 0 5rem;
  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const NavLink = styled.a`
  color: #19124f;

  font-size: 24px;

  font-weight: 500;

  cursor: pointer;
  text-decoration: none;
  font-style: italic;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
