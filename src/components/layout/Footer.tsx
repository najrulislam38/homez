import Container from "../Container";
import { HouseIcon } from "lucide-react";
import SectionHeader from "../SectionHeader";
import SectionDescription from "../SectionDescription";
import { Button } from "../ui/button";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#181A20] text-white pt-12">
      <Container>
        <div>
          <div className="text-center">
            <SectionHeader title="Subscribe Our Newsletter" />
            <SectionDescription desc="We don’t send spam so don’t worry." />
            <div>
              <form
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="max-w-[570px] mx-auto mt-5"
              >
                <div className="bg-white text-black rounded-lg relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full p-6 border-none outline-none text-sm"
                  />

                  <Button
                    type="submit"
                    className="absolute top-[10px] right-2  py-5 text-sm font-bold tracking-wide text-white transition duration-300 hover:opacity-90 sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="">
            <div className="mt-8 grid grid-cols-a gap-8 md:grid-cols-2 lg:grid-cols-4 py-10 md:py-11">
              <div className="">
                <div className="flex gap-2 items-center justify-start mb-10">
                  <HouseIcon
                    size={36}
                    className=" p-2 bg-[#EB6753] text-white font-bold rounded-lg"
                  />
                  <span className="font-bold text-lg">Homez</span>
                </div>
                <div className="flex flex-col space-y-8">
                  <div>
                    <p className="text-sm ">Address</p>
                    <p className="font-semibold text-sm mt-3">
                      789 Queensberry Street, North Melbourne VIC 3051,
                      Australia.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">Total Free Customer Care</p>
                    <p className="font-semibold text-sm mt-3">
                      +(088) 123 456 789
                    </p>
                  </div>

                  <div>
                    <p className="text-sm">Live Support?</p>
                    <p className="font-semibold text-sm mt-3">hi@homez.com</p>
                  </div>
                </div>
              </div>

              <div className="">
                <p className="font-Semibold ">Popular Search</p>

                <ul className="mt-6 space-y-4  text-sm">
                  <li>
                    <Link
                      to={"#"}
                      className=" text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Apartment for Sale
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Apartment for Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Offices for Sale
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Offices for Rent
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="font-Semibold ">Quick Links</p>

                <ul className="mt-6 space-y-4  text-sm">
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Pricing Plans
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="text-[#BEBDBD] hover:pl-1 hover:transition-all hover:opacity-75 duration-300"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-Semibold ">Apps</p>
                <div className="mt-6 space-y-5">
                  <div className="flex gap-2 items-center bg-white/10 rounded-md px-6 py-4 ">
                    <svg
                      viewBox="0 0 39.5 27.8799"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="39.500000"
                      height="27.879883"
                      fill="none"
                    >
                      <rect
                        id="div.app-icon"
                        width="39.500000"
                        height="27.879999"
                        x="0.000000"
                        y="0.000000"
                      />
                      <path
                        id="Symbol"
                        d="M16.1484 15.54C16.1484 15.6416 15.9961 18.6377 19.2969 20.2119C18.6875 22.0908 16.5547 26.2549 14.0664 26.2549C12.6445 26.2549 11.832 25.3408 10.207 25.3408C8.53125 25.3408 7.61719 26.2549 6.34766 26.2549C3.91016 26.3564 1.57422 21.7861 0.914062 19.9072C0.40625 18.4854 0.203125 17.1143 0.203125 15.7939C0.203125 11.2744 3.19922 9.09082 6.04297 9.04004C7.41406 9.04004 9.14062 10.0049 9.90234 10.0049C10.6133 10.0049 12.5938 8.83691 14.4219 8.98926C16.3008 9.1416 17.7227 9.85254 18.6875 11.2236C17.0117 12.29 16.1484 13.6611 16.1484 15.54ZM13.3047 7.21191C12.2891 8.37988 11.0703 9.04004 9.75 8.93848C9.64844 7.56738 10.1562 6.29785 11.0703 5.28223C11.8828 4.36816 13.3047 3.60645 14.5234 3.50488C14.5234 4.06348 14.6758 5.58691 13.3047 7.21191Z"
                        fill="rgb(255,255,255)"
                        fill-rule="nonzero"
                      />
                    </svg>

                    <div>
                      <p className="text-sm text-[#BEBDBD]">Download on the </p>
                      <h5>Apple Store</h5>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center bg-white/10 rounded-md px-6 py-4 ">
                    <svg
                      viewBox="0 0 46 27.8799"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="46.000000"
                      height="27.879883"
                      fill="none"
                    >
                      <rect
                        id="div.app-icon"
                        width="46.000000"
                        height="27.879999"
                        x="0.000000"
                        y="0.000000"
                      />
                      <path
                        id="Symbol"
                        d="M16.5039 13.8135L5.28125 2.54004L19.5508 10.7666L16.5039 13.8135ZM2.38672 1.87988L15.3867 14.8799L2.38672 27.8799C1.72656 27.5752 1.26953 26.915 1.26953 26.1025L1.26953 3.70801C1.26953 2.89551 1.72656 2.23535 2.38672 1.87988ZM23.9688 13.3564C24.9336 14.0674 24.9336 15.7432 24.0195 16.4541L20.9727 18.1807L17.6211 14.8799L20.9727 11.6299L23.9688 13.3564ZM5.28125 27.2197L16.5039 15.9971L19.5508 19.0439L5.28125 27.2197Z"
                        fill="rgb(255,255,255)"
                        fill-rule="nonzero"
                      />
                    </svg>

                    <div>
                      <p className="text-sm text-[#BEBDBD]">Get in on </p>
                      <h5>Google Play</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 border-t border-[#ffffff12] pt-8 flex flex-wrap gap-5 items-center justify-between">
            <p className="text-sm">
              {" "}
              &copy; {new Date().getFullYear()} Homez – All rights reserved{" "}
            </p>

            <div className="flex gap-5 flex-wrap">
              <h5>Follow Us</h5>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
