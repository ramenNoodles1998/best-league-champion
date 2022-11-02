import { type NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: any = async () => {
  const hello = trpc.example.league.useQuery();
  const response = await fetch("https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json");
  console.log(response);

  return <div>hello</div>;
};

export default Home;