import { Swiper } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export function SwipperComponent({ children }) {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            setWrapperSize={true}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
            }}
        >
            {children}
        </Swiper>
    )
}