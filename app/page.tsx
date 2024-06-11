import Image from "next/image";
import Navbar from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import Features from "./Components/Features";
import FaqSection from "./Components/FaqSection"


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="px-[20px] lg:px-20 lg:container mx-auto">
        <Features/>
        <FaqSection/>
      </div>
    </>
  );
}
