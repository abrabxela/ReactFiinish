import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import GetFilmRequest from "../../hooks/GetFilmRequest";
import GoogleIcon from '@mui/icons-material/Google';
//import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Typography } from "@mui/material";
import BasicRating from "../../hooks/Rating"



const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#141414",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "left",
  color: "white",
}));


export default function SingleItemHeader() {
  const { filmId } = useParams();
  const apiData = GetFilmRequest(filmId);
  const { name, type, rating, runtime, premiered, genres, image } = { ...apiData };

  const filmDetailsKey = 'filmDetails';
  sessionStorage.setItem(filmDetailsKey, JSON.stringify(apiData));
  
  const { medium } = { ...image };
  const { average } = { ...rating };

  return (
    <Box sx={{ width: "100%", border: "solid", borderColor: "#E73F24", background:"#141414" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} >
          <Item>
            <Grid container>
              <Grid item xs={6}>
                <Item><Typography textTransform="uppercase" variant="h4">{name}</Typography></Item>
              </Grid>
              <Grid>
                <Item > 
                <BasicRating value={average}/>{average}
                </Item>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{color:"#E73F24"}}>{type}</Item>
            </Grid>
            <Grid container>
              <Item><GoogleIcon sx={{backgroundColor: "rgba(189, 189, 189, 0.6)" }}></GoogleIcon></Item>
              <Item>{runtime} min</Item>
              <Item><FiberManualRecordIcon fontSize="3"/>{premiered}</Item>
              
            </Grid>
            <Grid item xs={6}>
              <Item>
                <ShareIcon sx={{marginRight:'20px'}}/>
                <FavoriteIcon sx={{marginRight:'20px'}}/>
                <ControlPointIcon/>
              </Item>
            </Grid>
          </Item><Grid container>
          <Grid item>
            <Item sx={{display:"flex"}}>
              <LocalOfferIcon fontSize="3" sx={{color:"#E73F24"}}/>
              <Typography  sx={{color:"#E73F24"}}>
                Tags:
              </Typography>
              <Typography sx={{marginLeft:"10px"}}
              >
                {genres}
              </Typography>  
            </Item>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={medium} alt="imgFilm"  sx={{width: "345px",
            height: "222px"}}/>
        </Grid>
      </Grid>
    </Box>
  );
}
