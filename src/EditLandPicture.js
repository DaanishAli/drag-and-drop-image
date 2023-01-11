import * as React from "react";

import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Dialog,
  Button,
  Slide,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};
const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  // padding: 4,
  boxSizing: "border-box",
};

export default function EditLandPicture() {
  const [openModal, setOpenModal] = React.useState(false);
  const [files, setFiles] = React.useState([]);

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
    </div>
  ));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open edit land dialog
      </Button>
      <Dialog
        TransitionComponent={Transition}
        open={openModal}
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
        <Box p={2} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" justifyContent="end">
            <IconButton
              onClick={handleClose}
              sx={{ float: "right", color: "#ffffff" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {files?.length > 0 ? (
              <aside style={thumbsContainer}>{thumbs}</aside>
            ) : (
              <Stack
                alignItems="center"
                sx={{ py: 3, color: "white", cursor: "pointer" }}
                onClick={open}
              >
                <CloudUploadIcon fontSize="large" />
                <Typography
                  sx={{ colo: "#ffffff", fontWeight: "600", fontSize: "18px" }}
                >
                  Browse Files
                </Typography>
                <Typography
                  sx={{ colo: "#ffffff", fontWeight: "600", fontSize: "14px" }}
                >
                  Drag and drop files here
                </Typography>
              </Stack>
            )}

            {files?.length > 0 && (
              <IconButton
                onClick={open}
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ color: "#ffffff" }}
              >
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
            )}
          </Box>
          <Box py={1}>
            <Typography sx={{ color: "#ffffff" }}>Title </Typography>
            <InputBase
              {...register("title", { required: true })}
              placeholder="Enter title"
              type="text"
              sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
            {errors.title && (
              <Typography sx={{ color: "#ffffff", fontSize: "14px" }}>
                This field is required *
              </Typography>
            )}
          </Box>
          <Box py={1}>
            <Typography sx={{ color: "#ffffff" }}>Price</Typography>
            <InputBase
              {...register("price", { required: true })}
              placeholder="Enter Price"
              type="text"
              sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
            {errors.price && (
              <Typography sx={{ color: "#ffffff", fontSize: "14px" }}>
                This field is required *
              </Typography>
            )}
          </Box>
          <Box py={1}>
            <Typography sx={{ color: "#ffffff" }}>Address</Typography>
            <InputBase
              {...register("address", { required: true })}
              placeholder="Enter address"
              type="text"
              sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
            {errors.address && (
              <Typography sx={{ color: "#ffffff", fontSize: "14px" }}>
                This field is required *
              </Typography>
            )}
          </Box>
          <Box py={1}>
            <Typography sx={{ color: "#ffffff" }}>Address details *</Typography>
            <InputBase
              multiline
              minRows={2}
              placeholder="Enter address details"
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

          <Box py={1} display="flex" justifyContent="center">
            <Button
              type="submit"
              // onClick={handleClose}
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
