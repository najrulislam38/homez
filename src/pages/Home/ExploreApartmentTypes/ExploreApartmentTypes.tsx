import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import SectionDescription from "@/components/SectionDescription";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import apartmentType1 from "./../../../assets/images/apartment-types/type-1.jpg";
import apartmentType2 from "./../../../assets/images/apartment-types/type-2.jpg";
import apartmentType3 from "./../../../assets/images/apartment-types/type-3.jpg";
import apartmentType4 from "./../../../assets/images/apartment-types/type-4.jpg";
import apartmentType5 from "./../../../assets/images/apartment-types/type-5.jpg";
import apartmentType6 from "./../../../assets/images/apartment-types/type-6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function ExploreApartmentTypes() {
  return (
    <div className="py-10 md:py-20 lg:py-32 ">
      <Container>
        <div>
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <SectionHeader title="Explore Apartment Types" />
              <SectionDescription
                desc="Explore Apartment Types"
                color="text-muted-foreground"
              />
            </div>
            <Link
              to={"#"}
              className="flex items-center  gap-1 text-sm font-medium hover:text-[#EB6753] transition-all duration-300"
            >
              <span>All Types</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
          <div className="">
            <Swiper
              slidesPerView={5}
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
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={apartmentType1}
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
                      src={apartmentType2}
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
                      src={apartmentType3}
                      className="h-48 w-full object-cover"
                    />
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-sm">4 Properties</p>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={apartmentType4}
                      className="h-48 w-full object-cover"
                    />
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">Townhome</h3>
                    <p className="text-sm">2 Properties</p>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={apartmentType5}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">Villa</h3>
                    <p className="text-sm">4 Properties</p>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={apartmentType6}
                      className="h-48 w-full object-cover"
                    />
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">Bungalow</h3>
                    <p className="text-sm">1 Properties</p>
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
