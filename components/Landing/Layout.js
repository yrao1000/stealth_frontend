import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "./Card";
import ButtonAppBar from "./AppBar";

const Layout = () => {
  return (
    <>
      <ButtonAppBar />
      <Container sx = {{
        marginY : 5
      }}>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Card
              text={"Me a Card!"}
              imgLink={
                "https://blog.amopportunities.org/wp-content/uploads/2020/08/us-pacific-northwest-guide.jpg"
              }
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              text={"Me a Card!"}
              imgLink={
                "https://blog.amopportunities.org/wp-content/uploads/2020/08/us-pacific-northwest-guide.jpg"
              }
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              text={"Me a Card!"}
              imgLink={
                "https://blog.amopportunities.org/wp-content/uploads/2020/08/us-pacific-northwest-guide.jpg"
              }
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              text={"Me a Card!"}
              imgLink={
                "https://blog.amopportunities.org/wp-content/uploads/2020/08/us-pacific-northwest-guide.jpg"
              }
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Layout;
