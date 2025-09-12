import Container from "@/components/Container";
import SectionDescription from "@/components/SectionDescription";
import SectionHeader from "@/components/SectionHeader";

const categories = [
  {
    title: "Houses",
    count: "7 Properties",
    image: "https://i.ibb.co.com/KYHMTgN/type-1.jpg",
  },
  {
    title: "Apartments",
    count: "3 Properties",
    image: "https://i.ibb.co.com/352jVGQh/type-2.jpg",
  },
  {
    title: "Office",
    count: "4 Properties",
    image: "https://i.ibb.co.com/tjfFj8P/type-3.jpg",
  },
  {
    title: "Townhome",
    count: "2 Properties",
    image: "https://i.ibb.co.com/274Cjn3c/type-4.jpg",
  },
  {
    title: "Villa",
    count: "4 Properties",
    image: "https://i.ibb.co.com/0pPKCV9X/type-5.jpg",
  },
  {
    title: "Bungalow",
    count: "1 Property",
    image: "https://i.ibb.co.com/PZmqKPX3/type-6.jpg",
  },
];

export default function ApartmentTypes() {
  return (
    <div className=" py-10 md:py-20 lg:py-32 ">
      <Container>
        <div>
          <div className="text-center mb-10">
            <div>
              <SectionHeader title="Explore Apartment Types" />
              <SectionDescription desc="Aliquam lacinia diam quis lacus euismod" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`
    relative h-64 rounded-lg group overflow-hidden group shadow-md cursor-pointer
    ${idx === 0 ? "lg:col-span-2" : ""} 
    ${idx === categories.length - 1 ? "lg:col-span-2" : ""} 
  `}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-black/0 opacity-80"></div>

                <div className="absolute top-4 left-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-sm">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
