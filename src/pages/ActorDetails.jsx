import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ActorSearchDetails from "../hooks/ActorSearchDetails";
import { DEFAULT_IMAGE_ACTOR } from "../constants/imgActor";


export default function ActorDetails() {
  const { actorId } = useParams();
  const actorInfo = [ActorSearchDetails(actorId)];
  

  

  return (
    <>
      {actorInfo.map((element) => {
        const { image, name, gender, birthday, country } = { ...element };
       
        console.log(country);
        return (
          <>
            <Grid
              container
              spacing={1}
              sx={{ background: "#141414", color: "#fff", padding: "30px" }}
            >
              <Grid item sx={4}>
                <img
                  src={image ? image.medium : DEFAULT_IMAGE_ACTOR}
                  alt="Actor img"
                />
              </Grid>
              <Grid item sx={8}>
                <Grid>
                  <Grid>{name}</Grid>
                  <Grid>anotation</Grid>
                </Grid>
                <Grid>film wis him scroll</Grid>
              </Grid>
              <Grid container sx={{display:"flex", flexDirection: "column"}}> 
                <Typography variant="h4">personal info</Typography>
                <Grid item>icons</Grid>
                <Grid item>Birthday: {birthday}</Grid>
                <Grid item>Country: </Grid>
                <Grid item>Gender: {gender}</Grid>
              </Grid>
            </Grid>
          </>
        );
      })}
    </>
  );
}
