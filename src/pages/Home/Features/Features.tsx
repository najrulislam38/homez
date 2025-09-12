import Container from "@/components/Container";
import SectionDescription from "@/components/SectionDescription";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import featureImg1 from "../../../assets/images/features/feature-1.jpg";
import featureImg2 from "../../../assets/images/features/feature-2.jpg";
import featureImg3 from "../../../assets/images/features/feature-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div className="bg-[#F7F7F7] py-10 md:py-20 lg:py-32 ">
      <Container>
        <div>
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <SectionHeader title="Discover Our Featured Listings" />
              <SectionDescription
                desc="Aliquam lacinia diam quis lacus euismod"
                color="text-muted-foreground"
              />
            </div>
            <Link
              to={"#"}
              className="flex items-center  gap-1 text-sm font-medium hover:text-[#EB6753] transition-all duration-300"
            >
              <span>See All Properties</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
          <div className="">
            <Swiper
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
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
                <FeatureCard
                  featureImg={featureImg1}
                  title={"House on the Hollywood"}
                  rate={"4,800"}
                  parking={6}
                  bedrooms={2}
                  area={200}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeatureCard
                  featureImg={featureImg2}
                  title={"Comfortable Villa Green"}
                  rate={"5,800"}
                  parking={9}
                  bedrooms={3}
                  area={600}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeatureCard
                  featureImg={featureImg3}
                  title={"Quality House For Sale"}
                  rate={"2,500"}
                  parking={10}
                  bedrooms={2}
                  area={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeatureCard
                  featureImg={featureImg1}
                  title={"House on the Hollywood"}
                  rate={"4,800"}
                  parking={6}
                  bedrooms={2}
                  area={200}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeatureCard
                  featureImg={featureImg2}
                  title={"Comfortable Villa Green"}
                  rate={"5,800"}
                  parking={9}
                  bedrooms={3}
                  area={600}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeatureCard
                  featureImg={featureImg3}
                  title={"Quality House For Sale"}
                  rate={"2,500"}
                  parking={10}
                  bedrooms={2}
                  area={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}
