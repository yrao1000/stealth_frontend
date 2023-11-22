import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

function Landing() {
  return (
    <>
      <Typography variant="h1">Home Page</Typography>
      <Link href="/login" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="success">
          Login
        </Button>
      </Link>
    </>
  );
}
export default Landing;
