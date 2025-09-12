import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-[1170px] mx-auto absolute top-[90%] left-1/2 -translate-x-1/2 transform z-10 hidden xl:block">
      <Tabs defaultValue="tab-1" className="items-start">
        <TabsList className="">
          <TabsTrigger
            value="tab-1"
            className="  relative overflow-hidden border py-2  px-8 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="data-[state=active]:bg-muted  relative overflow-hidden rounded-none border py-2 px-8 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            For Sale
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="data-[state=active]:bg-muted  relative overflow-hidden rounded-none border py-2 px-8 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            For Rent
          </TabsTrigger>
        </TabsList>
        <div className="bg-white w-full rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px]">
          <TabsContent value="tab-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-wrap items-center gap-4 "
            >
              {/* Keywords */}
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1 ml-1 ">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Enter keywords"
                  className="w-full  rounded  p-2 text-sm focus:outline-none focus:ring focus:ring-primary"
                />
              </div>

              {/* Type */}
              <div className="flex-1 w-full ">
                <label className="block text-sm font-semibold mb-1 ml-1 ">
                  Looking For
                </label>
                <select className="w-full  rounded px-1  py-2 text-sm focus:outline-none focus:ring focus:ring-primary">
                  <option>Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Office</option>
                </select>
              </div>

              {/* Location */}
              <div className="flex-1 w-full">
                <label className="block text-sm font-semibold mb-1 ml-1 ">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full  rounded px-1  py-2 text-sm focus:outline-none focus:ring focus:ring-primary"
                />
              </div>

              {/* Price Range */}
              <div className="flex-1 min-w-[160px]">
                <label className="block text-sm font-semibold mb-1 ml-1 ">
                  Price
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    placeholder="$0"
                    className="w-1/2  rounded px-2 py-2 text-sm focus:outline-none focus:ring focus:ring-primary"
                  />
                  -
                  <input
                    type="number"
                    placeholder="$5800"
                    className="w-1/2 rounded px-2 py-2 text-sm focus:outline-none focus:ring focus:ring-primary"
                  />
                </div>
              </div>

              {/* Advanced */}
              <div className="flex items-center gap-1 text-sm  cursor-pointer hover:text-primary hover:transition duration-200">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Advanced</span>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="bg-orange-500 hover:opacity-90 text-white px-6 py-2 rounded-md flex items-center gap-2 transition duration-200"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </form>{" "}
          </TabsContent>
          <TabsContent value="tab-2">
            <p className="text-muted-foreground p-4 text-center text-xs">
              Content for Sales.....
            </p>
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="text-muted-foreground p-4 text-center text-xs">
              Content for Rent.....
            </p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
