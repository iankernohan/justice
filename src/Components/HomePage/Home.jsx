import useScrollToTop from "../../Hooks/useScrollToTop";
import Hero from "./Hero";
import LetsConnect from "./LetsConnect";
import PartnerWithUs from "./PartnerWithUs";
import ServicePoints from "./ServicePoints";
import "./Home.css";

export default function Home() {
  useScrollToTop();
  return (
    <div>
      <Hero />
      <ServicePoints />
      <LetsConnect />
      <PartnerWithUs />
    </div>
  );
}
