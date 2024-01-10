import SingleItemHeader from "../components/FilmDetails/SingleItemHeader";
import SingleItemTabs from "../components/FilmDetails/SingleItemTabs";
import ActorItem from "../components/FilmDetails/ActorItem";
import { Box } from "@mui/material";
function FilmDetails() {
  return (
    <Box style={{ background: "#141414" }}>
      <SingleItemHeader />
      <SingleItemTabs />
      <ActorItem />
    </Box>
  );
}
export default FilmDetails;
