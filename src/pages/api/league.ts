import { type NextApiRequest, type NextApiResponse } from "next";

const league = async (req: NextApiRequest, res: NextApiResponse) => {
    const league = await fetch("https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json")
    res.status(200).json(league);
};

export default league;
