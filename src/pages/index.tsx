import { type NextPage } from "next";
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
    <div>
      {JSON.stringify(champions.data["Aatrox"])}
      <img
        src="https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Aatrox.png"
        alt="image"
      ></img>
    </div>
  );
};

export default Home;
