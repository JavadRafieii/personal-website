import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function SkillsSlider() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      speed={2000}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      allowTouchMove={false}
      breakpoints={{
        640: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 7,
        },
        1024: {
          slidesPerView: 6,
        },
        1280: {
          slidesPerView: 7,
        },
      }}
      className="skills-slider"
    >
      <SwiperSlide className="w-[60px] h-[60px] bg-midnight-gray rounded-md border border-earthy-green"></SwiperSlide>
      <SwiperSlide className="w-[60px] h-[60px] bg-midnight-gray rounded-md border border-earthy-green"></SwiperSlide>
      <SwiperSlide className="w-[60px] h-[60px] bg-midnight-gray rounded-md border border-earthy-green"></SwiperSlide>
      <SwiperSlide className="w-[60px] h-[60px] bg-midnight-gray rounded-md border border-earthy-green"></SwiperSlide>
      <SwiperSlide className="w-[60px] h-[60px] bg-midnight-gray rounded-md border border-earthy-green"></SwiperSlide>
      <SwiperSlide className="w-[60px] h-[60px] bg-midnight-gray rounded-md border border-earthy-green"></SwiperSlide>
      <SwiperSlide className="w-[60px] h-[60px] bg-midnight-gray rounded-md border border-earthy-green"></SwiperSlide>
      <SwiperSlide className="w-[60px] h-[60px] bg-midnight-gray rounded-md border border-earthy-green"></SwiperSlide>
    </Swiper>
  );
}

export default SkillsSlider;
