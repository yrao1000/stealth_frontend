import PropTypes from "prop-types";

import { useState } from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import Main from "./main";
import Nav from "./Nav";

const Layout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
