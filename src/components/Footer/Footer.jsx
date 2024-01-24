import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: "#141414",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
  display: "flex"
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, background: "#141414"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", flexWrap: 'wrap' }}>
              <Item>Terms Of Use</Item>
              <Item>Privacy-Policy</Item>
              <Item>FAQ</Item>
              <Item>Watch List</Item>
            </Grid>
            <Typography padding={3} sx={{ color: "white" }}>
              © 2021 STREAMIT. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, Streamit Inc. Duplication and copy of this is
              strictly prohibited. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container spacing={1} >
            <Grid item xs={12} sm={12} md={12}>
              <Item sx={{margin:"auto",}}>Follow Us:</Item>
            </Grid>
            <IconButton
              sx={{ color: "white", backgroundColor: "#252525", margin: "5px", "&:hover": {
                backgroundColor: "#404040",
              },
            }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white", backgroundColor: "#252525", margin: "5px", "&:hover": {
                backgroundColor: "#404040",
              }, }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white", backgroundColor: "#252525", margin: "5px", "&:hover": {
                backgroundColor: "#404040",
              }, }}
            >
              <GoogleIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white", backgroundColor: "#252525", margin: "5px", "&:hover": {
                backgroundColor: "#404040",
              }, }}
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <Item>Whatchit App</Item>
            </Grid>
            <IconButton>
              <img
                src="https://frames.payhub.com.ua/assets/images/GooglePlay.svg"
                alt="Google Play"
              />
              </IconButton>
              <IconButton>
              <img
                src="	https://frames.payhub.com.ua/assets/images/AppStore.svg"
                alt="IO play store"
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
