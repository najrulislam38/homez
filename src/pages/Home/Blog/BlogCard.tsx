import type { IBlog } from "@/types";

export default function BlogCard({ blogImg, blogType, title }: IBlog) {
  return (
    <div>
      <div className="h-[260px] w-full relative ">
        <img
          src={blogImg}
          alt="blog"
          className="w-full h-full object-cover rounded-sm"
          loading="lazy"
        />
        <div className="absolute -bottom-8 right-10 flex flex-col gap-2 items-center bg-white px-5 py-3 rounded">
          <span className="text-sm">Feb</span>
          <span className="font-medium">03</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground my-5">{blogType}</p>

      <h3 className="text-sm font-semibold mt-">{title}</h3>
    </div>
  );
}
