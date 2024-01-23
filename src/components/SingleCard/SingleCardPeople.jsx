import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import { DEFAULT_IMAGE_ACTOR } from "../../constants/imgActor";

const buttonStyle = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #E50914",
  background: "#E50914",
  width: "100px",
  height: "30px",
  color: "#fff",
};

export default function SingleCardPeople(props) {
  const { id, name, time, image = DEFAULT_IMAGE_ACTOR } = props;
   return (
    <>
      <Card>
        <CardMedia
          sx={{
            width: "345px",
            height: "222px",
            position: "absolute",
            zIndex: 2,
          }}
          image={image}
          title="actor image"
        >
          <Card
            sx={{
              maxWidth: 345,
              background: `linear-gradient(
              90deg, 
              rgba(0, 0, 0, 0.80) 0%,  
              rgba(20, 20, 20, 0.40) 50%,  
              rgba(83, 100, 141, 0.00) 100%
            )`,
              position: "relative",
              width: "345px",
              height: "222px",
              zIndex: 1,
              color: "white",
              borderRadius: 0,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="left"
                mt={5}
              >
                {name}
              </Typography>
              <Typography variant="body2" color="text" align="left">
                {time}
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink to={`/actor/${id}`} style={buttonStyle}>
                See more
              </NavLink>
            </CardActions>
          </Card>
        </CardMedia>
      </Card>
    </>
  );
}
