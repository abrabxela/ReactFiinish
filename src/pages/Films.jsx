import { Box, Grid } from "@mui/material";
import useRequest from "../hooks/UseRequest";
import SingleCard from "../components/SingleCard/SingleCard";
import { DEFAULT_IMAGE_FILM } from "../constants/imgFilm";

function Films() {
  const apiData = useRequest("");
  return (
    <>
    
      <Box
        style={{
          minHeight: "400px",
          backgroundImage: `url(https://gorodok.bz/upload/medialibrary/422/42202c1cb89675e8215c7c347d8d96d9.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          padding: "2px",
          display: "flex",
          gap: "10px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "120px", paddingLeft:"20px", paddingRight:"20px", justifyContent: "center", alignItems: "center" }}
        >
          {apiData.map(({ show }, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ height: "250px" }}
            >
              <SingleCard
                id={show.id}
                name={show.name}
                time={show.premiered}
                image={show.image ? show.image.medium : DEFAULT_IMAGE_FILM}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Films;
