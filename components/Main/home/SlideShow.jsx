import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';
import styled from 'styled-components';

const SlideShow = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}>
      <SwiperSlide>
        <SliderImage src='/slide-show/1.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <SliderImage src='/slide-show/2.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <SliderImage src='/slide-show/3.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <SliderImage src='/slide-show/1.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <SliderImage src='/slide-show/2.jpg' />
      </SwiperSlide>
    </Swiper>
  );
};

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: cover;
`;

export default SlideShow;
