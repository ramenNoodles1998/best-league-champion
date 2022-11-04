import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [champions, setChampions] = useState(null);

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json"
    )
      .then((res) => res.json())
      .then((data) => setChampions(data));
  });

  if (!champions) {
    return <div>...Loading</div>;
  }

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center">
      <Head>
        <title>Hottest League Champion</title>
      </Head>
      <div className="pt-8 text-center text-2xl">Which League Champ is Hotter?</div>
      <div className="animate-fade-in flex max-w-2xl flex-col items-center justify-between align-center p-8 md:flex-row">
        <div>
          <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" />
        </div>
        <div className="p-8 text-xl italic">{"or"}</div>
        <div className="p-2" />
        <div>
          <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
