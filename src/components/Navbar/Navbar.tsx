import Logo from "../../assets/logo.svg"; // Update path as necessary
import useRouter from "../../hooks/useRouter";
import { StyledButton } from "../helpers/GeneralComponents.styled";
import useMediaQuery from "../helpers/MediaQuery";
import { NavLink, NavbarContainer } from "./Navbar.styled";
const navLinks = [
  {
    title: "Home",
    ref: "/",
  },
  {
    title: "Solutions",
    ref: "/solutions",
  },
  {
    title: "Insights",
    ref: "/insights",
  },
  {
    title: "Contact",
    ref: "/contact",
  },
];
const Navbar: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 750px)");

  return (
    <NavbarContainer
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        flexDirection: isMobile ? "column" : "row",
        zIndex: 100,
      }}
    >
      <a onClick={() => router.navigate("/")}></a>
      <img src={Logo} alt="Logo" />

      {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: "2vw",
            flex: 1,
            marginLeft: "5vw",
            marginTop: !isMobile ? "1rem" : "0",
          }}
        >
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
      <StyledButton
        style={{
          marginLeft: !isMobile ? "1rem" : "0",
          marginTop: !isMobile ? "0" : "1rem",
          fontSize: isMobile ? "14px" : "16px",
          width: isMobile ? "300px" : "auto",
          padding: isMobile ? "10px 20px" : "10px 20px",
        }}
      >
        Join us
      </StyledButton>
    </NavbarContainer>
  );
};

export default Navbar;
