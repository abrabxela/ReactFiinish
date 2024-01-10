import { Box, Grid } from "@mui/material";
import SingleCard from "../components/SingleCard/SingleCard";
import { DEFAULT_IMAGE_FILM } from "../constants/imgFilm";
import useRequest from "../hooks/UseRequest";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../store/SearchSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchPeople from "../hooks/SearchPeople";
import { DEFAULT_IMAGE_ACTOR } from "../constants/imgActor";
import SingleCardPeople from "../components/SingleCard/SingleCardPeople";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Home() {
  const apiSearch = useSelector((state) => state.search.search);
  const apiData = useRequest(apiSearch);
  const dispatch = useDispatch();
  const peoples = SearchPeople().slice(0, 10);
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <div>
        <Swiper
          style={{ minHeight: "25vh", background: "#141414" }}
          spaceBetween={30}
          slidesPerView={4}
          
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {peoples.map((element) => (
            <SwiperSlide key={element.id}>
              <SingleCardPeople
                id={element.id}
                name={element.name}
                time={element.birthday}
                image={
                  element.image ? element.image.medium : DEFAULT_IMAGE_ACTOR
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        style={{
          padding: "20px",
          background: "#141414",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          value={apiSearch}
          onChange={handleSearch}
          placeholder="Search"
          style={{
            color: "black",
            backgroundColor: "rgba(209,208,207,6)",
            height: "30px",
            border: "none",
            borderRadius: 30,
            padding: "10px",
            fontSize: 24,
          }}
        />
      </div>

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
          sx={{ padding: 10, justifyContent: "center", alignItems: "center" }}
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
export default Home;
