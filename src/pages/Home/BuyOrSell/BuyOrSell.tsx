import { Button } from "@/components/ui/button";
import sectionImg from "./../../../assets/images/buy-or-sell.jpg";
import { ArrowUpRight } from "lucide-react";

export default function BuyOrSell() {
  return (
    <div
      className="banner "
      style={{
        width: "100%",
        height: "590px",
        backgroundImage: `url(${sectionImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -5,
      }}
    >
      <div className="text-white h-full w-full flex justify-center items-center">
        <div>
          <span className="text-center block ">Buy Or Sell</span>
          <h2 className="max-w-[972px] mx-auto text-2xl md:text-4xl font-semibold leading-14 my-5">
            Looking to Buy a new property or sell an existing one? Homez
            provides an awesome solution!
          </h2>

          <div className=" w-fit mx-auto flex gap-6 items-center justify-center ">
            <Button className=" w-fit mx-auto mt-7 px-7 py-5 flex gap-1 items-center bg-primary text-white  border border-primary  hover:bg-white hover:text-primary hover:border-white transition-all duration-300 cursor-pointer">
              <span>Submit Property</span>
              <ArrowUpRight />
            </Button>

            <Button className=" w-fit mx-auto mt-7 px-7 py-5 flex gap-1 items-center bg-white text-foreground  border  hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer">
              <span>Browse Properties</span>
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
