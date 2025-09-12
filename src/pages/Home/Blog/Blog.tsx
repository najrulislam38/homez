import Container from "@/components/Container";
import SectionDescription from "@/components/SectionDescription";
import SectionHeader from "@/components/SectionHeader";
import blogImg1 from "./../../../assets/images/blog/blog-1.jpg";
import blogImg2 from "./../../../assets/images/blog/blog-2.jpg";
import blogImg3 from "./../../../assets/images/blog/blog-3.jpg";
import blogImg4 from "./../../../assets/images/blog/blog-4.jpg";
import BlogCard from "./BlogCard";
import BlogSmallCard from "./BlogSmallCard";

export default function Blog() {
  return (
    <div className="py-10 md:py-20 lg:py-32 ">
      <Container>
        <div>
          <div className="text-center mb-10">
            <div>
              <SectionHeader title="From Our Blog" />
              <SectionDescription desc="Aliquam lacinia diam quis lacus euismod" />
            </div>
          </div>
          <div className=" grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {/* blog 1*/}
            <BlogCard
              blogImg={blogImg1}
              blogType={"Townhome"}
              title={"Unveils the Best Canadian Cities for Biking and Walk"}
            />
            {/* blog 2*/}
            <BlogCard
              blogImg={blogImg2}
              blogType={"Villa"}
              title={"Diamond Manor Apartment in the New York and Service"}
            />
            <div className="flex flex-col gap-7">
              {/* card 3 */}
              <BlogSmallCard
                blogImg={blogImg3}
                blogType="Townhome"
                title="7 Simple Ways to Keep
Your Kids’ Toys From…"
                postDate="February 3, 2023"
              />
              {/* card 4 */}
              <BlogSmallCard
                blogImg={blogImg4}
                blogType="House"
                title="Housing Markets That
Changed the Most This…"
                postDate="February 3, 2023"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
