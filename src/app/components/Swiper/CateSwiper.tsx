'use client';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import './styles.css';

const options = [
  'All',
  'Upper Body',
  'Lower Body',
  'Hat',
  'Shoes',
  'Accessory',
  'Legendary',
  'Mythic',
  'Epic',
  'Upper Body 1',
  'Lower Body 1',
  'Hat 1',
  'Shoes 1',
  'Accessory 1',
  'Legendary 1',
  'Mythic1',
  'Epic1',
  'Upper Body 2',
  'Lower Body 2',
  'Hat 2',
  'Shoes 2',
  'Accessory 2',
  'Legendary 2',
  'Mythic 2',
  'Epic 2',
];

export default function CateSwiper() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const swiperRef = useRef<any>(null); // <- ref để điều khiển swiper instance

  const handleArrowClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // -> trượt tới slide tiếp theo
    }
  };

  return (
    <div className="cate-swiper-wrapper">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView="auto"
        spaceBetween={24}
        freeMode
        modules={[FreeMode]}
        className="cate-swiper"
      >
        {options.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`cate-slide ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </SwiperSlide>
        ))}
        {/* Arrow cuối */}
        <div className="cate-arrow" onClick={handleArrowClick}>
          <KeyboardArrowRightIcon />
        </div>
      </Swiper>
    </div>
  );
}
