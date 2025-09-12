import { Button } from "@/components/ui/button";
import type { IFeatures } from "@/types";

export default function FeatureCard({
  featureImg,
  title,
  rate,
  parking,
  bedrooms,
  area,
}: IFeatures) {
  return (
    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <div className="relative">
        <img
          alt="feature image"
          src={featureImg}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <Button className="absolute top-3 left-3 text-sm cursor-pointer">
          Feature
        </Button>
      </div>
      <div className="bg-white p-5">
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-primary">${rate}</p>
          <div className="flex gap-1.5 items-center">
            <span>__{parking}</span>
            <span>__{bedrooms}</span>
            <span>__{area}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
