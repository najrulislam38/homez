import SectionDescription from "@/components/SectionDescription";
import SectionHeader from "@/components/SectionHeader";
import image1 from "./../../../assets/images/people/people-1.jpg";
import image2 from "./../../../assets/images/people/people-2.jpg";
import image3 from "./../../../assets/images/people/people-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PeopleLove() {
  return (
    <div className=" py-10 md:py-20 lg:py-32 px-5 ">
      <div className="max-w-[1630px] mx-auto">
        <div className="text-center mb-10">
          <div>
            <SectionHeader title="People Love Living with Realtor" />
            <SectionDescription desc="Aliquam lacinia diam quis lacus euismod" />
          </div>
        </div>
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
            <div className="p-10 border border-[#E9E9E9] rounded-xl">
              <div className="flex items-start justify-between ">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image1}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Ali Tufan</h4>
                    <p className="text-muted-foreground">Marketing</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-10 rounded-xl border border-[#E9E9E9]">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image2}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Albert Flores</h4>
                    <p className="text-muted-foreground">Designer</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-10 border border-[#E9E9E9] rounded-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image3}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Robert Fox</h4>
                    <p className="text-muted-foreground">Developer</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-10 border border-[#E9E9E9] rounded-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image1}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Ali Tufan</h4>
                    <p className="text-muted-foreground">Marketing</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-10 rounded-xl border border-[#E9E9E9]">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image2}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Albert Flores</h4>
                    <p className="text-muted-foreground">Designer</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-10 border border-[#E9E9E9] rounded-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image3}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Robert Fox</h4>
                    <p className="text-muted-foreground">Developer</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti ”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-10 border border-[#E9E9E9] rounded-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image1}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Ali Tufan</h4>
                    <p className="text-muted-foreground">Marketing</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti ”
              </p>
            </div>
            <div className="p-10 rounded-xl border border-[#E9E9E9]">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image2}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Albert Flores</h4>
                    <p className="text-muted-foreground">Designer</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti ”
              </p>
            </div>
            <div className="p-10 border border-[#E9E9E9] rounded-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5 mb-12">
                  <div className="w-[60px] h-[60px] ">
                    <img
                      src={image3}
                      alt="people"
                      className="w-full h-full rounded-full object-fill"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Robert Fox</h4>
                    <p className="text-muted-foreground">Developer</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 37 26"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="37.000000"
                  height="26.000000"
                  opacity="0.349999994"
                  fill="none"
                >
                  <rect
                    id="SVG"
                    width="37.000000"
                    height="26.000000"
                    x="0.000000"
                    y="0.000000"
                  />
                  <path
                    id="Vector"
                    d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995L16.9 4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995L36.8 4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                    opacity="0.150000006"
                    fill="rgb(24,26,32)"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <p className="text-[15px] leading-7">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti ”
              </p>
            </div>
          </div> */}
      </div>
    </div>
  );
}
