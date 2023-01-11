import * as React from "react";

import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Dialog,
  Button,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import auther from "./images/auther.PNG";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function EditProfile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open edit dialog
      </Button>
      <Dialog
        TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .css-twia2z-MuiPaper-root-MuiDialog-paper": {
            borderRadius: "10px",
            background: "#F9690E",
          },
        }}
      >
        <Box p={2}>
          <Box display="flex" justifyContent="end">
            <IconButton
              onClick={handleClose}
              sx={{ float: "right", color: "#ffffff" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box display="flex" alignItems="center" flexDirection="column">
            {/* <img
              src={auther}
              alt="not found"
              style={{
                width: "120px",
                borderRadius: "50%",
                border: "3px solid #ffffff",
              }}
            /> */}
            <AccountCircleIcon sx={{ color: "white", fontSize: "120px" }} />

            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{ color: "#ffffff" }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
              <Typography
                sx={{
                  pl: 1,
                  color: "#ffffff",
                  fontSize: "14px",
                  fotWeight: "700",
                }}
              >
                Upload image
              </Typography>
            </IconButton>
          </Box>
          <Box py={1}>
            <Typography sx={{ color: "#ffffff" }}>User Name</Typography>
            <InputBase
              placeholder="Enter user name"
              type="text"
              sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
          </Box>
          <Box py={1}>
            <Typography sx={{ color: "#ffffff" }}>Email</Typography>
            <InputBase
              placeholder="Enter your email"
              type="email"
              sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
          </Box>

          {/* <Box py={1}>
            <Typography sx={{ color: "#ffffff" }}>User name</Typography>
            <InputBase
              sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
          </Box> */}
          <Box py={1} display="flex" justifyContent="center">
            <Button
              onClick={handleClose}
              sx={{
                mt: 2,
                fontSize: "15px",
                width: "100%",
                borderRadius: "5px",
                background:
                  " linear-gradient(90deg, rgba(110,7,199,0.9223039557619923) 37%, rgba(204,13,227,0.981127485173757) 79%)",
                color: "white",
                fontWeight: 700,
              }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
