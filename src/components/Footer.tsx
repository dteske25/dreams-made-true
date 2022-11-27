import { Typography } from "@mui/material";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer>
      <Typography textAlign='center'>
        Copyright &copy; Dreams Made True, Inc. {dayjs().year()}
      </Typography>
    </footer>
  );
};

export default Footer;
