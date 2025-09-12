import type { IApartmentType } from "@/types";

export default function ApartmentTypeCard({
  apartmentTypeImage,
  apartmentType,
  properties,
}: IApartmentType) {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <div className="relative">
        <img
          alt="feature image"
          src={apartmentTypeImage}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="bg-white p-5">
        <h3 className="font-semibold mb-1">{apartmentType}</h3>
        <p className="text-sm">{properties} Properties</p>
      </div>
    </div>
  );
}
