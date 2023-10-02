import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import AutoSwiper from "./AutoSwiper";

const PosterSlide = ({ posters }) => {
  return (
    <AutoSwiper>
      {[...posters].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box sx={{
            paddingTop: "140%",
            margin: "5px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${tmdbConfigs.posterPath(item.file_path)})`
          }} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default PosterSlide;