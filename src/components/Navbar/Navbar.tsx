import { useState, useEffect } from "react";

import Logo from "../../assets/logo.svg"; // Update path as necessary
import { NavLink, NavbarContainer } from "./Navbar.styled";
import useMediaQuery from "../helpers/MediaQuery";

const navLinks = [
  {
    title: "Home",
    ref: "#home",
  },
  {
    title: "Solution",
    ref: "#solution",
  },
  {
    title: "Insights",
    ref: "#insights",
  },
  {
    title: "Contact",
    ref: "#contact",
  },
];
const Navbar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Check for mobile screen width (max-width 950px)
  const isMobile = useMediaQuery("(max-width: 950px)");

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll event
    };
  }, []);

  return (
    <NavbarContainer
      style={{
        position: sticky ? "fixed" : "static",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <a href="/" aria-label="Go to home">
        <img src={Logo} alt="Logo" width={"100%"} />
      </a>
      {!isMobile && (
        <div style={{ display: "flex", gap: "3vw" }}>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.ref}>
              {link.title}
            </NavLink>
          ))}
        </div>
      )}

      {isMobile && (
        <>
          <hr />
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.ref}>
                {link.title}
              </NavLink>
            ))}
          </div>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
