import Container from "@/components/Container";
import SectionDescription from "@/components/SectionDescription";
import SectionHeader from "@/components/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function PeopleLove() {
  return (
    <div className=" py-10 md:py-20 lg:py-32 ">
      <Container>
        <div>
          <div className="text-center mb-10">
            <div>
              <SectionHeader title="People Love Living with Realtor" />
              <SectionDescription desc="Aliquam lacinia diam quis lacus euismod" />
            </div>
          </div>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper !pb-20 [&_.swiper-pagination-bullet-active]:bg-black "
            >
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="">
                    <img
                      alt=""
                      src={"apartmentType1"}
                      className="h-48 w-full object-cover"
                    />
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">Houses</h3>
                    <p className="text-sm">7 Properties</p>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={"apartmentType2"}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">Apartments</h3>
                    <p className="text-sm">3 Properties</p>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={"apartmentType3"}
                      className="h-48 w-full object-cover"
                    />
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-sm">4 Properties</p>
                  </div>
                </article>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}
