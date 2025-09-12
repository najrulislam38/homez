import SearchBar from "../SearchBar/SearchBar";
import bannerImg from "./../../../assets/images/banner.jpg";

export default function HeroSection() {
  return (
    <>
      <div
        className="banner relative"
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SearchBar />
      </div>
    </>
  );
}
