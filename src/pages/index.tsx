import { type NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.league.useQuery();

  const leagueApiCall = async () => {
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json");
    console.log(await response.json());
  }

  return (<div onClick={leagueApiCall}>
    <img src="https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Aatrox.png" alt="image"></img>
  </div>);
};

export default Home;