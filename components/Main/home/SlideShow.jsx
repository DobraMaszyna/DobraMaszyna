import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import styled from 'styled-components';

const SlideShow = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]}>
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
  border-radius: 30px;
  width: 100%;
  height: 90%;
  object-fit: cover;
`;

export default SlideShow;
