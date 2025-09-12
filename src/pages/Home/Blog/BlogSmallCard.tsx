import type { IBlog } from "@/types";

export default function BlogSmallCard({
  blogImg,
  blogType,
  title,
  postDate,
}: IBlog) {
  return (
    <div className="flex gap-5 items-center ">
      <div className="w-[170px] h-[140px] flex-shrink-0">
        <img
          src={blogImg}
          alt="blog"
          className="w-full h-full object-cover rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="space-y-5">
        <p className="text-sm text-muted-foreground ">{blogType}</p>

        <h3 className="text-sm font-semibold mt-">{title}</h3>
        <p className="text-sm text-muted-foreground ">{postDate}</p>
      </div>
    </div>
  );
}
