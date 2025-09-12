import Container from "@/components/Container";
import sponsor1 from "./../../../assets/images/sponsor/sponsor-1.jpg";
import sponsor2 from "./../../../assets/images/sponsor/sponsor-2.jpg";
import sponsor3 from "./../../../assets/images/sponsor/sponsor-3.jpg";
import sponsor4 from "./../../../assets/images/sponsor/sponsor-4.jpg";
import sponsor5 from "./../../../assets/images/sponsor/sponsor-5.jpg";
import sponsor6 from "./../../../assets/images/sponsor/sponsor-6.jpg";

export default function TrustedSponsor() {
  return (
    <div className="pb-10 md:pb-20 lg:pb-32 ">
      <Container>
        <p className="text-center mb-12">Trusted by the world’s best</p>
        <div className="w-full flex flex-wrap gap-28 items-center justify-start">
          <div>
            <img src={sponsor1} alt="sponsor" />
          </div>
          <div>
            <img src={sponsor2} alt="sponsor" />
          </div>
          <div>
            <img src={sponsor3} alt="sponsor" />
          </div>
          <div>
            <img src={sponsor4} alt="sponsor" />
          </div>
          <div>
            <img src={sponsor5} alt="sponsor" />
          </div>
          <div>
            <img src={sponsor6} alt="sponsor" />
          </div>
        </div>
      </Container>
    </div>
  );
}
