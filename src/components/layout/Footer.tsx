import Container from "../Container";
import { HouseIcon } from "lucide-react";
import SectionHeader from "../SectionHeader";
import SectionDescription from "../SectionDescription";
import { Button } from "../ui/button";

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
                    <p className="font-semibold mt-3">+(088) 123 456 789</p>
                  </div>

                  <div>
                    <p className="text-sm">Live Support?</p>
                    <p className="font-semibold mt-3">hi@homez.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500">
                &copy; 2022. Company Name. All rights reserved.
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Cookies{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
