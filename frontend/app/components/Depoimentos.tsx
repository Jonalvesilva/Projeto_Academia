"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { depoimentos } from "../utils/constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Depoimentos() {
  return (
    <section
      style={{ backgroundImage: "url('./planos.jpg')" }}
      className="min-w-[320px] flex h-[500px] bg-cover"
    >
      <div className="flex max-w-screen-lg items-center justify-center flex-col w-full lg:mx-auto gap-y-6">
        <div>
          <h2 className="text-white text-3xl">Depoimentos</h2>
        </div>
        <>
          <Swiper
            slidesPerView={1}
            pagination={false}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper2 w-[90%] md:w-[80%] lg:w-[70%]"
            key="swiper2"
          >
            {depoimentos.map((data) => {
              return (
                <SwiperSlide key={data} className="bg-black/80 rounded-xl p-10">
                  <div>
                    <p className="text-white text-center text-lg sm:text-xl">
                      {data}
                    </p>
                    <div className="flex flex-row mt-4 w-full items-center justify-center gap-x-2">
                      {Array(5)
                        .fill(1)
                        .map((_, index) => (
                          <Image
                            src="/star.svg"
                            key={index}
                            alt="star"
                            width={24}
                            height={24}
                          />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    </section>
  );
}
