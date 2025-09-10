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
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <div className="bg-[#F7F7F7] py-32 ">
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
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={featureImg1}
                      className="h-56 w-full object-cover"
                    />
                    <Button className="absolute top-3 left-3 text-sm cursor-pointer ">
                      Feature
                    </Button>
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">
                      House on the Hollywood
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-primary">$4,800</p>
                      <div className="flex gap-1.5 items-center">
                        <span>__6</span>
                        <span>__2</span>
                        <span>__200</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={featureImg2}
                      className="h-56 w-full object-cover"
                    />
                    <Button className="absolute top-3 left-3 text-sm cursor-pointer">
                      Feature
                    </Button>
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">
                      Comfortable Villa Green
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-primary">$5,800</p>
                      <div className="flex gap-1.5 items-center">
                        <span>__9</span>
                        <span>__3</span>
                        <span>__600</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={featureImg3}
                      className="h-56 w-full object-cover"
                    />
                    <Button className="absolute top-3 left-3 text-sm cursor-pointer ">
                      Feature
                    </Button>
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">
                      Quality House For Sale
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-primary">$2,500</p>
                      <div className="flex gap-1.5 items-center">
                        <span>__10</span>
                        <span>__2</span>
                        <span>__500</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={featureImg1}
                      className="h-56 w-full object-cover"
                    />
                    <Button className="absolute top-3 left-3 text-sm cursor-pointer ">
                      Feature
                    </Button>
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">
                      House on the Hollywood
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-primary">$4,800</p>
                      <div className="flex gap-1.5 items-center">
                        <span>__6</span>
                        <span>__2</span>
                        <span>__200</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={featureImg2}
                      className="h-56 w-full object-cover"
                    />
                    <Button className="absolute top-3 left-3 text-sm cursor-pointer">
                      Feature
                    </Button>
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">
                      Comfortable Villa Green
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-primary">$5,800</p>
                      <div className="flex gap-1.5 items-center">
                        <span>__9</span>
                        <span>__3</span>
                        <span>__600</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                  <div className="relative">
                    <img
                      alt="feature image"
                      src={featureImg3}
                      className="h-56 w-full object-cover"
                    />
                    <Button className="absolute top-3 left-3 text-sm cursor-pointer ">
                      Feature
                    </Button>
                  </div>

                  <div className="bg-white p-5">
                    <h3 className="font-semibold mb-1">
                      Quality House For Sale
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-primary">$2,500</p>
                      <div className="flex gap-1.5 items-center">
                        <span>__10</span>
                        <span>__2</span>
                        <span>__500</span>
                      </div>
                    </div>
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
