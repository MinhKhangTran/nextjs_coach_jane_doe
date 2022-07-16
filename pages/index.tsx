import type { NextPage } from "next";
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
    </>
  );
};

export default Home;
