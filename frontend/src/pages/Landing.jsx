import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Products from "../components/sections/Products";
import Customisation from "../components/sections/Customisation";
import Gallery from "../components/sections/Gallery";
import FinalCTA from "../components/sections/FinalCTA";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="bg-sundook-ivory text-sundook-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Customisation />
        <Gallery />
        <FinalCTA />
      </main>
    </div>
  );
}
