import type { NextPage } from "next";
import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Leistungen from "../components/leistungen";
import Qualifikationen from "../components/qualifikationen";
import Testimonials from "../components/testimonials";
import Welcome from "../components/welcome";

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
      <Welcome />
      <Leistungen />
      <Testimonials />
      <Qualifikationen />
      <About />
      <Contact />
    </>
  );
};

export default Home;
