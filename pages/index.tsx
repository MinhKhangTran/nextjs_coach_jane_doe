import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { getJsonData, Root } from "../utils/tool";

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getJsonData();
  return {
    props: {
      data,
    },
  };
};

export default Home;
