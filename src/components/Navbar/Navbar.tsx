import Logo from "../../assets/logo.svg";
import Home from "../../assets/home.svg";
import Paitent from "../../assets/group.svg";
import Schedule from "../../assets/calendar.svg";
import Messages from "../../assets/chat.svg";
import Transaction from "../../assets/credit.svg";
import useRouter from "../../hooks/useRouter";
import { StyledButton } from "../helpers/GeneralComponents.styled";
import useMediaQuery from "../helpers/MediaQuery";
import { NavLink, NavbarContainer } from "./Navbar.styled";
const navLinks = [
  {
    title: "Home",
    ref: "/",
    icon: Home,
  },
  {
    title: "Paitent",
    icon: Paitent,
    ref: "/",
  },
  {
    title: "Schedule",
    ref: "/",
    icon: Schedule,
  },
  {
    title: "Messages",
    ref: "/",
    icon: Messages,
  },
  {
    title: "Transaction",
    ref: "/",
    icon: Transaction,
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
            <div className="flex gap-3">
              <img src={link.icon} alt={link.title} />
              <NavLink key={index} href={link.ref}>
                {link.title}
              </NavLink>
            </div>
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
              <>
                <img src={link.icon} alt={link.title} />
                <NavLink key={index} href={link.ref}>
                  {link.title}
                </NavLink>
              </>
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
