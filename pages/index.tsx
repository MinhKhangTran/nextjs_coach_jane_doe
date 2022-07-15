import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Hero from "../components/hero";
import Welcome from "../components/welcome";
import { getJsonData } from "../utils/tool";

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
      <Welcome />
    </>
  );
};

export default Home;
