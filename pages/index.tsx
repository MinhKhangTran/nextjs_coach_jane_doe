import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Hero from "../components/hero";
import { getJsonData } from "../utils/tool";

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
    </>
  );
};

export default Home;
