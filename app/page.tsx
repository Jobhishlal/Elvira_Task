import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutCategories from "@/components/SchoolUniforf";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurVision from "@/components/OurVision";
import Infrastructure from "@/components/Infrastructure";
import IdeologyAndFooter from "@/components/IdeologyAndFooter";
import MainFooter from "@/components/MainFooter";
export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutCategories />
      <WhyChooseUs />
      <OurVision />
      <Infrastructure />
      <IdeologyAndFooter/>
      <MainFooter />
    </main>
  );
}
