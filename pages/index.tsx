import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Hero from "../components/hero";
import Leistungen from "../components/leistungen";
import Welcome from "../components/welcome";
import { getJsonData } from "../utils/tool";

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
      <Welcome />
      <Leistungen />
    </>
  );
};

export default Home;
