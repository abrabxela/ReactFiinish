import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import { DEFAULT_IMAGE_ACTOR } from "../../constants/imgActor";
import { NavLink, useParams } from "react-router-dom";
import SearchActor from "../../hooks/SearchActor";

export default function ActorItem() {
  const { filmId } = useParams();
  const detailsActor = SearchActor(filmId);
  return (
    <>
      <div style={{ width: "100%" }}>
        <Typography variant="h4" sx={{ marginTop: "50px", color: "white" }}>
          Starring
        </Typography>
      </div>
      <Box>
        <Grid container spacing={2}>
          {detailsActor.map((element, index) => {
            const { person } = { ...element };
            const { image, name, id } = { ...person };

            return (
              <Grid item xs={12} sm={6} key={index}>
                <NavLink to={`/Actor/${id}`} style={{ textDecoration: "none" }}>
                  <Card
                    key={index}
                    sx={{
                      marginTop: "30px",
                      marginLeft: "50px",
                      marginBottom: "50px",
                      background: "#191919",
                      color: "#fff",
                      maxWidth: "400px",
                    }}
                  >
                    <CardActionArea sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        image={image ? image.medium : DEFAULT_IMAGE_ACTOR}
                        alt="Actor img"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
