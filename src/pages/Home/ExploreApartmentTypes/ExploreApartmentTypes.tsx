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
import ApartmentTypeCard from "./ApartmentTypeCard";

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
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper !pb-20 [&_.swiper-pagination-bullet-active]:bg-black "
            >
              <SwiperSlide>
                <ApartmentTypeCard
                  apartmentTypeImage={apartmentType1}
                  apartmentType={"Houses"}
                  properties={7}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ApartmentTypeCard
                  apartmentTypeImage={apartmentType2}
                  apartmentType={"Apartments"}
                  properties={3}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ApartmentTypeCard
                  apartmentTypeImage={apartmentType3}
                  apartmentType={"Office"}
                  properties={4}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ApartmentTypeCard
                  apartmentTypeImage={apartmentType4}
                  apartmentType={"Townhome"}
                  properties={2}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ApartmentTypeCard
                  apartmentTypeImage={apartmentType5}
                  apartmentType={"Villa"}
                  properties={4}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ApartmentTypeCard
                  apartmentTypeImage={apartmentType6}
                  apartmentType={"Bungalow"}
                  properties={1}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}
