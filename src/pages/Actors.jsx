import SingleCardPeople from "../components/SingleCard/SingleCardPeople";
import { DEFAULT_IMAGE_ACTOR } from "../constants/imgActor";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/styles.css";
import SearchPeople from "../hooks/SearchPeople";
import { Grid, Typography } from "@mui/material";

export default function Actors() {
  const peoples = SearchPeople().slice(0, 20);

  return (
    <div style={{ background: "#141414" }}>
      <Typography
        sx={{ background: "#141414", color: "#fff", textAlign: "center" }}
      >
        20 Must popular actor
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ padding: 10, justifyContent: "center", alignItems: "center" }}
      >
        {peoples.map((element, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ height: "250px" }}
          >
            <SingleCardPeople
              id={element.id}
              name={element.name}
              time={element.birthday}
              image={element.image ? element.image.medium : DEFAULT_IMAGE_ACTOR}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
