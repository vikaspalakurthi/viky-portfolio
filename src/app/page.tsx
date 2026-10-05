import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import MetricsStrip from "@/components/MetricsStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import MiniVikas from "@/components/MiniVikas";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <Hero />
      <Ticker />
      <MetricsStrip />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Credentials />
      <Contact />
      <MiniVikas />
      <Footer />
    </main>
  );
}
