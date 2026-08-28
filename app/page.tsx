import Hero from "@/components/sections/Hero";
import StickyNav from "@/components/StickyNav";
import VideoBand from "@/components/sections/VideoBand";
import Marquee from "@/components/sections/Marquee";
import Logros from "@/components/sections/Logros";
import Programa from "@/components/sections/Programa";
import Instructores from "@/components/sections/Instructores";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import ScrollFx from "@/components/ScrollFx";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main>
        <Hero />
        <VideoBand />
        <Marquee />
        <Logros />
        <Programa />
        <Instructores />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <ScrollFx />
      <Cursor />
    </>
  );
}
