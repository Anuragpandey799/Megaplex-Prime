import Hero from "../components/Hero";
import AboutProject from "../components/AboutProject";
import Amenities from "../components/Amenities";
import Township from "../components/Township";
import FloorPlans from "../components/FloorPlans";
import VideoSection from "../components/VideoSection";
import Developer from "../components/Developer";
import Construction from "../components/Construction";
import FAQ from "../components/FAQ";

import { useContent } from "../context/ContentContext";

function Home() {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading Website...
      </div>
    );
  }

  if (!content) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Failed to load content.
      </div>
    );
  }

  return (
    <>
      <Hero data={content.hero} />
      <AboutProject data={content.aboutProject} />
      <Amenities data={content.amenities} />
      <Township data={content.township} />
      <FloorPlans data={content.floorPlans} />
      <VideoSection data={content.videoSection} />
      <Developer data={content.developer} />
      <Construction data={content.construction} />
      <FAQ data={content.faq} />
    </>
  );
}

export default Home;
