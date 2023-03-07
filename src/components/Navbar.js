import React, { useState } from "react";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import Grow from "@mui/material/Grow";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const matchesXL = useMediaQuery("(min-width:1500px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:1500px)");
  const matchesSM = useMediaQuery("(min-width:700px)");
  const [state, setState] = useState({
    top: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        position: "relative",
        border: "0px solid red",
        height: anchor == "top" ? "40vh" : "100vh",
        width: anchor === "top" ? "auto" : 250,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <RxCross2
        onClick={toggleDrawer(anchor, false)}
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          padding: "2%",
          fontSize: "27px",
        }}
      />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={anchor == "top" ? "row" : "column"}
        sx={{ height: "30%", width: "30%" }}
      >
        <Grow in={state[anchor]}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{}}
          >
            <path
              d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
              fill="#858585"
            />
          </svg>
        </Grow>
        <Grow
          in={state[anchor]}
          style={{ transformOrigin: "0 0 0" }}
          {...(state[anchor] ? { timeout: 1000 } : {})}
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{}}
          >
            <path
              d="M18.9096 1.75698C21.1716 4.02498 21.2496 7.63698 19.1456 9.99298L10.6656 18.485L2.18763 9.99298C0.083632 7.63698 0.162632 4.01898 2.42363 1.75698C4.68863 -0.50702 8.31163 -0.58302 10.6676 1.52898C13.0166 -0.58002 16.6466 -0.51002 18.9096 1.75698ZM3.83863 3.17198C2.34863 4.66198 2.27363 7.04698 3.64663 8.62298L10.6666 15.654L17.6866 8.62398C19.0606 7.04698 18.9856 4.66498 17.4936 3.16998C16.0066 1.67998 13.6126 1.60798 12.0406 2.98398L7.83863 7.18698L6.42363 5.77298L9.24863 2.94598L9.16663 2.87698C7.59163 1.61198 5.28963 1.71998 3.83863 3.17198Z"
              fill="#858585"
            />
          </svg>
        </Grow>{" "}
        <Grow
          in={state[anchor]}
          style={{ transformOrigin: "0 0 0" }}
          {...(state[anchor] ? { timeout: 2000 } : {})}
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{}}
          >
            <path
              d="M3.83325 0H14.8333C14.9885 0 15.1416 0.036145 15.2805 0.105573C15.4193 0.175 15.5401 0.275804 15.6333 0.4L18.3333 4V19C18.3333 19.2652 18.2279 19.5196 18.0404 19.7071C17.8528 19.8946 17.5985 20 17.3333 20H1.33325C1.06804 20 0.813681 19.8946 0.626145 19.7071C0.438609 19.5196 0.333252 19.2652 0.333252 19V4L3.03325 0.4C3.1264 0.275804 3.24718 0.175 3.38604 0.105573C3.52489 0.036145 3.67801 0 3.83325 0ZM16.3333 6H2.33325V18H16.3333V6ZM15.8333 4L14.3333 2H4.33325L2.83325 4H15.8333ZM6.33325 8V10C6.33325 10.7956 6.64932 11.5587 7.21193 12.1213C7.77454 12.6839 8.5376 13 9.33325 13C10.1289 13 10.892 12.6839 11.4546 12.1213C12.0172 11.5587 12.3333 10.7956 12.3333 10V8H14.3333V10C14.3333 11.3261 13.8065 12.5979 12.8688 13.5355C11.9311 14.4732 10.6593 15 9.33325 15C8.00717 15 6.7354 14.4732 5.79772 13.5355C4.86004 12.5979 4.33325 11.3261 4.33325 10V8H6.33325Z"
              fill="#858585"
            />
          </svg>
        </Grow>{" "}
        <Grow
          in={state[anchor]}
          style={{ transformOrigin: "0 0 0" }}
          {...(state[anchor] ? { timeout: 2500 } : {})}
        >
          <svg
            width="17"
            height="22"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{}}
          >
            <path
              d="M16 21H14V19C14 18.2044 13.6839 17.4413 13.1213 16.8787C12.5587 16.3161 11.7956 16 11 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21H0V19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H11C12.3261 14 13.5979 14.5268 14.5355 15.4645C15.4732 16.4021 16 17.6739 16 19V21ZM8 12C7.21207 12 6.43185 11.8448 5.7039 11.5433C4.97595 11.2417 4.31451 10.7998 3.75736 10.2426C3.20021 9.68549 2.75825 9.02405 2.45672 8.2961C2.15519 7.56815 2 6.78793 2 6C2 5.21207 2.15519 4.43185 2.45672 3.7039C2.75825 2.97595 3.20021 2.31451 3.75736 1.75736C4.31451 1.20021 4.97595 0.758251 5.7039 0.456723C6.43185 0.155195 7.21207 -1.17411e-08 8 0C9.5913 2.37122e-08 11.1174 0.632141 12.2426 1.75736C13.3679 2.88258 14 4.4087 14 6C14 7.5913 13.3679 9.11742 12.2426 10.2426C11.1174 11.3679 9.5913 12 8 12ZM8 10C9.06087 10 10.0783 9.57857 10.8284 8.82843C11.5786 8.07828 12 7.06087 12 6C12 4.93913 11.5786 3.92172 10.8284 3.17157C10.0783 2.42143 9.06087 2 8 2C6.93913 2 5.92172 2.42143 5.17157 3.17157C4.42143 3.92172 4 4.93913 4 6C4 7.06087 4.42143 8.07828 5.17157 8.82843C5.92172 9.57857 6.93913 10 8 10Z"
              fill="#858585"
            />
          </svg>
        </Grow>
      </Box>
    </Box>
  );

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        height: "10vh",
        border: "0px solid red",
      }}
    >
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ border: "0px solid red" }}
        onClick={toggleDrawer("top", true)}
      >
        <path
          d="M13 14V16H2V14H13ZM18 7V9H0V7H18ZM16 0V2H5V0H16Z"
          fill="#770015"
        />
      </svg>
      <Drawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
      <p
        style={{
          width: "30%",
          textAlign: "center",
          fontWeight: " 600",
          fontSize: "16px",
          lineHeight: "21px",
          border: "0px solid red",
        }}
      >
        Logo Here
      </p>

      {!matchesSM && (
        <RxHamburgerMenu
          style={{ textAlign: "center", fontSize: "27px" }}
          onClick={toggleDrawer("right", true)}
        />
      )}
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
      {matchesSM && (
        <Box
          display="flex"
          justifyContent={matchesSM ? "space-around" : "end"}
          alignItems="center"
          sx={{
            width: matchesXL ? "11%" : matchesLG ? "15%" : "20%",
            border: "0px solid red",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: !matchesSM && "none" }}
          >
            <path
              d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
              fill="#858585"
            />
          </svg>
          <svg
            width="22"
            height="20"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: !matchesSM && "none" }}
          >
            <path
              d="M18.9096 1.75698C21.1716 4.02498 21.2496 7.63698 19.1456 9.99298L10.6656 18.485L2.18763 9.99298C0.083632 7.63698 0.162632 4.01898 2.42363 1.75698C4.68863 -0.50702 8.31163 -0.58302 10.6676 1.52898C13.0166 -0.58002 16.6466 -0.51002 18.9096 1.75698ZM3.83863 3.17198C2.34863 4.66198 2.27363 7.04698 3.64663 8.62298L10.6666 15.654L17.6866 8.62398C19.0606 7.04698 18.9856 4.66498 17.4936 3.16998C16.0066 1.67998 13.6126 1.60798 12.0406 2.98398L7.83863 7.18698L6.42363 5.77298L9.24863 2.94598L9.16663 2.87698C7.59163 1.61198 5.28963 1.71998 3.83863 3.17198Z"
              fill="#858585"
            />
          </svg>
          <svg
            width="20"
            height="21"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: !matchesSM && "none" }}
          >
            <path
              d="M3.83325 0H14.8333C14.9885 0 15.1416 0.036145 15.2805 0.105573C15.4193 0.175 15.5401 0.275804 15.6333 0.4L18.3333 4V19C18.3333 19.2652 18.2279 19.5196 18.0404 19.7071C17.8528 19.8946 17.5985 20 17.3333 20H1.33325C1.06804 20 0.813681 19.8946 0.626145 19.7071C0.438609 19.5196 0.333252 19.2652 0.333252 19V4L3.03325 0.4C3.1264 0.275804 3.24718 0.175 3.38604 0.105573C3.52489 0.036145 3.67801 0 3.83325 0ZM16.3333 6H2.33325V18H16.3333V6ZM15.8333 4L14.3333 2H4.33325L2.83325 4H15.8333ZM6.33325 8V10C6.33325 10.7956 6.64932 11.5587 7.21193 12.1213C7.77454 12.6839 8.5376 13 9.33325 13C10.1289 13 10.892 12.6839 11.4546 12.1213C12.0172 11.5587 12.3333 10.7956 12.3333 10V8H14.3333V10C14.3333 11.3261 13.8065 12.5979 12.8688 13.5355C11.9311 14.4732 10.6593 15 9.33325 15C8.00717 15 6.7354 14.4732 5.79772 13.5355C4.86004 12.5979 4.33325 11.3261 4.33325 10V8H6.33325Z"
              fill="#858585"
            />
          </svg>
          <svg
            width="17"
            height="22"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: !matchesSM && "none" }}
          >
            <path
              d="M16 21H14V19C14 18.2044 13.6839 17.4413 13.1213 16.8787C12.5587 16.3161 11.7956 16 11 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21H0V19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H11C12.3261 14 13.5979 14.5268 14.5355 15.4645C15.4732 16.4021 16 17.6739 16 19V21ZM8 12C7.21207 12 6.43185 11.8448 5.7039 11.5433C4.97595 11.2417 4.31451 10.7998 3.75736 10.2426C3.20021 9.68549 2.75825 9.02405 2.45672 8.2961C2.15519 7.56815 2 6.78793 2 6C2 5.21207 2.15519 4.43185 2.45672 3.7039C2.75825 2.97595 3.20021 2.31451 3.75736 1.75736C4.31451 1.20021 4.97595 0.758251 5.7039 0.456723C6.43185 0.155195 7.21207 -1.17411e-08 8 0C9.5913 2.37122e-08 11.1174 0.632141 12.2426 1.75736C13.3679 2.88258 14 4.4087 14 6C14 7.5913 13.3679 9.11742 12.2426 10.2426C11.1174 11.3679 9.5913 12 8 12ZM8 10C9.06087 10 10.0783 9.57857 10.8284 8.82843C11.5786 8.07828 12 7.06087 12 6C12 4.93913 11.5786 3.92172 10.8284 3.17157C10.0783 2.42143 9.06087 2 8 2C6.93913 2 5.92172 2.42143 5.17157 3.17157C4.42143 3.92172 4 4.93913 4 6C4 7.06087 4.42143 8.07828 5.17157 8.82843C5.92172 9.57857 6.93913 10 8 10Z"
              fill="#858585"
            />
          </svg>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
