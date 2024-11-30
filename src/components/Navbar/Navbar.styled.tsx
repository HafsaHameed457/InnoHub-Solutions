import styled from "styled-components";

export const NavbarContainer: React.FC<any> = styled.div`
  display: flex;
  font-size: 1.2rem;
  height: 80px;

  padding: 0 5rem;
  align-items: center;

  background: white;
  border: none;
  border-radius: 100px;
`;

export const NavLink = styled.a`
  color: #19124f;

  font-size: 20px;

  font-weight: 500;

  cursor: pointer;
  text-decoration: none;
  font-style: italics;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
